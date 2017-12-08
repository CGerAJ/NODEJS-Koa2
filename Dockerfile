FROM daocloud.io/node:0.10-onbuild

MAINTAINER 244869962@qq.com

ENV HTTP_PORT 3000

COPY . /app

WORKDIR /app

EXPOSE 3000

CMD ["npm", "start"]
