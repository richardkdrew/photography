# DOCKER-VERSION 1.6.2
#
# Photography Dockerfile
#
# https://github.com/richardkdrew/photography
#

FROM richardkdrew/nodejs

MAINTAINER Richard Drew <richardkdrew@gmail.com>

ENV NODE_ENV "production"

COPY . /app/

WORKDIR "/app"

RUN npm install --production

EXPOSE 8080

CMD ["npm", "start"]
