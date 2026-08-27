const { knex } = require('../db');

async function getWishlist(req, res) {
  try {
    const rows = await knex('wishlist').select('*').orderBy('id', 'asc');
    res.json(rows);
  } catch (e) { res.status(500).json({ error: 'db' }); }
}

async function addWishlist(req, res) {
  const { product_id, name } = req.body;
  const now = Date.now();
  try {
    const exists = await knex('wishlist').where('product_id', product_id).first();
    if (exists) return res.status(409).json({ error: 'exists' });
    const [id] = await knex('wishlist').insert({ product_id: product_id || null, name: name || '', created_at: now });
    const row = await knex('wishlist').where('id', id).first();
    res.json(row);
  } catch (e) { res.status(500).json({ error: 'db' }); }
}

async function deleteWishlist(req, res) {
  const pid = req.params.product_id;
  try {
    await knex('wishlist').where('product_id', pid).del();
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: 'db' }); }
}

module.exports = { getWishlist, addWishlist, deleteWishlist };
