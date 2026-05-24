# portfolio-infra

Terraform for deploying the portfolio site (Vite + React SPA) to DigitalOcean App Platform, with optional phased Cloudflare DNS and WAF in front of the static site.

**State:** local only (`terraform.tfstate` in `environments/prod/` — gitignored). Run `terraform apply` from your laptop.

**App deploys:** automatic on push to `main` via App Platform `deploy_on_push`. No GitHub Actions workflows needed for infra or frontend deploys.

## Layout

```
environments/
  prod/                       # root module — apply from here
modules/
  cloudflare/                 # CF zone, zone settings, lightweight WAF rulesets
  cloudflare-dns/             # CF apex/www CNAME records → App Platform
  dns/                        # DigitalOcean DNS (apex zone only); disabled once CF DNS is active
  frontend/                   # App Platform static site (Vite build → dist/)
```

## Request path (post-rollout end state)

```
Client (browser)
  │ HTTPS
  ▼
Cloudflare edge (optional WAF, Bot Fight Mode)
  │ apex / www ──▶ DigitalOcean App Platform (static site)
                       │ build from GitHub main on push
                       ▼
                     nmandiveyi/portfolio → pnpm run build → dist/
```

## Cloudflare rollout

The Cloudflare integration is gated behind four boolean variables in `environments/prod/variables.tf`. Flip them left-to-right with a `terraform apply` between each step.

| Variable                   | Phase | What it adds |
| -------------------------- | ----- | ------------ |
| `cloudflare_enabled`       | 1     | `cloudflare_zone`. Outputs `cloudflare_nameservers` for the manual NS swap. |
| (manual)                   | 2     | Update registrar NS records to Cloudflare nameservers. Wait for zone **Active**. |
| `cloudflare_dns_enabled`   | 3     | CF apex/www CNAME → App Platform ingress; remove DO DNS zone module. |
| `cloudflare_proxy_enabled` | 4-6   | Orange-cloud proxy + Full strict / TLS 1.2 / Always-Use-HTTPS. |
| `cloudflare_waf_enabled`   | 7     | Bot Fight Mode (optional) + block empty User-Agent + optional ASN challenge. |

Initial apply can run with all Cloudflare flags `false` to stand up DO DNS + App Platform first.

### Rollback runbook

1. **Gray cloud:** set `cloudflare_proxy_enabled = false` and `cloudflare_waf_enabled = false`, then `terraform apply`.
2. **Full revert to DO DNS:** set `cloudflare_dns_enabled = false` and `cloudflare_enabled = false`, then `terraform apply`. Revert registrar NS to DigitalOcean if needed.

## First-time setup

### 1. Connect GitHub to DigitalOcean

In the DigitalOcean console, authorize App Platform to access `nmandiveyi/portfolio` (same OAuth flow as nocura-ui).

### 2. Apply infrastructure

```bash
cd infra/environments/prod
export TF_VAR_do_token="dop_v1_..."
terraform init
terraform apply
```

With Cloudflare flags all `false`, the first apply creates the DO DNS zone + App Platform app + custom domains.

Verify the default ingress URL serves the built site:

```bash
terraform output -raw frontend_default_ingress
```

After that, pushes to `main` trigger App Platform rebuilds automatically — no CI deploy workflow required.

### 3. Cloudflare (optional, phased)

Set flags in an untracked `terraform.local.tfvars` or via `TF_VAR_*` exports, one phase at a time:

```bash
# infra/environments/prod/terraform.local.tfvars (gitignored)
cloudflare_enabled       = true
cloudflare_dns_enabled   = false
cloudflare_proxy_enabled = false
cloudflare_waf_enabled   = false
```

Also export Cloudflare credentials when enabling:

```bash
export TF_VAR_cloudflare_api_token="..."
export TF_VAR_cloudflare_account_id="..."
```

After Phase 1 apply, update registrar NS using:

```bash
terraform output -json cloudflare_nameservers
```

## Local development overrides

Never commit secrets. Use an untracked file:

```bash
# infra/environments/prod/terraform.local.tfvars (gitignored)
cloudflare_enabled       = false
cloudflare_dns_enabled   = false
cloudflare_proxy_enabled = false
cloudflare_waf_enabled   = false
```

Pass tokens via environment:

```bash
export TF_VAR_do_token="dop_v1_..."
export TF_VAR_cloudflare_api_token="..."
export TF_VAR_cloudflare_account_id="..."
```

## Domain

- **Apex:** `nmandiveyi.com` (PRIMARY)
- **WWW:** `www.nmandiveyi.com` (ALIAS)
- **Deploy branch:** `main` (App Platform `deploy_on_push`)
