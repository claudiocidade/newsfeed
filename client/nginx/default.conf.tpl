server {
    listen ${LISTEN_PORT};
    root  /usr/share/nginx/html;
    include /etc/nginx/mime.types;
}
