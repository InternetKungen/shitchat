// authRoutes.js

import express from 'express';
import authController from '../controller/authController.js';

const router = express.Router();

/** Auth endpoints */
router
    .post("/auth/login", authController.login)
    .post("/auth/register", authController.register);

export default router;
