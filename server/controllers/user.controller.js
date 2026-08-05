import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/**
 * @desc    Register a new user
 */
export const registerUser = async (req, res) => {
  try{
    const { name, email, password } = req.body;

    if(!name || !email || !password) {
      return res.status(400).json({ success: false, message: "Please provide all required fields" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword
    });
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return res.status(201).json({ success: true, token, user: {name: user.name} });


  } catch (error) {
    console.log(error)
    return res.status(500).json({ success: false, message: error.message });
  }

}

/**
 * @desc    Login a user
 */
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await userModel.findOne({ email });
    if(!user) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return res.status(200).json({ success: true, token, user: {name: user.name} });

  } catch (error) {
    console.log(error)
    return res.status(500).json({ success: false, message: error.message });
  }
}

/**
 * @desc    Get User Credit Balance
 */
export const userCredits = async (req, res) => {
  try{
    const {userId} = req.body;

    const user = await userModel.findById(userId);
    
    if(!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    } 

    return res.status(200).json({ success: true, credits: user.creditBalance, name: user.name });
  
  } catch (error) {
    console.log(error)
    return res.status(500).json({ success: false, message: error.message });
  }
}