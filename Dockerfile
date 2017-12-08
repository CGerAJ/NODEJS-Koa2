FROM node:9.2.0

MAINTAINER 244869962@qq.com

WORKDIR /app

COPY ./package.json /app/

RUN npm install

COPY . /app/

EXPOSE 3000

CMD ["npm", "start"]
