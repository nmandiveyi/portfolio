locals {
  www_fqdn  = "www.${var.domain}"
  apex_fqdn = var.domain
}

resource "cloudflare_dns_record" "apex" {
  zone_id = var.zone_id
  name    = local.apex_fqdn
  type    = "CNAME"
  content = var.frontend_origin_hostname
  ttl     = 1
  proxied = var.proxied
  comment = "Managed by Terraform. CNAME flattening at apex points to App Platform."
}

resource "cloudflare_dns_record" "www" {
  zone_id = var.zone_id
  name    = local.www_fqdn
  type    = "CNAME"
  content = var.frontend_origin_hostname
  ttl     = 1
  proxied = var.proxied
  comment = "Managed by Terraform. Alias for App Platform."
}
