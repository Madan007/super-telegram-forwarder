const { Api } = require("telegram");

const config = require("../config");
const { forwardMessage } = require("../utils/forwardMessage");
const { getChannelDetails } = require("../utils/getChannelDetails");
const receiver = config.TG_CHANNEL_RECEIVER;

// const messageObj = event.message;
// console.log("Sender id ===", messageObj.senderId);
// const sender = await messageObj.getSender();
// console.log("sender Details", sender);

// const peerSenderDetails = await getChannelDetails(
//   [peerSenderId.toString()],
//   client
// );

exports.processor = async (event, client) => {
  try {
    const peerSenderId = event?.message?.peerId?.channelId;

    const messageId = event?.message?.id;
    await forwardMessage(messageId, peerSenderId, receiver, client);
    // await client.sendMessage(receiver, { message, dropAuthor: false });
  } catch (err) {
    throw err;
  }
};
