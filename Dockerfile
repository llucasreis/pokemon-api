FROM node:12.8-alpine

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

RUN yarn build

EXPOSE 3333

CMD ["yarn", "start"]
