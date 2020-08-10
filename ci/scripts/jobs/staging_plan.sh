#!/usr/bin/env bash
echo "STARTING: ${0}"
bash ./ci/utils/terraform_initenv.sh
bash ./ci/scripts/utils/terraform_exec.sh staging plan