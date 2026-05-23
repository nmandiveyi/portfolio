# Remote state backend (Spaces). Create the Space first via
# environments/bootstrap-state-bucket/ (Terraform, local backend) or the console.
terraform {
  backend "s3" {
    bucket = "portfolio-tfstate"
    key    = "prod/terraform.tfstate"
    region = "us-east-1"

    endpoints = {
      s3 = "https://nyc3.digitaloceanspaces.com"
    }

    skip_credentials_validation = true
    skip_metadata_api_check     = true
    skip_region_validation      = true
    skip_requesting_account_id  = true
    use_path_style              = false
  }
}
