variable "do_token" {
  description = "DigitalOcean API token — same scopes you use for the rest of portfolio-infra"
  type        = string
  sensitive   = true
}

variable "spaces_access_key_id" {
  description = "Spaces Access Key ID (shown when you generate a Spaces key)"
  type        = string
  sensitive   = true
}

variable "spaces_secret_access_key" {
  description = "Spaces Secret (shown once at key creation)"
  type        = string
  sensitive   = true
}

variable "bucket_name" {
  description = "Must match prod environments/prod/backend.tf bucket"
  type        = string
  default     = "portfolio-tfstate"
}

variable "spaces_region_slug" {
  description = "DO region slug for the Space — must match backend endpoints.s3 (e.g. nyc3)"
  type        = string
  default     = "nyc3"
}

provider "digitalocean" {
  token             = var.do_token
  spaces_access_id  = var.spaces_access_key_id
  spaces_secret_key = var.spaces_secret_access_key
}

# One-time prerequisite for environments/prod remote state.
resource "digitalocean_spaces_bucket" "terraform_state" {
  name   = var.bucket_name
  region = var.spaces_region_slug
  acl    = "private"

  lifecycle {
    prevent_destroy = true
  }
}

output "bucket_name" {
  value       = digitalocean_spaces_bucket.terraform_state.name
  description = "S3-compat bucket key for prod backend.tf"
}

output "region" {
  value       = digitalocean_spaces_bucket.terraform_state.region
  description = "Region slug wired to Spaces endpoint host"
}
