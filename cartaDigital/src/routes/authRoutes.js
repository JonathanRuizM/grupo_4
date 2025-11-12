import express from 'express'
import { login, refreshToken, logout } from '../controllers/authController.js';


const router = express.Router()

router.post('/api/login', login);
router.post('/api/refresh', refreshToken);
router.post('/api/logout', logout)

export default router