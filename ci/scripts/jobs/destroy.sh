#!/usr/bin/env bash
echo "STARTING: ${0}"
sh ./ci/scripts/utils/terraform_exec.sh staging destroy -auto-approve
sh ./ci/scripts/utils/terraform_exec.sh production destroy -auto-approve