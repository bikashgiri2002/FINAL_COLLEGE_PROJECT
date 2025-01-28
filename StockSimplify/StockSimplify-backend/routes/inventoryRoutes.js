const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const inventoryController = require('../controllers/inventoryController');

router.post('/add-product', authMiddleware, inventoryController.addProduct);
router.put('/update-inventory', authMiddleware, inventoryController.updateInventory);
router.get('/user-inventory', authMiddleware, inventoryController.viewInventory);

module.exports = router;
