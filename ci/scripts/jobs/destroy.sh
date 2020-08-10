#!/usr/bin/env bash
echo "STARTING: ${0}"
bash ./ci/scripts/utils/terraform_exec.sh staging destroy -auto-approve
bash ./ci/scripts/utils/terraform_exec.sh production destroy -auto-approve