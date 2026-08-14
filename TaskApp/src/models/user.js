const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
});

// Hash password before saving
userSchema.pre("save", async function () {

    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 8);
    }

});

// Compare login password with hashed password
userSchema.methods.comparePassword = async function (password) {

    return bcrypt.compare(password, this.password);

};

// Generate JWT
userSchema.methods.generateAuthToken = function () {

    return jwt.sign(
        { _id: this._id.toString() },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

};

const User = mongoose.model("User", userSchema);

module.exports = User;