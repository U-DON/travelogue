FROM node:10.6.0

RUN mkdir /client
WORKDIR /client
COPY ./package.json ./yarn.lock /client/
RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]
