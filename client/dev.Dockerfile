FROM node:14.4-alpine

ARG NODE_ENV="development"

WORKDIR /client

COPY package.json /client/
COPY yarn.lock /client/

RUN yarn install --frozen-lockfile

COPY . /client/

EXPOSE 5000

CMD yarn start