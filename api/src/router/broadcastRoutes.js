//broadcastRoutes.js

import express from "express";
import broadcastController from '../controller/broadcastController.js';

const router = express.Router();

router.get("/broadcast", broadcastController.getAllMessages);
router.post("/broadcast", broadcastController.createMessage);

export default router;