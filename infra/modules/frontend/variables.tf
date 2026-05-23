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
  description = "Path to app inside repo. Use / if repo root."
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

variable "manage_dns_zone" {
  description = "When true App Platform manages DNS via the DigitalOcean DNS zone. Set false once Cloudflare owns the zone."
  type        = bool
  default     = true
}

variable "build_command" {
  type    = string
  default = "pnpm run build"
}

variable "output_dir" {
  type    = string
  default = "dist"
}
