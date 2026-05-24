variable "do_token" {
  description = "DigitalOcean API token"
  type        = string
  sensitive   = true
}

variable "do_project_id" {
  description = "DigitalOcean project UUID for the App Platform app. List with: doctl projects list"
  type        = string
}

variable "environment" {
  description = "Environment"
  type        = string
  default     = "prod"
}

variable "region" {
  description = "DigitalOcean region for App Platform"
  type        = string
  default     = "tor1"
}

variable "app_name" {
  description = "App name prefix"
  type        = string
  default     = "portfolio"
}

variable "cloudflare_api_token" {
  description = "Cloudflare API token. Required once cloudflare_enabled = true."
  type        = string
  default     = ""
  sensitive   = true
}

variable "cloudflare_account_id" {
  description = "Cloudflare account ID that owns nmandiveyi.com."
  type        = string
  default     = ""
}

variable "cloudflare_enabled" {
  description = "Phase 1: stand up the cloudflare_zone (no traffic change). Outputs cloudflare_nameservers for the manual NS swap."
  type        = bool
  default     = false
}

variable "cloudflare_dns_enabled" {
  description = "Phase 3: create gray-cloud cloudflare_dns_record entries for apex/www and stop creating the equivalent DigitalOcean records."
  type        = bool
  default     = false
}

variable "cloudflare_proxy_enabled" {
  description = "Phases 4-6: flip proxied=true on CF records and set Full strict / TLS 1.2 / Always-Use-HTTPS."
  type        = bool
  default     = false
}

variable "cloudflare_waf_enabled" {
  description = "Phase 7: enable Bot Fight Mode and lightweight static-site WAF rules."
  type        = bool
  default     = false
}

variable "cloudflare_scraper_asns" {
  description = "Optional list of ASN numbers to managed-challenge when WAF is enabled."
  type        = list(number)
  default     = []
}
