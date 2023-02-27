FROM node:18.14.2-alpine
WORKDIR /backend
COPY package.json /.
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "run", "start:dev"]