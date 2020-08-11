#!/usr/bin/env bash
echo "STARTING: ${0}"
chmod +x ./ci/scripts/utils/*.sh
./ci/scripts/utils/terraform_exec.sh staging destroy -auto-approve
./ci/scripts/utils/terraform_exec.sh production destroy -auto-approve