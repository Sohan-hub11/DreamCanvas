import jwt from "jsonwebtoken";


export const authUser = (req, res, next) => {
  const {token} = req.headers;
  if(!token) {
    return res.status(401).json({ success: false, message: "Access denied. No token provided." });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    
    if(decodedToken) {
      req.body.userId = decodedToken.id;
    } else {
      return res.status(401).json({ success: false, message: "Invalid token." });
    }

    next();

  } catch (error) {
    return res.status(401).json({ success: false, message: error.message });
  }
}