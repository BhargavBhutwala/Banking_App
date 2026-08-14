const mongoose = require("mongoose");

const MONGODB_URI =
    process.env.MONGODB_URI ||
    "mongodb://127.0.0.1:27017/taskapp";

async function connectDB() {

    try {

        await mongoose.connect(MONGODB_URI);

        console.log("MongoDB connected successfully");

    } catch (error) {

        console.error(
            "MongoDB connection failed:",
            error.message
        );

        throw error;
    }
}

module.exports = connectDB;