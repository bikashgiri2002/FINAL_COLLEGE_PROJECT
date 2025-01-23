const mongoose = require('mongoose');
require('dotenv').config();

// Connection URL
const url = process.env.mongoDB; // Ensure this matches your .env variable
console.log(url);

async function connectToDatabase() {
    try {
        // Connect to the MongoDB server
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected successfully to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToDatabase();
