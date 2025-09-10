const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/scatch")
    .then(() => {
        console.log("✅ Connected to MongoDB successfully!");
    })
    .catch((err) => {
        console.error("❌ Failed to connect to MongoDB:", err.message);
    });

const db = mongoose.connection;
module.exports = db;
