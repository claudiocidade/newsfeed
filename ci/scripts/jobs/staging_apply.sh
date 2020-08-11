#!/usr/bin/env bash
echo "STARTING: ${0}"
chmod +x ./ci/scripts/utils/*.sh
./ci/scripts/utils/terraform_initenv.sh
./ci/scripts/utils/terraform_exec.sh staging apply -auto-approve