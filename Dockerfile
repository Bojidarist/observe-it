FROM node:16.15.0

WORKDIR /app

COPY ./src/package*.json ./
RUN npm install
COPY ./src .

EXPOSE 3000
CMD [ "npm", "start" ]
