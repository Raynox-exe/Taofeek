// controllers live at project root; server/db.js is inside `server/`.
const { knex } = require('../server/db');
const validator = require('validator');
const sanitizeHtml = require('sanitize-html');
const bcrypt = require('bcrypt');
const logger = require('../server/logger');

async function register(req, res) {
  const { name = '', email = '', password = '' } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'email and password required' });
  const now = Date.now();
  try {
    const safeEmail = validator.normalizeEmail(String(email));
    if (!safeEmail || !validator.isEmail(safeEmail)) return res.status(400).json({ error: 'invalid_email' });
    if (String(password).length < 4) return res.status(400).json({ error: 'password_too_short' });
    const safeName = sanitizeHtml(String(name || ''));
    const hash = await bcrypt.hash(String(password), Number(process.env.BCRYPT_ROUNDS || 10));
    const [id] = await knex('users').insert({ name: safeName, email: safeEmail, password: hash, password_changed_at: now, created_at: now });
    const user = await knex('users').where('id', id).first();
    req.session.userId = user.id;
    logger.info('auth.register', { user: user.id, email: user.email });
    res.json({ ok: true, user: { id: user.id, name: user.name, email: user.email } });
  } catch (e) { logger.error('auth.register.error', { err: e && (e.message || e) }); console.error('auth.register.error', e); res.status(400).json({ error: 'could not register', detail: String(e && e.message ? e.message : e) }); }
}

async function login(req, res) {
  const { email = '', password = '' } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'email and password required' });
  try {
    const safeEmail = validator.normalizeEmail(String(email));
    const user = await knex('users').where('email', safeEmail).first();
    const now = Date.now();
    if (!user) return res.status(401).json({ error: 'invalid' });
    if (user.locked_until && Number(user.locked_until) > now) { logger.warn('auth.locked_attempt', { email: safeEmail, userId: user.id }); return res.status(423).json({ error: 'locked' }); }
    const ok = await bcrypt.compare(String(password), String(user.password));
    if (!ok) {
      const attempts = (user.failed_attempts || 0) + 1;
      const updates = { failed_attempts: attempts };
      if (attempts >= 5) { updates.locked_until = now + (15 * 60 * 1000); }
      await knex('users').where('id', user.id).update(updates);
      logger.warn('auth.failed', { email: safeEmail, attempts });
      return res.status(401).json({ error: 'invalid' });
    }
    await knex('users').where('id', user.id).update({ failed_attempts: 0, locked_until: null });
    req.session.userId = user.id;
    req.session.passwordChangedAt = user.password_changed_at || null;
    logger.info('auth.login', { user: user.id, email: user.email });
    res.json({ ok: true, user: { id: user.id, name: user.name, email: user.email } });
  } catch (e) { res.status(500).json({ error: 'db' }); }
}

async function me(req, res) {
  const uid = req.session && req.session.userId;
  if (!uid) return res.json({ user: null });
  try {
    const user = await knex('users').where('id', uid).first();
    if (req.session.passwordChangedAt && user.password_changed_at && Number(user.password_changed_at) > Number(req.session.passwordChangedAt || 0)) { req.session.destroy(() => {}); return res.json({ user: null }); }
    res.json({ user: user || null });
  } catch (e) { res.status(500).json({ error: 'db' }); }
}

async function logout(req, res) {
  req.session.destroy(() => res.json({ ok: true }));
}

module.exports = { register, login, me, logout };
