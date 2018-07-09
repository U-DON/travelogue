FROM node:10.6.0

RUN mkdir /server
WORKDIR /server
COPY ./package.json ./yarn.lock /server/
RUN yarn

EXPOSE 5000

CMD ["yarn", "start"]
