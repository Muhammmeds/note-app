variable "public_subnet_id" {
    type = string
  
}

variable "ec2_security_group_id" {
  type = string
}

variable "instance_type" {
  type = string
  default = "t2.micro"
}