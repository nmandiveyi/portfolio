locals {
  root_domain = "nmandiveyi.com"
  www_domain  = "www.${local.root_domain}"

  cf_phase_levels_ok = (
    (!var.cloudflare_dns_enabled || var.cloudflare_enabled) &&
    (!var.cloudflare_proxy_enabled || var.cloudflare_dns_enabled) &&
    (!var.cloudflare_waf_enabled || var.cloudflare_proxy_enabled)
  )

  _validate_cf_phases = local.cf_phase_levels_ok ? true : tobool(
    "ERROR: Cloudflare phase variables must build on each other. Required ordering: cloudflare_enabled -> cloudflare_dns_enabled -> cloudflare_proxy_enabled -> cloudflare_waf_enabled."
  )
}

module "frontend" {
  source = "../../modules/frontend"

  name        = "portfolio-frontend"
  region      = var.region
  github_repo = "nmandiveyi/portfolio"
  branch      = "main"
  source_dir  = "/"
  domain      = local.root_domain
  www_domain  = local.www_domain

  manage_dns_zone = !var.cloudflare_dns_enabled
}

module "cloudflare" {
  source = "../../modules/cloudflare"
  count  = var.cloudflare_enabled ? 1 : 0

  account_id    = var.cloudflare_account_id
  domain        = local.root_domain
  proxy_enabled = var.cloudflare_proxy_enabled
  waf_enabled   = var.cloudflare_waf_enabled
  scraper_asns  = var.cloudflare_scraper_asns
}

module "cloudflare_dns" {
  source = "../../modules/cloudflare-dns"
  count  = var.cloudflare_dns_enabled ? 1 : 0

  zone_id                  = module.cloudflare[0].zone_id
  domain                   = local.root_domain
  frontend_origin_hostname = regex("^https?://([^/]+)", module.frontend.default_ingress)[0]
  proxied                  = var.cloudflare_proxy_enabled
}
