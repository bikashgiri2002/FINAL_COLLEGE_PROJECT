const express = require("express");
require('dotenv').config();
const cors = require('cors');

// create express app
const app = express();

// port numbet from .env variable
const port = process.env.PORT || 3000;

// Routers
const authRoutes = require('./routes/authRoutes');
const shopRoutes = require('./routes/shopRoutes');
const warehouseRoutes = require('./routes/warehouseRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const productRoutes = require('./routes/productRoutes');

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to enable CORS for all origins
app.use(cors());

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/shop', shopRoutes);
app.use('/api/warehouse', warehouseRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/products', productRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// import dp connections
require("./config/db");

// server listening on port
app.listen(port, () => {
    console.log(`server listen on port ${port}`);
  });
