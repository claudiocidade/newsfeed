#!/usr/bin/env bash
echo "STARTING: ${0}"
sh ./ci/utils/terraform_initenv.sh
sh ./ci/scripts/utils/terraform_exec.sh production plan