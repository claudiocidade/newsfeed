#!/usr/bin/env bash
echo "STARTING: ${0}"
apk add python3
pip3 install awscli
docker build --compress -t $ECR_REPO:$TRAVIS_COMMIT
$(aws ecr get-login --no-include-email --region us-east-1)
docker push $ECR_REPO:$TRAVIS_COMMIT
docker tag $ECR_REPO:$TRAVIS_COMMIT:latest
docker push $ECR_REPO:latest