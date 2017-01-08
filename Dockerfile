FROM node:6.9-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "test"]

