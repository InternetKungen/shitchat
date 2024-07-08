// broadcastController.js

import broadcastService from '../service/broadcastService.js';

const broadcastController = {};

broadcastController.getAllMessages = async (req, res) => {
    try {
        const messages = await broadcastService.getAllMessages();
        res.json(messages);
    } catch (error) {
        console.error("Error fetching messages in broadcast channel:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

broadcastController.createMessage = async (req, res) => {
    try {
        const newMessage = req.body;
        const createdMessage = await broadcastService.createMessage(newMessage);
        res.status(201).json(createdMessage);
    } catch (error) {
        console.error("Error creating message in broadcast channel:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export default broadcastController;