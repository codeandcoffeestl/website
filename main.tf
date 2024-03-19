terraform {
  cloud {
    organization = "Code_Coffee_STL"

    workspaces {
      name = "website"
    }
  }
}

provider "aws" {
  region = "us-east-1" #Add here your region
}

module "serverless-backend-aws" {
  source = "./modules/serverless-backend-aws"
}

module "cors" {
  source = "squidfunk/api-gateway-enable-cors/aws"
  version = "0.3.3"

  api_id          = module.serverless-backend-aws.api_gateway_contact_form.id
  api_resource_id = module.serverless-backend-aws.api_gateway_contact_form.root_resource_id
  allow_headers = ["Content-Type"]
  allow_methods = ["OPTIONS", "POST"]
    #Add here the URL where your frontend application is running:
  allow_origin = "http://localhost:5173" 
}
