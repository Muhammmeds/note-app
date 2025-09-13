provider "aws" {
  region = var.region
}


module "vpc" {
  source = "./modules/vpc"
  
}

module "security_group" {
  source = "./modules/security_group"
  vpc_id = module.vpc.vpc_id
  
}

module "bucket" {
  source = "./modules/bucket"
  
}

module "ec2" {
  source = "./modules/ec2"
  public_subnet_id = module.vpc.public_subnet_id
  ec2_security_group_id = module.security_group.ec2_security_group_id
  
}


module "rds" {
  source = "./modules/rds"
  private_subnet_1_id = module.vpc.private_subnet_1_id
  private_subnet_2_id = module.vpc.private_subnet_2_id
  rds_security_group = module.security_group.rds_security_group_id
  
}



