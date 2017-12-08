FROM daocloud.io/node:0.10-onbuild

RUN mkdir -p /usr/src/node

WORKDIR /usr/src/node

COPY . /usr/src/node

WORKDIR /usr/src/node/website

EXPOSE 3000

CMD ["npm", "start"]
