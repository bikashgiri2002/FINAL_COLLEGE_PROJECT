// routes/warehouseRoutes.js
const express = require('express');
const router = express.Router();
const warehouseController = require('../controllers/warehouseController');
const authMiddleware = require('../middleware/authMiddleware'); // Assume you have auth middleware

router.post('/add', authMiddleware, warehouseController.addWarehouse);
router.put('/edit', authMiddleware, warehouseController.editWarehouseDetails);
router.put('/assign-manager', authMiddleware, warehouseController.assignManager);

module.exports = router;
