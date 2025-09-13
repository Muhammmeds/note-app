
# attach rds to two private subnet
resource "aws_db_subnet_group" "my_subnet_group" {
  name       = "my-single-subnet-group"
  subnet_ids = [var.private_subnet_1_id , var.private_subnet_2_id ]
  description = "DB subnet group with a single private subnet"
}


# create rds
resource "aws_db_instance" "my_mysql" {
  allocated_storage      = 20
  engine                 = "mysql"
  engine_version         = "8.0"
  instance_class         = "db.t3.micro"
  username               = var.db_username
  password               = var.db_password
  db_subnet_group_name   = aws_db_subnet_group.my_subnet_group.name
  vpc_security_group_ids = [var.rds_security_group]
  publicly_accessible    = false
  skip_final_snapshot    = true
  storage_type           = "gp2"


  tags = {
    Name = "Notes-App"
  }
}
