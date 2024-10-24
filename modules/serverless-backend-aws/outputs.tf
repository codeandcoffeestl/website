output "api_gateway_contact_form" {
  value = aws_api_gateway_rest_api.serverless-contact-form-api
}
output "api_gateway_url" {
  value = aws_api_gateway_deployment.test.invoke_url
}
