import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../model/userModel.js';
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.JWT_SECRET);

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

// **Register User**
export const registerUser = async (req, res) => {
  console.log('Registering user...');

  const { username, email, password, confirmPassword } = req.body;
  console.log(req.body);

  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const hashedConfirmPassword = await bcrypt.hash(confirmPassword, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      confirmPassword: confirmPassword,
    });

    console.log('New User Created:', newUser);

    // Generate Token
    const token = generateToken(newUser._id);

    // Set JWT token in cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.status(201).json({
      message: 'User registered successfully',
      token,
    });
  } catch (error) {
    console.error('Error in registerUser:', error);
    res.status(500).json({ message: 'Server Error', error });
  }
};

// **Login User**
export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  console.log('Received Data:', req.body);

  try {
    // Find user by username OR email
    const user = await User.findOne({
      $or: [{ username }, { email: username }],
    });

    console.log('User Found:', user);

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare passwords
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    console.log('Password Match:', isPasswordCorrect);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate Token
    const token = generateToken(user._id);

    // Set JWT token in cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    console.log(token);

    res.status(200).json({
      message: 'Login successful',
      token,
    });
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ message: 'Server Error', error });
  }
};

// **Get Profile**
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    console.log(user);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// **Sign Out User**
export const signOutUser = async (req, res) => {
  try {
    res.cookie('token', '', {
      httpOnly: true,
      expires: new Date(0),
    });

    res.status(200).json({ message: 'User signed out successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};
// **Update Profile**

// Controller to update profile (password in this case)
export const updateProfile = async (req, res) => {
  const { username, email, password, newPassword } = req.body;

  try {
    let user;

    // If username is provided, search by username
    if (username) {
      user = await User.findOne({ username });
    }

    // If email is provided, search by email
    if (email && !user) {
      user = await User.findOne({ email });
    }

    // If no user is found by username or email
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the old password is provided and correct
    if (password && newPassword) {
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        return res.status(400).json({ message: 'Old password is incorrect' });
      }
      // Update the password only if new password is provided
      user.password = await bcrypt.hash(newPassword, 10);
    }

    // Update the username or email if provided
    if (username) user.username = username;
    if (email) user.email = email;

    // Save the updated user data
    await user.save();

    // Send success response
    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Error in updateProfile:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};
