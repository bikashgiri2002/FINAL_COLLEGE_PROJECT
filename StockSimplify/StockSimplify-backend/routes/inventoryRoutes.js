// routes/inventoryRoutes.js
const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');
const authMiddleware = require('../middleware/authMiddleware'); // Assume you have auth middleware

router.post('/add', authMiddleware, inventoryController.addProduct);
router.put('/update', authMiddleware, inventoryController.updateInventory);
router.get('/view/:warehouseId', authMiddleware, inventoryController.viewInventory);

module.exports = router;
