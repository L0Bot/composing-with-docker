FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY vite.config.js vite.config.js
COPY index.html index.html
COPY src src
COPY public public

CMD ["npm", "run", "dev"]