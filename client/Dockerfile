FROM node:10.6.0

RUN apt-get update
RUN apt-get install apt-transport-https

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install yarn

RUN mkdir /client
WORKDIR /client
COPY ./package.json ./yarn.lock /client/
RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]
