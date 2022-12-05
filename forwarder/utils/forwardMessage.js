const { Api } = require("telegram");

exports.forwardMessage = async (messageId, peerSenderId, receiver, client) => {
  try {
    const forwardObj = {
      fromPeer: peerSenderId,
      id: [messageId],
      randomId: [new Date().getTime()],
      toPeer: receiver,
      //   withMyScore: false,
      dropAuthor: false,
      //   dropMediaCaptions: true,
      //   scheduleDate: 43,
      noforwards: true,
    };

    await client.invoke(new Api.messages.ForwardMessages(forwardObj));
    return true;
  } catch (err) {
    throw err;
  }
};
