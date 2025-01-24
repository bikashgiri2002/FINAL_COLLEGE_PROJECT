// controllers/warehouseController.js
const Warehouse = require('../models/Warehouse');

exports.addWarehouse = async (req, res) => {
    try {
        const { shopId, location, capacity, managers } = req.body;
        const newWarehouse = new Warehouse({ shopId, location, capacity, managers });
        await newWarehouse.save();
        res.status(201).json({ message: 'Warehouse added successfully', warehouse: newWarehouse });
    } catch (error) {
        res.status(400).json({ message: 'Error adding warehouse', error });
    }
};

exports.editWarehouseDetails = async (req, res) => {
    try {
        const { warehouseId, location, capacity } = req.body;
        const updatedWarehouse = await Warehouse.findByIdAndUpdate(warehouseId, { location, capacity }, { new: true });
        res.status(200).json({ message: 'Warehouse details updated', warehouse: updatedWarehouse });
    } catch (error) {
        res.status(400).json({ message: 'Error updating warehouse details', error });
    }
};

exports.assignManager = async (req, res) => {
    try {
        const { warehouseId, managerId } = req.body;
        const updatedWarehouse = await Warehouse.findByIdAndUpdate(warehouseId, { $addToSet: { managers: managerId } }, { new: true });
        res.status(200).json({ message: 'Manager assigned successfully', warehouse: updatedWarehouse });
    } catch (error) {
        res.status(400).json({ message: 'Error assigning manager', error });
    }
};
