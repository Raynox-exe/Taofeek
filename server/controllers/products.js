const { knex } = require('../db');

async function listProducts(req, res) {
  try {
    const rows = await knex('products').select('id','name','vendor','price','image','variant','size','meta').orderBy('id', 'asc');
    res.json(rows);
  } catch (e) { res.status(500).json({ error: 'db' }); }
}

module.exports = { listProducts };
