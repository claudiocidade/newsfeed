#!/usr/bin/env bash
echo "STARTING: ${0}"
sudo apt-get update
sudo apt-get install -y awscli
$(aws ecr get-login --no-include-email --region us-east-1)
docker build --compress -t $ECR_REPO_UI:$TRAVIS_COMMIT -f "${TRAVIS_BUILD_DIR}/client/Dockerfile.dev" .
docker push $ECR_REPO_UI:$TRAVIS_COMMIT
docker tag $ECR_REPO_UI:$TRAVIS_COMMIT $ECR_REPO_UI:latest
docker push $ECR_REPO_UI:latest