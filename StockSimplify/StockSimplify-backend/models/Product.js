// models/Product.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productName: { type: String, required: true },
    description: { type: String },
    category: { type: String }
});

module.exports = mongoose.model('Product', ProductSchema);
