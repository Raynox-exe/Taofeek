const { knex } = require('../db');
const logger = require('../logger');

// ── GET /api/admin/stats ──────────────────────────
async function getStats(req, res) {
  try {
    const [userCount] = await knex('users').count('* as count');
    const [productCount] = await knex('products').count('* as count');
    const [orderCount] = await knex('orders').count('* as count');
    const [revResult] = await knex('orders').sum('total as totalRevenue');

    const totalRevenue = Number(revResult?.totalRevenue || 0);
    const recentOrders = await knex('orders').select('*').orderBy('id', 'desc').limit(8);

    res.json({
      ok: true,
      stats: {
        totalRevenue,
        totalOrders: Number(orderCount?.count || 0),
        totalProducts: Number(productCount?.count || 0),
        totalUsers: Number(userCount?.count || 0)
      },
      recentOrders
    });
  } catch (e) {
    logger.error('admin.stats.error', e);
    res.status(500).json({ error: 'db', detail: String(e.message || e) });
  }
}

// ── GET /api/admin/users ──────────────────────────
async function listUsers(req, res) {
  try {
    const users = await knex('users')
      .select('id', 'name', 'email', 'role', 'created_at', 'failed_attempts')
      .orderBy('id', 'desc');
    res.json({ ok: true, users });
  } catch (e) {
    logger.error('admin.users.error', e);
    res.status(500).json({ error: 'db', detail: String(e.message || e) });
  }
}

// ── DELETE /api/admin/users/:id ───────────────────
async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    const count = await knex('users').where('id', id).del();
    res.json({ ok: true, deleted: count });
  } catch (e) {
    logger.error('admin.users.delete.error', e);
    res.status(500).json({ error: 'db', detail: String(e.message || e) });
  }
}

// ── GET /api/admin/orders ─────────────────────────
async function listOrders(req, res) {
  try {
    const orders = await knex('orders').select('*').orderBy('id', 'desc');
    const items = await knex('order_items').select('*');

    const ordersWithItems = orders.map(ord => ({
      ...ord,
      items: items.filter(it => it.order_id === ord.id || it.order_id === ord.order_id)
    }));

    res.json({ ok: true, orders: ordersWithItems });
  } catch (e) {
    logger.error('admin.orders.error', e);
    res.status(500).json({ error: 'db', detail: String(e.message || e) });
  }
}

// ── POST /api/admin/products ──────────────────────
async function createProduct(req, res) {
  const { name, vendor, price, originalPrice, discount, image, category, description, variant, size } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required' });
  }

  const metaObj = {
    originalPrice: originalPrice ? Number(originalPrice) : null,
    discount: discount ? Number(discount) : null,
    description: description || '',
    category: category || 'General'
  };

  try {
    const [newId] = await knex('products').insert({
      name,
      vendor: vendor || 'T-Shop Vendor',
      price: Number(price),
      image: image || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
      variant: variant || '',
      size: size || '',
      meta: JSON.stringify(metaObj)
    });

    res.json({ ok: true, id: newId, message: 'Product created successfully' });
  } catch (e) {
    logger.error('admin.product.create.error', e);
    res.status(500).json({ error: 'db', detail: String(e.message || e) });
  }
}

// ── PUT /api/admin/products/:id ───────────────────
async function updateProduct(req, res) {
  const { id } = req.params;
  const { name, vendor, price, originalPrice, discount, image, category, description, variant, size } = req.body;

  try {
    const existing = await knex('products').where('id', id).first();
    if (!existing) return res.status(404).json({ error: 'Product not found' });

    let existingMeta = {};
    try { existingMeta = JSON.parse(existing.meta || '{}'); } catch { existingMeta = {}; }

    const metaObj = {
      ...existingMeta,
      ...(originalPrice !== undefined ? { originalPrice: Number(originalPrice) } : {}),
      ...(discount !== undefined ? { discount: Number(discount) } : {}),
      ...(description !== undefined ? { description } : {}),
      ...(category !== undefined ? { category } : {})
    };

    const updatePayload = {
      ...(name ? { name } : {}),
      ...(vendor ? { vendor } : {}),
      ...(price !== undefined ? { price: Number(price) } : {}),
      ...(image ? { image } : {}),
      ...(variant !== undefined ? { variant } : {}),
      ...(size !== undefined ? { size } : {}),
      meta: JSON.stringify(metaObj)
    };

    await knex('products').where('id', id).update(updatePayload);
    res.json({ ok: true, message: 'Product updated successfully' });
  } catch (e) {
    logger.error('admin.product.update.error', e);
    res.status(500).json({ error: 'db', detail: String(e.message || e) });
  }
}

// ── DELETE /api/admin/products/:id ────────────────
async function deleteProduct(req, res) {
  const { id } = req.params;
  try {
    const count = await knex('products').where('id', id).del();
    res.json({ ok: true, deleted: count });
  } catch (e) {
    logger.error('admin.product.delete.error', e);
    res.status(500).json({ error: 'db', detail: String(e.message || e) });
  }
}

// ── GET /api/admin/vendor-apps ─────────────────────
async function listVendorApps(req, res) {
  try {
    const apps = await knex('vendor_applications').select('*').orderBy('id', 'asc');
    res.json({ ok: true, apps });
  } catch (e) {
    logger.error('admin.vendor_apps.list.error', e);
    res.status(500).json({ error: 'db', detail: String(e.message || e) });
  }
}

// ── PUT /api/admin/vendor-apps/:appId/status ──────
async function updateVendorAppStatus(req, res) {
  const { appId } = req.params;
  const { status } = req.body;
  if (!status) return res.status(400).json({ error: 'status required' });
  const now = Date.now();
  try {
    const app = await knex('vendor_applications').where('app_id', appId).orWhere('id', appId).first();
    if (!app) return res.status(404).json({ error: 'application not found' });

    await knex('vendor_applications').where('id', app.id).update({
      status,
      updated_at: now
    });

    // If approved, upgrade user with matching email to vendor
    if (status.toLowerCase() === 'approved' && app.email) {
      await knex('users').where({ email: app.email }).whereNot({ role: 'admin' }).update({ role: 'vendor' });
    }

    res.json({ ok: true, status, appId: app.app_id });
  } catch (e) {
    logger.error('admin.vendor_apps.status.error', e);
    res.status(500).json({ error: 'db', detail: String(e.message || e) });
  }
}

module.exports = {
  getStats,
  listUsers,
  deleteUser,
  listOrders,
  createProduct,
  updateProduct,
  deleteProduct,
  listVendorApps,
  updateVendorAppStatus
};

