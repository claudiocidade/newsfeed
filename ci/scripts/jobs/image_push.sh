#!/usr/bin/env bash
echo "STARTING: ${0}"
sudo apt-get update
sudo apt-get install -y awscli
$(aws ecr get-login --no-include-email --region us-east-1)
sh ./ci/util/docker_push.sh \
    $ECR_REPO_UI $TRAVIS_BUILD_ID \
    "${TRAVIS_BUILD_DIR}/client/Dockerfile.dev"