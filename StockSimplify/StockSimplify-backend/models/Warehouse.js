// models/Warehouse.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WarehouseSchema = new Schema({
    shopId: { type: Schema.Types.ObjectId, ref: 'Shop', required: true },
    location: { type: String, required: true },
    capacity: { type: Number, required: true },
    managers: [{ type: Schema.Types.ObjectId, ref: 'User' }] // Reference to managers
});

module.exports = mongoose.model('Warehouse', WarehouseSchema);
