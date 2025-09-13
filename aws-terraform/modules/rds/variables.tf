variable "private_subnet_1_id" {
    type = string
  
}

variable "private_subnet_2_id" {
    type = string
  
}


variable "rds_security_group" {
   type = string
}


variable "db_username" {
  type = string
  default = "admin"
}


variable "db_password" {
  type = string
  default = "password123"
}