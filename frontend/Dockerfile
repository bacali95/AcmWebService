FROM node:8-alpine as buildstage

WORKDIR /build

COPY src ./src
COPY package.json .
COPY angular.json .
COPY tsconfig.json .

RUN npm install

RUN npm run build -- --prod --build-optimizer=false

FROM nginx:alpine

RUN apk add --no-cache bash bash-completion

COPY --from=buildstage /build/dist/ /var/www/portal/
RUN chmod -R 777 /var/www/portal/

ADD nginx-conf/default.conf /etc/nginx/conf.d/default.conf
ADD nginx-conf/nginx.conf  /etc/nginx/nginx.conf

CMD nginx -g "daemon off;"
