const express = require('express');
const router = express.Router();
const webhooks = require('../controllers/webhooks');

router.post('/payment', express.raw({ type: '*/*' }), webhooks.paymentWebhook);

module.exports = router;
