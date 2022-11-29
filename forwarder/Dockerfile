FROM node:lts-jessie

RUN apt-get update

RUN apt-get install -y netcat

WORKDIR /usr/src/super-telegram-forwarder/forwarder

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "server.js"]