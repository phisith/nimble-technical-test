FROM node:16.16.0-alpine

WORKDIR /usr/src/backend

RUN mkdir -p /usr/src/backend/node_modules

COPY package.json /usr/src/backend/

RUN npm install --force

EXPOSE 8000
