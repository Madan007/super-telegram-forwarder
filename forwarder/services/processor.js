const config = require("../config");
const receiver = config.TG_CHANNEL_RECEIVER;

exports.processor = async (event, client) => {
  try {
    const messageObj = event.message;
    console.log("Sender id ===", messageObj.senderId);
    const sender = await messageObj.getSender();
    console.log("sender Details", sender);

    const message = event?.message?.message;
    console.log(" newmessage received >>>>>>>>>", message);
    await client.sendMessage(receiver, { message });
    console.log(" newmessage received >>>>>>>>>", message);
  } catch (err) {
    throw err;
  }
};
