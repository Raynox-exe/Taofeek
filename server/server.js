const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const helmet = require('helmet');
const csurf = require('csurf');
const rateLimit = require('express-rate-limit');
const validator = require('validator');
const sanitizeHtml = require('sanitize-html');
const fs = require('fs');
const crypto = require('crypto');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const multer = require('multer');
const logger = require('./logger');
const { knex } = require('./db');

const app = express();
// Security headers (allow external fonts and images for frontend)
app.use(helmet({ contentSecurityPolicy: false }));
// HSTS
app.use(helmet.hsts({ maxAge: 31536000, includeSubDomains: true, preload: true }));

// Lock down CORS to configured origin or allow localhost/127.0.0.1 in dev
const CORS_ORIGIN = process.env.CORS_ORIGIN || (process.env.NODE_ENV === 'production' ? '' : true);
app.use(cors({ origin: CORS_ORIGIN, credentials: true }));

// Limit request size (support large uploads / base64)
app.use(express.json({ limit: process.env.REQUEST_SIZE_LIMIT || '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Session cookie flags
const sessOptions = {
  secret: process.env.SESSION_SECRET || 'tshop-demo-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.SESSION_SECURE === 'true',
    httpOnly: true,
    sameSite: process.env.SESSION_SAMESITE || 'lax'
  }
};
// Use DB-backed session store in production-like setups
sessOptions.store = new KnexSessionStore({ knex: require('./db').knex, tablename: 'sessions' });
app.use(session(sessOptions));

// Serve static uploaded files
const uploadsDir = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });
app.use('/uploads', express.static(uploadsDir));

// Serve updated frontend as default static folder
app.use(express.static(path.join(__dirname, '..', 'updated'), { dotfiles: 'ignore', index: ['index.html'] }));
app.use('/updated', express.static(path.join(__dirname, '..', 'updated')));
app.use(express.static(path.join(__dirname, '..'), { dotfiles: 'ignore' }));

// CSRF protection using cookie tokens (expose endpoint for SPA)
app.use(cookieParser());
const csrfProtection = csurf({ cookie: true });
// Apply CSRF to state-changing methods except upload, auth, and admin vendor-apps
app.use((req, res, next) => {
  if (['GET','HEAD','OPTIONS'].includes(req.method)) return next();
  if (req.path.startsWith('/api/upload') || req.path.startsWith('/api/auth') || req.path.startsWith('/api/admin/vendor-apps')) return next();
  return csrfProtection(req, res, next);
});
app.get('/api/csrf-token', csrfProtection, (req, res) => { try { res.json({ csrfToken: req.csrfToken() }); } catch(e){ res.json({ csrfToken: null }); } });

// Mount modular routes
app.use('/api/products', require('./routes/products'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/wishlist', require('./routes/wishlist'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/upload', require('./routes/upload'));
app.use('/api/webhooks', require('./routes/webhooks'));
app.use('/api/admin', require('./routes/admin'));

// Fallback error handler
app.use((err, req, res, next) => {
  if (err.code === 'EBADCSRFTOKEN') {
    logger.warn('csrf.failed', { ip: req.ip, path: req.path });
    return res.status(403).json({ error: 'invalid_csrf' });
  }
  logger.error('server.error', err);
  res.status(500).json({ error: 'internal', message: err.message });
});

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, async () => {
    logger.info(`Server started on port ${PORT}`);
    console.log(`T-Shop backend running on http://localhost:${PORT}`);
      const hasUserTable = await knex.schema.hasTable('users');
      if (hasUserTable) {
        const hasRoleCol = await knex.schema.hasColumn('users', 'role');
        if (!hasRoleCol) {
          await knex.schema.alterTable('users', (t) => {
            t.string('role', 50).defaultTo('customer');
          });
        }
      }
      const hasTable = await knex.schema.hasTable('vendor_applications');
      if (!hasTable) {
        await knex.schema.createTable('vendor_applications', (table) => {
          table.increments('id').primary();
          table.string('app_id', 100).unique().notNullable();
          table.string('shop_name', 255).notNullable();
          table.string('email', 255).notNullable();
          table.string('category', 100).defaultTo('General');
          table.text('bio');
          table.string('status', 50).defaultTo('Pending');
          table.bigInteger('created_at').notNullable();
          table.bigInteger('updated_at').notNullable();
        });
      }
      // Sync mary@gmail.com to vendor role
      await knex('users').where({ email: 'mary@gmail.com' }).update({ role: 'vendor' });
      const now = Date.now();
      const existingMaryApp = await knex('vendor_applications').where({ email: 'mary@gmail.com' }).first();
      if (!existingMaryApp) {
        await knex('vendor_applications').insert({
          app_id: 'app-mary',
          shop_name: 'mary',
          email: 'mary@gmail.com',
          category: 'General',
          bio: 'Registered vendor shop',
          status: 'Approved',
          created_at: now,
          updated_at: now
        });
      }
    } catch (dbErr) {
      logger.warn('server.init_db.warn', dbErr.message);
    }
  });
}

module.exports = app;
