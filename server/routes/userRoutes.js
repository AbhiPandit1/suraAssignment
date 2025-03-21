import express from 'express';

import { protect } from '../middleware/authMiddleware.js';
import {
  getProfile,
  loginUser,
  registerUser,
  updateProfile,
} from '../controller/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getProfile);
router.put('/profile/update', protect, updateProfile);

export default router;
