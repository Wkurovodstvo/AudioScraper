FROM node:14.4-alpine

ARG NODE_ENV="development"

RUN mkdir ./client

WORKDIR /client

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 5000

CMD yarn start