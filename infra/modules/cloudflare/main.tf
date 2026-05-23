locals {
  _validation_waf = (
    var.waf_enabled && !var.proxy_enabled
  ) ? tobool("ERROR: waf_enabled requires proxy_enabled = true (Phase 7 needs Phase 6).") : true
}

resource "cloudflare_zone" "this" {
  account = {
    id = var.account_id
  }
  name = var.domain
  type = "full"
}

data "cloudflare_ip_ranges" "this" {}

resource "cloudflare_zone_setting" "ssl" {
  count = var.proxy_enabled ? 1 : 0

  zone_id    = cloudflare_zone.this.id
  setting_id = "ssl"
  value      = "strict"
}

resource "cloudflare_zone_setting" "min_tls_version" {
  count = var.proxy_enabled ? 1 : 0

  zone_id    = cloudflare_zone.this.id
  setting_id = "min_tls_version"
  value      = "1.2"
}

resource "cloudflare_zone_setting" "always_use_https" {
  count = var.proxy_enabled ? 1 : 0

  zone_id    = cloudflare_zone.this.id
  setting_id = "always_use_https"
  value      = "on"
}

resource "cloudflare_zone_setting" "automatic_https_rewrites" {
  count = var.proxy_enabled ? 1 : 0

  zone_id    = cloudflare_zone.this.id
  setting_id = "automatic_https_rewrites"
  value      = "on"
}

resource "cloudflare_bot_management" "this" {
  count = var.waf_enabled && var.manage_bot_fight_mode ? 1 : 0

  zone_id    = cloudflare_zone.this.id
  enable_js  = true
  fight_mode = true
}

resource "cloudflare_ruleset" "firewall_custom" {
  count = var.waf_enabled ? 1 : 0

  zone_id     = cloudflare_zone.this.id
  name        = "portfolio-firewall-custom"
  description = "WAF custom rules for the portfolio zone (managed by Terraform)."
  kind        = "zone"
  phase       = "http_request_firewall_custom"

  rules = concat(
    [
      {
        ref         = "block_empty_ua"
        description = "Block requests with no User-Agent (cheap-bot signal)."
        expression  = "(len(http.user_agent) eq 0)"
        action      = "block"
        enabled     = true
      },
    ],
    length(var.scraper_asns) > 0 ? [
      {
        ref         = "challenge_scraper_asns"
        description = "Managed-challenge known scraper / abuse ASNs."
        expression  = "(ip.geoip.asnum in {${join(" ", [for a in var.scraper_asns : tostring(a)])}})"
        action      = "managed_challenge"
        enabled     = true
      },
    ] : [],
  )
}
