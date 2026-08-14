const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
    try {
        // Get Authorization header
        const authHeader = req.header("Authorization");

        if (!authHeader) {
            return res.status(401).json({
                error: "Please authenticate"
            });
        }

        // Extract token from "Bearer TOKEN"
        const token = authHeader.replace("Bearer ", "");

        // Verify JWT
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // Find user using ID stored inside JWT
        const user = await User.findById(decoded._id);

        if (!user) {
            return res.status(401).json({
                error: "User not found"
            });
        }

        // Attach user to request
        req.user = user;

        // Continue to /users/me
        next();

    } catch (error) {

        res.status(401).json({
            error: "Please authenticate"
        });

    }
};

module.exports = auth;