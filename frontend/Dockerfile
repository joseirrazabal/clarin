FROM node:12.18.2-buster-slim AS builder
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM node:12.18.2-buster-slim
RUN npm i -g serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]

