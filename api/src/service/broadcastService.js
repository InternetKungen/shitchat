// broadcastService.js

import { fetchCollection } from '../mongodb/mongoDbClient.js';

const BROADCAST_CHANNEL_NAME = "broadcast";

const broadcastService = {};

broadcastService.getAllMessages = async () => {
    const channelsCollection = fetchCollection("channels");
    const broadcastChannel = await channelsCollection.findOne({ channelName: BROADCAST_CHANNEL_NAME });
    if (!broadcastChannel) {
        throw new Error("Broadcast channel not found");
    }
    return broadcastChannel.messages;
};

broadcastService.createMessage = async (newMessage) => {
    const channelsCollection = fetchCollection("channels");
    const result = await channelsCollection.updateOne(
        { channelName: BROADCAST_CHANNEL_NAME },
        { $push: { messages: newMessage } }
    );
    if (result.modifiedCount === 0) {
        throw new Error("Failed to create message in broadcast channel");
    }
    return newMessage;
};

export default broadcastService;