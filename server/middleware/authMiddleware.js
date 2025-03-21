import jwt from 'jsonwebtoken';
import User from '../model/userModel.js';

export const protect = async (req, res, next) => {
  let token;
  console.log(token);

  // Check for authorization header and Bearer token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      console.log('Token:', token); // Log the token after it's assigned

      // Verify the token with JWT_SECRET
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Retrieve user based on decoded ID and exclude password
      req.user = await User.findById(decoded.id).select('-password');

      // Call next middleware or route handler
      next();
    } catch (error) {
      // Catch any errors (invalid token, expired token, etc.)
      console.error(error); // Log the error for debugging
      res.status(401).json({ message: 'Unauthorized, invalid token' });
    }
  } else {
    // If no token is found in headers
    res.status(401).json({ message: 'Unauthorized, no token provided' });
  }
};
