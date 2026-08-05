const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/user.controller.js');


/**
 * @route   POST /users/register
 * @desc    Register a new user
 * @access  Public
 */
userRoutes.post('/register', userController.registerUser);

/**
 * @route   POST /users/login
 * @desc    Login a user
 * @access  Public
 */
userRoutes.post('/login', userController.loginUser);


module.exports = userRoutes;