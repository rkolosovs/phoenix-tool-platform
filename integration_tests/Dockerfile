FROM node:latest

WORKDIR /tmp
COPY integration_tests/package.json /tmp/
COPY integration_tests/webpack.config.js /tmp/
COPY integration_tests/tsconfig.json /tmp/
RUN npm install

COPY integration_tests/test /tmp/test
COPY integration_tests/config /tmp/config
COPY integration_tests/tsconfig.json /tmp/

COPY phoenix-tool-client/src /phoenix-tool-client/src
COPY phoenix-tool-client/config /phoenix-tool-client/config
COPY phoenix-tool-client/package.json /phoenix-tool-client/
WORKDIR /phoenix-tool-client
RUN npm install

WORKDIR /tmp

RUN npm run tsc