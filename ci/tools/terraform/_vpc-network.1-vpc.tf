resource "aws_vpc" "mxmd_vpc" {
  # Only 16 addresses (14 hosts) available. 
  # More than necessary for a demo.
  cidr_block           = "10.1.0.0/28"
  enable_dns_support   = true
  enable_dns_hostnames = true

  tags = merge(
    local.common_tags,
    map("Name", "${local.prefix}-vpc")
  )
}