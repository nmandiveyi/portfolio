output "zone_id" {
  value       = cloudflare_zone.this.id
  description = "Cloudflare zone ID for var.domain."
}

output "nameservers" {
  value       = cloudflare_zone.this.name_servers
  description = "Cloudflare-assigned nameservers. Phase 2: paste these into the registrar."
}

output "ipv4_cidrs" {
  value       = data.cloudflare_ip_ranges.this.ipv4_cidrs
  description = "Cloudflare edge IPv4 CIDRs."
}

output "ipv6_cidrs" {
  value       = data.cloudflare_ip_ranges.this.ipv6_cidrs
  description = "Cloudflare edge IPv6 CIDRs."
}
