variable "account_id" {
  description = "Cloudflare account ID that owns the zone."
  type        = string
}

variable "domain" {
  description = "Apex domain to manage in Cloudflare (e.g. nmandiveyi.com)."
  type        = string
}

variable "proxy_enabled" {
  description = "Phase 6: apply Full-strict / TLS 1.2 / Always-Use-HTTPS zone settings."
  type        = bool
  default     = false
}

variable "waf_enabled" {
  description = "Phase 7: create firewall rulesets and Bot Fight Mode. Requires proxy_enabled = true."
  type        = bool
  default     = false
}

variable "manage_bot_fight_mode" {
  description = "Phase 7 (optional): manage Bot Fight Mode via cloudflare_bot_management."
  type        = bool
  default     = false
}

variable "scraper_asns" {
  description = "Optional list of ASN numbers to managed-challenge. Empty list disables that rule."
  type        = list(number)
  default     = []
}
