#!/bin/sh

docker run \
    -v `pwd`/app:/app \
    -w /app \
    -p 8080:8080 \
    -it node:current-alpine \
    /bin/sh