FROM node:12.18.2-buster-slim

WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

WORKDIR /app/dist
EXPOSE 5000
ENTRYPOINT [ "node", "server.js" ]
