FROM node:18-alpine
RUN apk --no-cache add git openssh

WORKDIR /front-end

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080