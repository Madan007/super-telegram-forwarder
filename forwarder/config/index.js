const config = {
  AGENT_HOSTNAME: process.env.AGENT_HOSTNAME || "",
  TG_API_ID: process.env.TG_API_ID || "",
  TG_API_HASH: process.env.TG_API_HASH || "",
  TG_API_SESSION: process.env.TG_API_SESSION || "",
  TG_BOT_TOKEN: process.env.TG_BOT_TOKEN || "",
  TG_BOT_USERNAME: process.env.TG_BOT_USERNAME || "",
  TG_CHANNEL_SENDER: process.env.TG_CHANNEL_SENDER || [],
  TG_CHANNEL_RECEIVER: process.env.TG_CHANNEL_RECEIVER || "",
};

module.exports = config;
