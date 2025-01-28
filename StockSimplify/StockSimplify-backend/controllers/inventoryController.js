const Inventory = require('../models/Inventory');
const Warehouse = require('../models/Warehouse');
const Product = require('../models/Product');

// Add Product to Inventory
exports.addProduct = async (req, res) => {
    try {
        const { warehouseId, productId, quantity } = req.body;
        const newInventory = new Inventory({ warehouseId, productId, quantity });
        await newInventory.save();
        res.status(201).json({ message: 'Product added to inventory', inventory: newInventory });
    } catch (error) {
        res.status(400).json({ message: 'Error adding product to inventory', error: error.message });
    }
};

// Update Inventory
exports.updateInventory = async (req, res) => {
    try {
        const { inventoryId, quantity } = req.body;
        const updatedInventory = await Inventory.findByIdAndUpdate(inventoryId, { quantity, lastUpdated: Date.now() }, { new: true });
        res.status(200).json({ message: 'Inventory updated', inventory: updatedInventory });
    } catch (error) {
        res.status(400).json({ message: 'Error updating inventory', error: error.message });
    }
};

// View User's Inventory
exports.viewInventory = async (req, res) => {
    try {
        const userId = req.user.userId;

        // Find all warehouses managed by the user
        const warehouses = await Warehouse.find({ managers: userId }).populate('shopId');

        // Find all inventory items in the user's warehouses
        const inventory = await Inventory.find({ warehouseId: { $in: warehouses.map(w => w._id) } }).populate('productId');

        res.status(200).json({ message: 'Inventory fetched', warehouses, inventory });
    } catch (error) {
        res.status(400).json({ message: 'Error fetching inventory', error: error.message });
    }
};
