#!/usr/bin/env bash
echo "STARTING: ${0}"
TAG=$1:$2
docker build --compress -t $TAG -f $3 $4
docker push $TAG
docker tag $TAG $1:latest
docker push $1:latest