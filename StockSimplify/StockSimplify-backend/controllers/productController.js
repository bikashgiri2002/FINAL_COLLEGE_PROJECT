const Product = require('../models/Product');

// Add New Product
exports.addProduct = async (req, res) => {
    try {
        const { productName, description, category } = req.body;

        // Validate input
        if (!productName) {
            return res.status(400).json({ message: 'Product name is required' });
        }

        // Create new product
        const newProduct = new Product({ productName, description, category });
        await newProduct.save();

        res.status(201).json({ message: 'Product added successfully', product: newProduct });
    } catch (error) {
        res.status(500).json({ message: 'Error adding product', error: error.message });
    }
};
