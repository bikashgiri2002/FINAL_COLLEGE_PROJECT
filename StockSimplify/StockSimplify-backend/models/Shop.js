// models/Shop.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShopSchema = new Schema({
    shopName: { type: String, required: true },
    shopOwnerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    address: { type: String, required: true }
});

module.exports = mongoose.model('Shop', ShopSchema);
