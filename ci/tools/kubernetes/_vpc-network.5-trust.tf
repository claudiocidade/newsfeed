data "aws_iam_policy_document" "ec2-trust-assume-role-policy" {
  statement {

   actions = ["sts:AssumeRole"]

   principals {
     type        = "Service"
     identifiers = ["ec2.amazonaws.com"]
   } 
  }
}

data "aws_iam_policy_document" "ecs-trust-assume-role-policy" {
  statement {

   actions = ["sts:AssumeRole"]

   principals {
     type        = "Service"
     identifiers = ["ecs-task.amazonaws.com"]
   } 
  }
}

resource "aws_iam_role" "ec2_manager_role" {
  assume_role_policy = data.aws_iam_policy_document.ec2-trust-assume-role-policy.name
}

resource "aws_iam_role" "ecs_manager_role" {
  assume_role_policy = data.aws_iam_policy_document.ecs-trust-assume-role-policy.name
}