const express = require('express');
const router = express.Router();
const { getWishlist, addWishlist, deleteWishlist } = require('../controllers/wishlist');

router.get('/', getWishlist);
router.post('/', addWishlist);
router.delete('/:product_id', deleteWishlist);

module.exports = router;
