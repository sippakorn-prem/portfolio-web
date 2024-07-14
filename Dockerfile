FROM node:20.12.2-alpine

RUN mkdir /code
WORKDIR /code

ADD package*.json package-lock.json* ./
COPY . /code

RUN npm install -g npm@latest

RUN npm install

RUN npm run build
ENTRYPOINT [ "npm", "run", "start:prod" ]
