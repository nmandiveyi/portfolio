# portfolio-infra

Terraform for deploying the portfolio site (Vite + React SPA) to DigitalOcean App Platform, with optional phased Cloudflare DNS and WAF in front of the static site.

## Layout

```
environments/
  prod/                       # root module — applies/owns all of prod
  bootstrap-state-bucket/     # Spaces bucket for prod remote backend (local state only — run once)
modules/
  cloudflare/                 # CF zone, zone settings, lightweight WAF rulesets
  cloudflare-dns/             # CF apex/www CNAME records → App Platform
  dns/                        # Legacy DigitalOcean DNS (apex zone only); disabled once CF DNS is active
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

## Bootstrap (one-time)

### 1. Create remote state bucket

```bash
cd infra/environments/bootstrap-state-bucket
export TF_VAR_do_token="dop_v1_..."
export TF_VAR_spaces_access_key_id="..."
export TF_VAR_spaces_secret_access_key="..."
terraform init && terraform apply
```

### 2. Migrate prod to remote state

```bash
cd infra/environments/prod
export AWS_ACCESS_KEY_ID="..."      # Spaces access key
export AWS_SECRET_ACCESS_KEY="..."  # Spaces secret
export TF_VAR_do_token="dop_v1_..."
terraform init -migrate-state
```

### 3. Connect GitHub to DigitalOcean

In the DigitalOcean console, authorize App Platform to access `nmandiveyi/portfolio` (same OAuth flow as nocura-ui).

### 4. First apply

With Cloudflare flags all `false`:

```bash
terraform apply
```

Verify the default ingress URL serves the built site:

```bash
terraform output -raw frontend_default_ingress
```

### 5. Configure GitHub Actions secrets

See [`docs/github-actions-config.md`](docs/github-actions-config.md). Create **`production`** and **`production-destroy`** GitHub environments for apply/destroy workflows.

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

## CI workflows

Workflows live at the repo root (`.github/workflows/terraform-*.yml`) and run against `infra/environments/prod`:

- **terraform-plan.yml** — runs on PRs to `main` that touch `infra/**`
- **terraform-apply.yml** — manual dispatch on `main` (requires `production` environment)
- **terraform-destroy.yml** — manual dispatch with typed confirmation (requires `production-destroy` environment)

App deploys are automatic on push to `main` via App Platform — no separate frontend CI deploy workflow needed.
