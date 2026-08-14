const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/auth");

const router = express.Router();


// =========================================
// POST /users
// Signup
// =========================================

router.post("/", async (req, res) => {

    try {

        const {
            name,
            email,
            password
        } = req.body;


        const existingUser =
            await User.findOne({ email });


        if (existingUser) {

            return res.status(400).json({
                error: "Email already registered"
            });

        }


        const user = new User({
            name,
            email,
            password
        });


        await user.save();


        const token =
            user.generateAuthToken();


        res.status(201).json({

            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },

            token

        });

    } catch (error) {

        res.status(400).json({
            error: error.message
        });

    }
});


// =========================================
// POST /users/login
// Login
// =========================================

router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                error: "Invalid email or password"
            });
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(400).json({
                error: "Invalid email or password"
            });
        }

        const token = user.generateAuthToken();

        res.json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },
            token
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});


// =========================================
// GET /users/me
// Get logged-in user's profile
// =========================================

router.get("/me", auth, async (req, res) => {

    res.json({
        id: req.user._id,
        name: req.user.name,
        email: req.user.email
    });

});


module.exports = router;