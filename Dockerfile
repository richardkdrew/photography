# DOCKER-VERSION 1.6.2
#
# Photography Dockerfile
#
# https://github.com/richardkdrew/photography
#

FROM richardkdrew/nodejs

MAINTAINER Richard Drew <richardkdrew@gmail.com>

COPY ../dist/* /app/

WORKDIR "/app"

RUN npm install

EXPOSE 9000

CMD ["node", "server/app.js"]
