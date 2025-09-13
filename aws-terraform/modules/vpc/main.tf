

# create vpc
resource "aws_vpc" "practice_vpc"{
    cidr_block = var.cidr_block
    tags = {
      Name = "Note-App-Vpc"
    }
}

# create public subnet
resource "aws_subnet" "public_subnet" {
  vpc_id = aws_vpc.practice_vpc.id
  cidr_block = var.public_subnet_cidr_block
  availability_zone = var.availability_zone_1
  tags = {
    Name = "Public-Vpc"
  }

}

# create private subnet 1
resource "aws_subnet" "private_subnet_1" {
  vpc_id = aws_vpc.practice_vpc.id
  cidr_block = var.private_subnet_1_cidr_block
  availability_zone = var.availability_zone_2
   tags = {
    Name = "Private-Vpc-1"
  }

}

# create private subnet 2
resource "aws_subnet" "private_subnet_2" {
  vpc_id = aws_vpc.practice_vpc.id
  cidr_block = var.private_subnet_2_cidr_block
  availability_zone = var.availability_zone_2
   tags = {
    Name = "Private-Vpc-2"
  }

}


# create internet gateway
resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.practice_vpc.id
    tags = {
    Name = "internet gateway"
  }
}


# create elastic ip for nat gateway
resource "aws_eip" "nat_eip" {
  domain = "vpc"
  depends_on = [aws_internet_gateway.igw]

  tags = {
    Name = "nat-gateway-eip"
  }
}


# create nat gateway
resource "aws_nat_gateway" "nat" {

  allocation_id = aws_eip.nat_eip.id
  subnet_id     = aws_subnet.public_subnet.id
  tags = {
    Name = "nat-gateway"
  }
}


# create public route table
resource "aws_route_table" "public_route" {
  vpc_id = aws_vpc.practice_vpc.id

  route {
    cidr_block = var.cidr_block_anywhere
    gateway_id = aws_internet_gateway.igw.id
  }

  tags = {
    Name = "Public-route-table"
  }
}

# attach public route to public subnet
resource "aws_route_table_association" "public_subnet_association" {
  route_table_id = aws_route_table.public_route.id
  subnet_id = aws_subnet.public_subnet.id
}


# create private route table
resource "aws_route_table" "private_route" {
  vpc_id = aws_vpc.practice_vpc.id

  route {
    cidr_block = var.cidr_block_anywhere
    gateway_id = aws_nat_gateway.nat.id
  }

  tags = {
    Name = "Private-route-table"
  }
}

# attach private route to private subnet 1
resource "aws_route_table_association" "private_subnet_1_association" {
  route_table_id = aws_route_table.private_route.id
  subnet_id = aws_subnet.private_subnet_1.id
}

# attach private route to private subnet 2
resource "aws_route_table_association" "private_subnet_2_association" {
  route_table_id = aws_route_table.private_route.id
  subnet_id = aws_subnet.private_subnet_2.id
}