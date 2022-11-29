# Welcome to Super-Telegram-Forwarder[s]

- Automatically forward messages from Channels and Groups (private or public)
- Clone all messages from any channel to your own channel

1. ## 🧰 Prerequisites

   - 🛠 AWS Free Tier Account & Configured - [Get help here](https://www.youtube.com/watch?v=FRQ9fE4fd5g)
   - 🛠 Docker Installed & Configured - [Get help here](https://www.youtube.com/watch?v=gcacQ29AjOo)
   - 🛠 Node JS Runtime - [Get help here](https://www.youtube.com/watch?v=TQks1p7xjdI)

1. ## ⚙️ Setting up the environment

   Providing the detailed instructions for project setup.

   ```bash
   git clone --branch main https://github.com/Madan007/super-telegram-forwarder.git
   cd super-telegram-bot

   # Install microservice feature dependencies
   cd forwarder
   npm install
   ```

1. ## 🚀 Docker Setup

   The `docker-compose` file requires few environment variables. Create a `.env` file in the root directory. Docker compose will automatically pull the required environment variables from this file. Here's an example of my `.env` file

   ```docker
   TG_API_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   TG_API_HASH=XXXXXXXXXXXXXXXXXXXXXXXXXXX
   TG_API_SESSION=XXXXXXXXXXXXXXXXXXXXXXXX
   TG_BOT_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXX
   TG_BOT_USERNAME=XXXXXXXXXXXXXXXXXXXXXXXX
   TG_CHANNEL_SENDER=XXXXXXXXXXXXXXXXXXXXXXXX
   TG_CHANNEL_RECEIVER=XXXXXXXXXXXXXXXXXXXXXXXX
   ```

   With that set up you're ready to go !

   ```bash
   docker-compose up
   ```

   > Things might go wrong the first time you run this command. If that happens, stop the process and re-run the command

1. ## 👷🏾 Telegram Bot Setup

   ```bash
   ## A. Bot API
   # Telegram offers a neat way to create api keys for telegram bots. You need to message [@botfather](https://t.me/botfather) - a telegram bot to get create new bots! The bot will guide you through the process of creating and managing new bots and the api keys.
    Select /newbot
    Provide Bot Name
    Provide unique username

    ![Create Telegram bot with @botfather](https://i.imgur.com/DNeoeTO.png)

   # Save the API KEY token which would be required to access telegram APIs
   # Telegram Bot Access Link
    https://t.me/{Name_of_the_bot}

   ## B. Telegram API
   To get the API id and Hash id for the telegram account visit [https://my.telegram.org/auth?to=apps](https://my.telegram.org/auth?to=apps)

   ![](https://i.imgur.com/KJ1kDDO.png)


   ```

1. ## 🧹 CleanUp

If you want to destroy all the resources created, Execute the below command to delete the stack, or _you can delete the stack from console as well_

```bash
docker-compose down -v
```

This is not an exhaustive list, please carry out other necessary steps as maybe applicable to your needs.

### 💡 Help/Suggestions or 🐛 Bugs

Thank you for your interest in contributing to our project. Whether it is a bug report, new feature, correction, or additional documentation or solutions, we greatly value feedback and contributions from our community. [Start here][200]

### :snowman: Built with ❤️ and

- [AWS](https://aws.amazon.com/)
- [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/home.html)
- [Typescript](https://www.typescriptlang.org/docs)
- [Node.Js](https://nodejs.org/en/docs/)

### :man: Author

[Madan K](https://www.linkedin.com/in/madan-k-97606010a/)

### :clipboard: License

MIT

### 🏷️ Metadata

**Level**: 200

![miztiik-success-green](https://img.shields.io/badge/miztiik-cdk-success-green)

[200]: https://github.com/Madan007/super-telegram-forwarder/issues
