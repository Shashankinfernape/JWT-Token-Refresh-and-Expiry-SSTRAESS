// backend/src/routes/userRoutes.js
import express from 'express';
import { getProfile } from '../controllers/userController.js';
import { protect }from '../middleware/authMiddleware.js';

const router = express.Router();

// This route is protected
router.get('/profile', protect, getProfile);

export default router;