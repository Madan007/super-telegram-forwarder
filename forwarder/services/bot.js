const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const input = require("input");

const config = require("../config");

const apiId = config.TG_API_ID;
const apiHash = config.TG_API_HASH;
const stringSession = new StringSession(config.TG_API_SESSION);

exports.generateBot = async () => {
  try {
    const client = new TelegramClient(stringSession, apiId, apiHash, {
      connectionRetries: 5,
    });

    await client.start({
      phoneNumber: async () => await input.text("Please enter your number: "),
      password: async () => await input.text("Please enter your password: "),
      phoneCode: async () =>
        await input.text("Please enter the code you received: "),
      onError: (err) => console.log(err),
    });

    console.log("Master: You are connected now.!");
    console.log(client.session.save()); // Save this string to avoid logging in again

    return client;
  } catch (error) {
    throw error;
  }
};
