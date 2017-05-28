FROM node:7.10

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

WORKDIR /opt/app-root/
COPY package.json yarn.lock /opt/app-root/
RUN yarn install

COPY . /opt/app-root
RUN yarn run build

EXPOSE 8080

CMD ["yarn", "start"]
