import userModel from '../models/user.model.js';


/**
 * @desc    Generate a new image
 */
export const generateImage = async (req, res) => {

  try {
    const {userId, prompt} = req.body;

    const user = await userModel.findById(userId);
    if(!user || !prompt) {
      return res.status(400).json({ success: false, message: "Please provide all required fields" });
    }

    if(user.creditBalance === 0 || user.creditBalance < 0) {
      return res.status(400).json({ success: false, message: "Insufficient credits", creditBalance: user.creditBalance });
    }

    

  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
}