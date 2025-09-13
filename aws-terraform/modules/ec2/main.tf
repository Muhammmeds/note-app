
# fetch ubuntu ami
data "aws_ssm_parameter" "ubuntu_ami_id" {
  name = "/aws/service/canonical/ubuntu/server/jammy/stable/current/amd64/hvm/ebs-gp2/ami-id"
}

# create elastic ip for ec2
resource "aws_eip" "ec2_eip" {
  domain = "vpc"
  tags = {
    Name = "Ec2_eip"
  }
}

# create elastic ec2
resource "aws_instance" "ec2" {
  ami           = data.aws_ssm_parameter.ubuntu_ami_id.value
  instance_type = var.instance_type
  subnet_id     = var.public_subnet_id
  vpc_security_group_ids = [var.ec2_security_group_id]
  associate_public_ip_address = true
  key_name = "express-key-pair"

  tags = {
    Name = "Notes-App-Instance"
  }
}


# attach elastip ip to ec2
resource "aws_eip_association" "ec2_eip_assoc" {
  instance_id   = aws_instance.ec2.id
  allocation_id = aws_eip.ec2_eip.id
}