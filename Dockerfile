FROM node:alpine
WORKDIR '/app'

COPY package.json .

RUN apk add --no-cache --virtual .gyp python make g++ \
    && npm install --legacy-peer-deps \
    && apk del .gyp

COPY . .

CMD ["npm", "start"]