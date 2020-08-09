data "aws_ami" "amazon_linux" {
  owners      = ["amazon"]
  most_recent = true
  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-2.0.20200722.0-x86_64-gp2"]
  }
}

resource "aws_instance" "mxmd_bastion" {
  ami           = data.aws_ami.amazon_linux.id
  vpc_id        = aws_vpc.mxmd_vpc.id
  instance_type = "t2.micro"
  tags = merge(
    local.common_tags,
    map("Name", "${local.prefix}-bastion")
  )
}