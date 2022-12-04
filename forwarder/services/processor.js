const config = require("../config");
const { getChannelDetails } = require("../utils/getChannelDetails");
const receiver = config.TG_CHANNEL_RECEIVER;

// const messageObj = event.message;
// console.log("Sender id ===", messageObj.senderId);
// const sender = await messageObj.getSender();
// console.log("sender Details", sender);

exports.processor = async (event, client) => {
  try {
    const peerSenderId = event?.message?.peerId?.channelId;
    const peerSenderDetails = await getChannelDetails(
      [peerSenderId.toString()],
      client
    );
    console.log("Sender Details >>>>>>", peerSenderDetails);

    const message = event?.message?.message;
    console.log(" newmessage received >>>>>>>>>", message);
    await client.sendMessage(receiver, { message });
    console.log(" newmessage received >>>>>>>>>", message);
  } catch (err) {
    throw err;
  }
};
