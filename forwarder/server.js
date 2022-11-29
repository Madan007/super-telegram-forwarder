const { NewMessage } = require("telegram/events");
const { EditedMessage } = require("telegram/events/EditedMessage");

const config = require("./config");
const { generateBot } = require("./services/bot");
const { processor } = require("./services/processor");

const sender = config.TG_CHANNEL_SENDER;

const server = async () => {
  try {
    const client = await generateBot();

    // client.addEventHandler(handler, new NewMessage({}));
    client.addEventHandler(
      (event) => processor(event, client),
      new NewMessage({ chats: [sender] })
    );

    client.addEventHandler(
      (event) => processor(event, client),
      new EditedMessage({ chats: [sender] })
    );
  } catch (err) {
    console.log("ERROR $$$$", err);
  }
};

server();
