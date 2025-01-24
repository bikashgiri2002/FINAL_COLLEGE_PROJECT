// controllers/inventoryController.js
const Inventory = require('../models/Inventory');

exports.addProduct = async (req, res) => {
    try {
        const { warehouseId, productId, quantity } = req.body;
        const newInventory = new Inventory({ warehouseId, productId, quantity });
        await newInventory.save();
        res.status(201).json({ message: 'Product added to inventory', inventory: newInventory });
    } catch (error) {
        res.status(400).json({ message: 'Error adding product to inventory', error });
    }
};

exports.updateInventory = async (req, res) => {
    try {
        const { inventoryId, quantity } = req.body;
        const updatedInventory = await Inventory.findByIdAndUpdate(inventoryId, { quantity, lastUpdated: Date.now() }, { new: true });
        res.status(200).json({ message: 'Inventory updated', inventory: updatedInventory });
    } catch (error) {
        res.status(400).json({ message: 'Error updating inventory', error });
    }
};

exports.viewInventory = async (req, res) => {
    try {
        const { warehouseId } = req.params;
        const inventory = await Inventory.find({ warehouseId }).populate('productId');
        res.status(200).json({ message: 'Inventory fetched', inventory });
    } catch (error) {
        res.status(400).json({ message: 'Error fetching inventory', error });
    }
};
