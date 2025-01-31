const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to add a new product
router.post('/add-product', authMiddleware, productController.addProduct);

module.exports = router;
