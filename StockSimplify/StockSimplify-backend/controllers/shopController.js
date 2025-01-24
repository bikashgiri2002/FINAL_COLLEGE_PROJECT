// controllers/shopController.js
const Shop = require('../models/Shop');

exports.registerShop = async (req, res) => {
    try {
        const { shopName, address } = req.body;
        const shopOwnerId = req.user.userId; // Assuming user ID is available in req.user
        const newShop = new Shop({ shopName, address, shopOwnerId });
        await newShop.save();
        res.status(201).json({ message: 'Shop registered successfully', shop: newShop });
    } catch (error) {
        res.status(400).json({ message: 'Error registering shop', error });
    }
};

exports.editShopDetails = async (req, res) => {
    try {
        const { shopId, shopName, address } = req.body;
        const updatedShop = await Shop.findByIdAndUpdate(shopId, { shopName, address }, { new: true });
        res.status(200).json({ message: 'Shop details updated', shop: updatedShop });
    } catch (error) {
        res.status(400).json({ message: 'Error updating shop details', error });
    }
};
