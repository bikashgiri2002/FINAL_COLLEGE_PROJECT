// routes/shopRoutes.js
const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController');
const authMiddleware = require('../middleware/authMiddleware'); // Assume you have auth middleware

router.post('/register', authMiddleware, shopController.registerShop);
router.put('/edit', authMiddleware, shopController.editShopDetails);

module.exports = router;
