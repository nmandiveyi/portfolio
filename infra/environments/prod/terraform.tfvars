# do_token / do_project_id — set in portfolio.auto.tfvars (gitignored) or export TF_VAR_*:
#   export TF_VAR_do_token="dop_v1_..."
#   export TF_VAR_do_project_id="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
#
# cloudflare_api_token / cloudflare_account_id — same pattern; see portfolio.auto.tfvars.
#
# Cloudflare rollout — edit portfolio.auto.tfvars one phase at a time:
#   cloudflare_enabled       = true   # Phase 1: zone; outputs nameservers
#   # ...do the manual NS swap (Phase 2) and wait for "Active"...
#   cloudflare_dns_enabled   = true   # Phase 3: gray-cloud DNS records via CF
#   cloudflare_proxy_enabled = true   # Phases 4-6: orange cloud + HTTPS hardening
#   cloudflare_waf_enabled   = true   # Phase 7: Bot Fight Mode + static-site WAF
