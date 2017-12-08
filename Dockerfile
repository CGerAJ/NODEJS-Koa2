FROM node:9.2.0

MAINTAINER 244869962@qq.com

ENV HTTP_PORT 3000

COPY . /app

WORKDIR /app

EXPOSE 3000

RUN npm install

CMD ["npm", "start"]
