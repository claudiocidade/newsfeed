terraform {
  backend "s3" {
    bucket         = "newsfeed-tf-state"
    key            = "newsfeed.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "newsfeed-tf-state-lock"
  }
}

provider "aws" {
  region  = "us-east-1"
  version = "~> 2.44.0"
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"
  debug  = terraform.workspace != "production"
  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    Owner       = var.contact
    ManagedBy   = "Terraform"
  }
}

data "aws_region" "current" {}