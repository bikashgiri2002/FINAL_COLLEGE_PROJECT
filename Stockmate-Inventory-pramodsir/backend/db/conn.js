const mongoose = require("mongoose");

const DB = process.env.DATABASE;
console.log(DB);

mongoose
  .connect(DB)
  .then(() => {
    console.log("connection sucessful");
  })
  .catch((err) => {
    console.log("No connection");
  });
