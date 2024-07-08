// channelService.js

import { fetchCollection } from "../mongodb/mongoDbClient.js";
import { ObjectId } from "mongodb";

const channelService = {};

channelService.getAllChannels = async () => {
    const channelsCollection = fetchCollection("channels");
    const channels = await channelsCollection.find({}).toArray();
    return channels;
};

channelService.getAllMessagesInChannel = async (id) => {
    const channelId = new ObjectId(id);
    const channelsCollection = fetchCollection("channels");
    const channel = await channelsCollection.findOne({ _id: channelId });
    if (!channel) {
        throw new Error("Channel not found");
    }
    return channel.messages;
};

channelService.createChannel = async (newChannel) => {
    const channelsCollection = fetchCollection("channels");
    const result = await channelsCollection.insertOne(newChannel);
    return result.ops;
};

channelService.createMessageInChannel = async (id, newMessage) => {
    const channelId = new ObjectId(id);
    const channelsCollection = fetchCollection("channels");
    const result = await channelsCollection.updateOne({ _id: channelId }, { $push: { messages: newMessage } });
    if (result.modifiedCount === 0) {
        throw new Error("Failed to create message in channel");
    }
    return newMessage;
};

channelService.deleteChannel = async (id) => {
    const channelId = new ObjectId(id);
    const channelsCollection = fetchCollection("channels");
    await channelsCollection.deleteOne({ _id: channelId });
};

export default channelService;
