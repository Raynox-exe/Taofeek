const express = require('express');
const router = express.Router();
const {
  getStats,
  listUsers,
  deleteUser,
  listOrders,
  createProduct,
  updateProduct,
  deleteProduct,
  listVendorApps,
  updateVendorAppStatus
} = require('../controllers/admin');

router.get('/stats', getStats);
router.get('/users', listUsers);
router.delete('/users/:id', deleteUser);
router.get('/orders', listOrders);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);
router.get('/vendor-apps', listVendorApps);
router.put('/vendor-apps/:appId/status', updateVendorAppStatus);
router.post('/vendor-apps/:appId/status', updateVendorAppStatus);

module.exports = router;
