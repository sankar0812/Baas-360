
# CreatedBy : Dinesh
# CreatedTime : 15 Feb 2023
# Description : This file will be read as an instruction by docker to build a image

FROM node:16
WORKDIR /accountsrestdataaccess

COPY package.json /accountsrestdataaccess
COPY .npmrc /accountsrestdataaccess

COPY config.js .

EXPOSE 3000

RUN apt-get update
RUN apt-get install -y openssl

RUN npm install

COPY . /accountsrestdataaccess

RUN npm run schema-generate

CMD npm start

