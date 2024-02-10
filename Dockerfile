FROM node:20.11-alpine as builder

WORKDIR /usr/src/nuxt-starter

COPY package*.json ./
COPY .env ./

RUN npm i

COPY . .

RUN npm run build

EXPOSE 3000

FROM node:20.11-alpine

WORKDIR /usr/src/nuxt-starter

COPY --from=builder /usr/src/nuxt-starter/.output  .
COPY --from=builder /usr/src/nuxt-starter/.nuxt  .

ENTRYPOINT ["node", ".output/server/index.mjs"]