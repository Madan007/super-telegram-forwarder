const { Api } = require("telegram");

exports.getChannelDetails = async (channelIds, client) => {
  try {
    const peerSenderDetails = await client.invoke(
      new Api.channels.GetChannels({
        id: [...channelIds],
      })
    );
    return peerSenderDetails;
  } catch (err) {
    throw err;
  }
};
