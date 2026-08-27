const express = require('express');
const router = express.Router();
const { getCart, addCartItem, updateCartItem, deleteCartItem, clearCart } = require('../controllers/cart');

router.get('/', getCart);
router.post('/', addCartItem);
router.put('/:id', updateCartItem);
router.delete('/:id', deleteCartItem);
router.delete('/', clearCart);

module.exports = router;
