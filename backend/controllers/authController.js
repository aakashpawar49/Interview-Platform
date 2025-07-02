const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Generate JWT Token
const generateToken = (userId) => {
    return jwt.sign({ id: userId}, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
    res.send("Register route works");
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
    res.send("Login route works");
};

// @desc    Get user profile
// @route   POST /api/auth/profile
// @access  Public
const getUserProfile = async (req, res) => {
    res.send("Profile route works");
};

module.exports = { registerUser, loginUser, getUserProfile };