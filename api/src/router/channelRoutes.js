import express from "express";
import channelController from '../controller/channelController.js';
import jwtFilter from '../middleware/jwtFilter.js';

const router = express.Router();

router.get("/channel", channelController.getAllChannels);
router.get("/channel/:id",jwtFilter.authorize, channelController.getAllMessagesInChannel);
router.put("/channel",jwtFilter.authorize, channelController.createChannel);
router.post("/channel/:id",jwtFilter.authorize, channelController.createMessageInChannel);
router.delete("/channel/:id",jwtFilter.authorize, channelController.deleteChannel);

export default router;
