variable "zone_id" {
  description = "Cloudflare zone ID for the apex domain."
  type        = string
}

variable "domain" {
  description = "Apex domain (e.g. nmandiveyi.com)."
  type        = string
}

variable "frontend_origin_hostname" {
  description = "External hostname the apex/www CNAMEs flatten to (e.g. <app>.ondigitalocean.app)."
  type        = string
}

variable "proxied" {
  description = "When true the records flip to proxied=true (orange cloud)."
  type        = bool
  default     = false
}
