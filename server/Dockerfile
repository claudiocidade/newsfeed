FROM node:alpine AS builder

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

RUN yarn install --silent
RUN yarn add global @nestjs/cli --silent

# add app
COPY . ./

RUN yarn build