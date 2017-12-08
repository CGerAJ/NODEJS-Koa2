FORM node

RUN mkdir -p /usr/src/node

WORKDIR /usr/src/node

COPY . /user/src/node

WORKDIR /usr/src/node/website

EXPOSE 3000

CMD ["npm", "start"]
