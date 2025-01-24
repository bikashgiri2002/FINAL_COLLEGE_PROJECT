// models/Inventory.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    warehouseId: { type: Schema.Types.ObjectId, ref: 'Warehouse', required: true },
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inventory', InventorySchema);
