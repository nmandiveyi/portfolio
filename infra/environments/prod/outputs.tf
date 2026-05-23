output "frontend_default_ingress" {
  value       = module.frontend.default_ingress
  description = "Default App Platform ingress URL before custom domain is active."
}

output "frontend_live_url" {
  value       = module.frontend.live_url
  description = "Live URL for the deployed static site."
}

output "cloudflare_nameservers" {
  value       = var.cloudflare_enabled ? module.cloudflare[0].nameservers : []
  description = "Cloudflare-assigned NS hostnames. After Phase 1 apply, paste these into the registrar."
}

output "cloudflare_zone_id" {
  value       = var.cloudflare_enabled ? module.cloudflare[0].zone_id : ""
  description = "Zone ID for nmandiveyi.com (empty until cloudflare_enabled = true)."
}
