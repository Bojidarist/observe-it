FROM node:16.15.0

WORKDIR /app

COPY ./src/package*.json ./
RUN npm install
COPY ./src .

COPY ./entrypoints/* /usr/bin
RUN chmod +x /usr/bin/*

EXPOSE 3000
