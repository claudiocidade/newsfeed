resource "aws_subnet" "private_a" {
  cidr_block        = "10.1.10.0/29"
  vpc_id            = aws_vpc.mxmd_vpc.id
  availability_zone = "${data.aws_region.current.name}a"

  tags = merge(
    local.common_tags,
    map("Name", "${local.prefix}-private-a")
  )
}

resource "aws_route_table" "private_a" {
  vpc_id = aws_vpc.mxmd_vpc.id

  tags = merge(
    local.common_tags,
    map("Name", "${local.prefix}-private-a")
  )
}

resource "aws_route_table_association" "private_a" {
  subnet_id      = aws_subnet.private_a.id
  route_table_id = aws_route_table.private_a.id
}