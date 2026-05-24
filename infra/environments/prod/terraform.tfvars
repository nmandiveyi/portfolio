# do_token — prefer TF_VAR_do_token (never commit the real value):
#   export TF_VAR_do_token="dop_v1_..."
# Or set locally in an untracked override file, e.g. terraform.local.tfvars
#
# cloudflare_api_token — required once cloudflare_enabled = true. Token scopes:
#   Account:Account Settings:Read, Zone:Zone:Edit, Zone:DNS:Edit,
#   Zone:SSL and Certificates:Edit, Zone:Zone WAF:Edit.
#   Pass via TF_VAR_cloudflare_api_token.
# cloudflare_account_id — your Cloudflare account ID (dash sidebar > Account ID).
#
# Cloudflare rollout (set in terraform.local.tfvars, one phase at a time):
#   cloudflare_enabled       = true   # Phase 1: zone; outputs nameservers
#   # ...do the manual NS swap (Phase 2) and wait for "Active"...
#   cloudflare_dns_enabled   = true   # Phase 3: gray-cloud DNS records via CF
#   cloudflare_proxy_enabled = true   # Phases 4-6: orange cloud + HTTPS hardening
#   cloudflare_waf_enabled   = true   # Phase 7: Bot Fight Mode + static-site WAF
