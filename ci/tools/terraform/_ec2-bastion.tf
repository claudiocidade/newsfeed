data "aws_ami" "amazon_linux" {
  owners      = ["amazon"]
  most_recent = true
  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-2.0.20200722.0-x86_64-gp2"]
  }
}

resource "aws_iam_role" "bastion" {
  name               = "${local.prefix}-bastion"
  assume_role_policy = file("./policies/bastion-ec2.json")

  tags = local.common_tags
}

resource "aws_instance" "mxmd_bastion" {
  ami           = data.aws_ami.amazon_linux.id
  instance_type = "t2.micro"
  user_data     = file("./user-data.sh")
  tags = merge(
    local.common_tags,
    map("Name", "${local.prefix}-bastion")
  )
}