FROM node:alpine AS builder

# set working directory
WORKDIR /app
# copy only the dependencies
# installation blueprint
COPY package.json ./
# download and install dependencies
# in a node_modules folder of its own
RUN yarn install
# copy everything else now 
# that node_modules has been 
# generated inside the container 
COPY . ./
# generated the compiled version
# in a build/ directory that is
# going to be hosted by NGINX
RUN yarn build

FROM nginxinc/nginx-unprivileged:alpine

COPY --from=builder /app/build /usr/share/nginx/html
COPY ./nginx/default.conf.tpl /etc/nginx/default.conf.tpl

ENV PORT=9000
ENV LISTEN_PORT=${PORT}

USER root

# this is where I make sure the NGINX 
# configuration is set up using the same 
# environment variables used everywhere else
RUN envsubst < /etc/nginx/default.conf.tpl > /etc/nginx/conf.d/default.conf

USER nginx

CMD ["nginx", "-g", "daemon off;"]