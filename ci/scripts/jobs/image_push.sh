#!/usr/bin/env bash
echo "STARTING: ${0}"
sudo apt-get install -y awscli
docker build --compress -t $ECR_REPO:$TRAVIS_COMMIT -f "${TRAVIS_BUILD_DIR}/client/Dockerfile.dev" .
$(aws ecr get-login --no-include-email --region us-east-1)
docker push $ECR_REPO:$TRAVIS_COMMIT
docker tag $ECR_REPO:$TRAVIS_COMMIT $ECR_REPO:latest
docker push $ECR_REPO:latest