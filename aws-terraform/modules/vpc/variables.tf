variable "cidr_block" {
    type = string
    default     = "10.0.0.0/16"

}

variable "public_subnet_cidr_block" {
   type = string
   default = "10.0.1.0/24"
}

variable "private_subnet_1_cidr_block" {
   type = string
   default = "10.0.2.0/24"
}

variable "private_subnet_2_cidr_block" {
   type = string
   default = "10.0.3.0/24"
}

variable "availability_zone_1" {
  type = string
  default = "eu-west-2a"
}

variable "availability_zone_2" {
  type = string
  default = "eu-west-2b"
}

variable "availability_zone_3" {
  type = string
  default = "eu-west-2c"
}


variable "cidr_block_anywhere" {
  type = string
  default = "0.0.0.0/0"
}