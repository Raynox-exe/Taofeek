const { knex } = require('../db');

async function listMessages(req, res) {
  try {
    const userEmail = (req.query.email || req.session?.user?.email || '').toLowerCase().trim();
    if (!userEmail) {
      return res.json([]);
    }
    const rows = await knex('chat_messages')
      .where('vendor_email', userEmail)
      .orWhere('customer_email', userEmail)
      .orderBy('created_at', 'asc');
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: 'db_error', message: e.message });
  }
}

async function sendMessage(req, res) {
  try {
    const {
      chat_id, vendor_email, vendor_name, customer_email, customer_name,
      sender_role, sender_email, sender_name, text, product_context
    } = req.body;

    if (!text || !vendor_email || !customer_email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const id = 'msg_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
    const msg = {
      id,
      chat_id: chat_id || (vendor_email + ':' + customer_email),
      vendor_email: vendor_email.toLowerCase().trim(),
      vendor_name: vendor_name || 'Vendor',
      customer_email: customer_email.toLowerCase().trim(),
      customer_name: customer_name || 'Customer',
      sender_role: sender_role || 'customer',
      sender_email: (sender_email || req.session?.user?.email || customer_email).toLowerCase().trim(),
      sender_name: sender_name || 'User',
      text,
      product_context: typeof product_context === 'object' ? JSON.stringify(product_context) : product_context,
      is_read: false,
      created_at: Date.now()
    };

    await knex('chat_messages').insert(msg);
    res.status(201).json(msg);
  } catch (e) {
    res.status(500).json({ error: 'db_error', message: e.message });
  }
}

async function markChatRead(req, res) {
  try {
    const { chatId } = req.params;
    const userEmail = (req.body.email || req.session?.user?.email || '').toLowerCase().trim();
    if (!chatId) return res.status(400).json({ error: 'chatId required' });

    await knex('chat_messages')
      .where('chat_id', chatId)
      .andWhereNot('sender_email', userEmail)
      .update({ is_read: true });

    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: 'db_error', message: e.message });
  }
}

module.exports = { listMessages, sendMessage, markChatRead };
