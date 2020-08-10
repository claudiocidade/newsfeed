resource "aws_ecs_cluster" "mxmd_cluster" {
  name = "${local.prefix}-cluster"
  tags = local.common_tags
}

resource "aws_iam_policy" "task_execution_role_policy" {
  name        = "${local.prefix}-task-exec-role-policy"
  description = "Allow retrieving of images and adding to logs"
  policy      = file("../roles/cluster-ecs.json")
  path        = "/"
}

resource "aws_iam_role" "task_execution_role" {
  name               = "${local.prefix}-task-exec-role"
  assume_role_policy = file("../policies/cluster-ecr.json")
}

resource "aws_iam_role_policy_attachment" "task_execution_role" {
  role       = aws_iam_role.task_execution_role.name
  policy_arn = aws_iam_policy.task_execution_role_policy.arn
}

resource "aws_iam_role" "app_iam_role" {
  name               = "${local.prefix}-api-task"
  assume_role_policy = file("../policies/cluster-ecr.json")
}