#!/usr/bin/env bash
echo "STARTING: ${0}"
cd ./ci/tools/terraform
terraform init
terraform workspace select $1 || terraform workspace new $1
terraform ${@:2}
cd ./