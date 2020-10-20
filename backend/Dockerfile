FROM node:8.7.0-alpine

RUN mkdir -p /srv/app/admin-server
WORKDIR /srv/app/admin-server

COPY package.json /srv/app/admin-server
COPY package-lock.json /srv-app/admin-server

RUN npm install --silent

COPY . /srv/app/admin-server

CMD [ "npm", "start" ]