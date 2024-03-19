output "api_gateway_url" {
    description = "Bucket name for our static website hosting"
    value = module.serverless-backend-aws.api_gateway_url
}
