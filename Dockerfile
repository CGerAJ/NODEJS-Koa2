FROM node:9.2.0

MAINTAINER 244869962@qq.com

ENV HTTP_PORT 3000

COPY . /app

RUN cd /app && npm install

EXPOSE 3000


CMD ["npm", "start"]
