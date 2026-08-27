const crypto = require('crypto');
const logger = require('../logger');

function paymentWebhook(req, res) {
  const secret = process.env.PAYMENT_WEBHOOK_SECRET;
  const sig = req.headers['x-signature'] || req.headers['stripe-signature'];
  if (!secret || !sig) return res.status(400).json({ error: 'missing_signature' });
  const hmac = crypto.createHmac('sha256', secret).update(req.body).digest('hex');
  try {
    if (!crypto.timingSafeEqual(Buffer.from(hmac), Buffer.from(String(sig)))) return res.status(400).json({ error: 'invalid_signature' });
  } catch (e) { return res.status(400).json({ error: 'invalid_signature' }); }
  logger.info('webhook.received', { ok:true });
  res.json({ ok: true });
}

module.exports = { paymentWebhook };
