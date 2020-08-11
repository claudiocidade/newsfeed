#!/usr/bin/env bash
export TF_VAR_ecr_image_address_ui=$ECR_REPO_UI:$TRAVIS_BUILD_ID
export TF_VAR_ecr_image_address_api=$ECR_REPO_API:$TRAVIS_BUILD_ID