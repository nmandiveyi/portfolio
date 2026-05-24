variable "name" {
  type = string
}

variable "region" {
  type    = string
  default = "tor1"
}

variable "github_repo" {
  description = "GitHub repo in owner/repo format"
  type        = string
}

variable "branch" {
  type    = string
  default = "main"
}

variable "source_dir" {
  description = "Path to Next.js app inside repo. Use / if repo root."
  type        = string
  default     = "/"
}

variable "domain" {
  description = "Apex domain (e.g. nmandiveyi.com)"
  type        = string
}

variable "www_domain" {
  description = "WWW alias domain (e.g. www.nmandiveyi.com)"
  type        = string
}

variable "site_url" {
  description = "Canonical site origin for NEXT_PUBLIC_SITE_URL (no trailing slash), e.g. https://www.nmandiveyi.com"
  type        = string
}

variable "manage_dns_zone" {
  description = "When true App Platform manages DNS via the DigitalOcean DNS zone. Set false once Cloudflare owns the zone."
  type        = bool
  default     = true
}

variable "project_id" {
  description = "DigitalOcean project UUID. Without this, the app is created in your account default project."
  type        = string
}
