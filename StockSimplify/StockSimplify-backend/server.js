const express = require("express");
require('dotenv').config();

// create express app
const app = express();

// port numbet from .env variable
const port = process.env.PORT || 3000;

// import dp connections
require("./config/db");

// server listening on port
app.listen(port, () => {
    console.log(`server listen on port ${port}`);
  });