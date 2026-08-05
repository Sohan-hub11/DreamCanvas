import express from 'express';
import * as userController from '../controllers/user.controller.js';
import { authUser } from '../middlewares/auth.middleware.js';
const Routes = express.Router();

/**
 * @route   POST /users/register
 * @desc    Register a new user
 * @access  Public
 */
Routes.post('/register', userController.registerUser);

/**
 * @route   POST /users/login
 * @desc    Login a user
 * @access  Public
 */
Routes.post('/login', userController.loginUser);

/**
 * @route   GET /users/credits
 * @desc    Get User Credit Balance
 * @access  Private
 */
Routes.get('/credits', authUser, userController.userCredits);

export default Routes;