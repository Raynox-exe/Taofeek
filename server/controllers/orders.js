const { knex } = require('../db');
const logger = require('../logger');

async function createOrder(req, res) {
  const { customer = '', email = '', items = [], shipping = 0, tax = 0, subtotal = 0, total = 0 } = req.body;
  const user_id = req.session && req.session.userId ? req.session.userId : null;
  const orderId = 'TS' + Date.now().toString(36).toUpperCase().slice(-8);
  const now = Date.now();
  try {
    const [oid] = await knex('orders').insert({ order_id: orderId, customer, email, user_id, subtotal, shipping, tax, total, created_at: now });
    for (const it of items) {
      const price = Number(it.price) || 0;
      await knex('order_items').insert({ order_id: oid, product_id: it.product_id || null, name: it.name || '', price: price, qty: it.qty || 1 });
    }
    await knex('cart_items').del();
    logger.info('orders.create', { order_id: orderId, user_id });
    res.json({ order_id: orderId, ok: true });
  } catch (e) { logger.error('orders.create.error', e); res.status(500).json({ error: 'db', detail: String(e.message || e) }); }
}

async function listOrders(req, res) {
  try {
    const rows = await knex('orders').select('*').orderBy('id', 'desc');
    res.json(rows);
  } catch (e) { res.status(500).json({ error: 'db' }); }
}

module.exports = { createOrder, listOrders };
