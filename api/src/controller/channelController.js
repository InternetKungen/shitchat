// channelController.js

import channelService from "../service/channelService.js";
import jwtUtils from "../util/jwtUtils.js";

const channelController = {};

channelController.getAllChannels = async (req, res) => {
    try {
        const channels = await channelService.getAllChannels();
        res.json(channels);
    } catch (error) {
        console.error("Error fetching channels:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

channelController.getAllMessagesInChannel = async (req, res) => {
    try {
        const channelId = req.params.id;
        const messages = await channelService.getAllMessagesInChannel(channelId);
        res.json(messages);
    } catch (error) {
        console.error("Error fetching messages in channel:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

channelController.createChannel = async (req, res) => {
    try {
        const newChannel = req.body;
        newChannel.createdAtDate = new Date().toLocaleDateString(); // Current datestamp
        newChannel.createdAtTime = new Date().toLocaleTimeString(); // Current timestamp
        const createdChannel = await channelService.createChannel(newChannel);
        res.status(201).json({ message: "Channel created", channel: createdChannel });
    } catch (error) {
        console.error("Error creating channel:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

channelController.createMessageInChannel = async (req, res) => {
    try {
        const channelId = req.params.id;
        const newMessage = req.body;
        newMessage.createdBy = jwtUtils.verify(req.headers["authorization"].split(" ")[1]).username; // Extract username from JWT
        newMessage.createdAtDate = new Date().toLocaleDateString(); // Current datestamp
        newMessage.createdAtTime = new Date().toLocaleTimeString(); // Current timestamp
        const createdMessage = await channelService.createMessageInChannel(channelId, newMessage);
        res.status(201).json(createdMessage);
    } catch (error) {
        console.error("Error creating message in channel:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

channelController.deleteChannel = async (req, res) => {
    try {
        const channelId = req.params.id;
        await channelService.deleteChannel(channelId);
        res.status(200).json({ message: "Channel deleted" });
    } catch (error) {
        console.error("Error deleting channel:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export default channelController;
