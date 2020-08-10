resource "aws_ecs_cluster" "mxmd_cluster" {
  name = "${local.prefix}-cluster"
  tags = local.common_tags
}