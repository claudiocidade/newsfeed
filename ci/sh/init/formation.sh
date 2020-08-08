#!/usr/bin/env bash
echo "STARTING: ${0}"
wget https://releases.hashicorp.com/terraform/${MXMD_FORMATION_VERSION}/terraform_${MXMD_FORMATION_VERSION}_linux_amd64.zip
unzip terraform_${MXMD_FORMATION_VERSION}_linux_amd64.zip
sudo mv terraform /usr/local/bin/
rm terraform_${MXMD_FORMATION_VERSION}_linux_amd64.zip