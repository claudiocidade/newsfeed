resource "aws_subnet" "private_b" {
  cidr_block              = "10.1.20.0/29"
  vpc_id                  = aws_vpc.mxmd_vpc.id
  availability_zone       = "${data.aws_region.current.name}a"

  tags = merge(
    local.common_tags,
    map("Name", "${local.prefix}-private-b")
  )
}

resource "aws_route_table" "private_b" {
  vpc_id = aws_vpc.mxmd_vpc.id

  tags = merge(
    local.common_tags,
    map("Name", "${local.prefix}-private-b")
  )
}

resource "aws_route_table_association" "private_b" {
  subnet_id      = aws_subnet.private_b.id
  route_table_id = aws_route_table.private_b.id
}