FROM node:14-alpine

WORKDIR /node_app

ADD package.json /node_app

RUN npm i --silent

ADD . /node_app

CMD npm start