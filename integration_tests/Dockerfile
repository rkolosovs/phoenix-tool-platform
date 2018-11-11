FROM node:latest

WORKDIR /tmp
COPY package.json /tmp/
COPY webpack.config.js /tmp/
RUN npm install

COPY src /tmp/src
COPY config /tmp/config
COPY tsconfig.json /tmp/
COPY test /tmp/test
