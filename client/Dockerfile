FROM node:alpine AS builder

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

RUN yarn install --silent
RUN yarn add global react-scripts@3.4.1 --silent

# add app
COPY . ./

RUN yarn build

FROM nginxinc/nginx-unprivileged:alpine

COPY --from=builder /app/build /usr/share/nginx/html
COPY ./nginx/default.conf.tpl /etc/nginx/default.conf.tpl

ENV LISTEN_PORT=8000
ENV APP_HOST=app
ENV APP_PORT=9000

USER root

RUN envsubst < /etc/nginx/default.conf.tpl > /etc/nginx/conf.d/default.conf

USER nginx

EXPOSE 8000 8080

CMD ["nginx", "-g", "daemon off;"]