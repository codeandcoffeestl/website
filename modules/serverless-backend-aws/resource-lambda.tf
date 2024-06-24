resource "aws_lambda_function" "serverless-contact-form-lambda" {
  function_name = "ServerlessContactForm"

  # change the name of the S3 bucket to the one you have 
  # created through the console
  s3_bucket = "serverless-contact-form-lambda-cc-stl"
  s3_key    = "index.zip"

  handler = "index.handler"
  runtime = "nodejs18.x"

  role = "${aws_iam_role.lambda_exec.arn}"
}

resource "aws_iam_role" "lambda_exec" {
  name = "serverless_contact_form"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
# inline policy in order to access SES
 inline_policy {
    name = "SESPermissionsPolicy"
    policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ses:SendEmail",
        "ses:SendRawEmail"
      ],
      "Resource": "*"
    }
  ]
}
EOF
  }
}


resource "aws_lambda_permission" "apigw" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = "${aws_lambda_function.serverless-contact-form-lambda.function_name}"
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.serverless-contact-form-api.execution_arn}/*/*" 
}