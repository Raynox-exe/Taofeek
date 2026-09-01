const { knex } = require('../db');

async function listServices(req, res) {
  try {
    const rows = await knex('services').select('*').orderBy('id', 'desc');
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: 'db_error', message: e.message });
  }
}

async function createService(req, res) {
  try {
    const { title, provider, category, kind, price, location, image, description, owner_email, vendor_email } = req.body;
    if (!title || !provider) {
      return res.status(400).json({ error: 'Title and provider are required' });
    }
    const [id] = await knex('services').insert({
      title,
      provider,
      category: category || 'General',
      kind: kind || category || 'General Service',
      price: Number(price) || 0,
      rating: 5.0,
      reviews_count: 1,
      location: location || 'Nigeria',
      image: image || '',
      description: description || '',
      owner_email: (owner_email || req.session?.user?.email || '').toLowerCase().trim(),
      vendor_email: (vendor_email || req.session?.user?.email || '').toLowerCase().trim(),
      verified: true,
      created_at: Date.now()
    });
    const created = await knex('services').where({ id }).first();
    res.status(201).json(created || { id });
  } catch (e) {
    res.status(500).json({ error: 'db_error', message: e.message });
  }
}

async function updateService(req, res) {
  try {
    const { id } = req.params;
    const { title, provider, category, kind, price, location, image, description } = req.body;
    await knex('services').where({ id }).update({
      title,
      provider,
      category,
      kind,
      price: Number(price) || 0,
      location,
      image,
      description
    });
    const updated = await knex('services').where({ id }).first();
    res.json(updated);
  } catch (e) {
    res.status(500).json({ error: 'db_error', message: e.message });
  }
}

async function deleteService(req, res) {
  try {
    const { id } = req.params;
    await knex('services').where({ id }).delete();
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: 'db_error', message: e.message });
  }
}

module.exports = { listServices, createService, updateService, deleteService };
