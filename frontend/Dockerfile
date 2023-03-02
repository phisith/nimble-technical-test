FROM node:16.16.0-alpine

WORKDIR /usr/src/frontend

RUN mkdir -p /usr/src/frontend/node_modules

COPY package.json /usr/src/frontend/

RUN npm install --force

EXPOSE 3000