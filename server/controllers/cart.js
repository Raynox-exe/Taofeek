const { knex } = require('../db');
const validator = require('validator');
const logger = require('../logger');

async function getCart(req, res) {
  try {
    const rows = await knex('cart_items').select('*').orderBy('id', 'asc');
    res.json(rows);
  } catch (e) { res.status(500).json({ error: 'db' }); }
}

async function addCartItem(req, res) {
  const { product_id, qty = 1, variant = '', size = '' } = req.body;
  const pid = Number(product_id) || null;
  try {
    const prod = pid ? await knex('products').where('id', pid).first() : null;
    const name = prod ? prod.name : validator.escape(String(req.body.name || 'Item'));
    const vendor = prod ? prod.vendor : validator.escape(String(req.body.vendor || ''));
    const price = prod ? Number(prod.price) : Number(req.body.price) || 0;
    const image = prod ? prod.image : validator.escape(String(req.body.image || ''));
    const existing = await knex('cart_items').where('product_id', pid).andWhereRaw('COALESCE(variant,"") = ?', [variant || '']).andWhereRaw('COALESCE(size,"") = ?', [size || '']).first();
    if (existing) {
      const newQty = (existing.qty || 1) + (qty || 1);
      await knex('cart_items').where('id', existing.id).update({ qty: newQty });
      const it = await knex('cart_items').where('id', existing.id).first();
      return res.json(it);
    }
    const now = Date.now();
    const [id] = await knex('cart_items').insert({ product_id: pid || null, name: name || '', vendor: vendor || '', price: price || 0, qty, image: image || '', variant: variant || '', size: size || '', created_at: now });
    const item = await knex('cart_items').where('id', id).first();
    logger.info('cart.add', { user: req.session.userId || null, product_id: pid, qty });
    res.json(item);
  } catch (e) { res.status(500).json({ error: 'db' }); }
}

async function updateCartItem(req, res) {
  const id = req.params.id;
  const { qty } = req.body;
  try {
    await knex('cart_items').where('id', id).update({ qty });
    const it = await knex('cart_items').where('id', id).first();
    res.json(it);
  } catch (e) { res.status(500).json({ error: 'db' }); }
}

async function deleteCartItem(req, res) {
  const id = req.params.id;
  try {
    await knex('cart_items').where('id', id).del();
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: 'db' }); }
}

async function clearCart(req, res) {
  try {
    await knex('cart_items').del();
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: 'db' }); }
}

module.exports = { getCart, addCartItem, updateCartItem, deleteCartItem, clearCart };
