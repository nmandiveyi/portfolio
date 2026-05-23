# GitHub Actions secrets and variables

Configure these under **Settings → Secrets and variables → Actions** in `nmandiveyi/portfolio`.

Never commit secrets. Canonical required identifiers are enumerated in **`infra/scripts/ci/validate-required-config.sh`**.

**Naming convention.** Create Repository secrets whose **names match the workflow mappings** (`TF_VAR_DO_TOKEN`, …). Each YAML `env:` block exports them **to Terraform-compatible keys**, e.g. `TF_VAR_do_token: ${{ secrets.TF_VAR_DO_TOKEN }}`. Boolean variables use string `true` / `false`. Lists are JSON on one line.

---

## Spaces bucket provisioning (Terraform, laptop)

[`environments/bootstrap-state-bucket`](../environments/bootstrap-state-bucket) creates the **`portfolio-tfstate`** Space in **`nyc3`** matching [`prod/backend.tf`](../environments/prod/backend.tf). It keeps **local** Terraform state (never point it at itself as `backend "s3"`).

One-time vars (shell `export` **`TF_VAR_…`** or untracked `*.local.tfvars`):

| Variable | Source |
|---------|--------|
| `do_token` | DigitalOcean API token |
| `spaces_access_key_id` | Spaces key ID |
| `spaces_secret_access_key` | Spaces secret |

Then: `cd infra/environments/bootstrap-state-bucket && terraform init && terraform apply`. Afterwards run **`terraform init -migrate-state`** under **`infra/environments/prod`**.

---

## Terraform + remote state (plan, apply, destroy)

### Secrets (GitHub → process env keys)

| GitHub Actions secret name | Passed as env | Purpose |
| -------------------------- | ------------- | ------- |
| `DO_SPACES_ACCESS_KEY_ID` | `AWS_ACCESS_KEY_ID` | Spaces Access Key (Terraform S3 backend env name) |
| `DO_SPACES_SECRET_ACCESS_KEY` | `AWS_SECRET_ACCESS_KEY` | Spaces secret |
| `TF_VAR_DO_TOKEN` | `TF_VAR_do_token` | DigitalOcean API token |
| `TF_VAR_CLOUDFLARE_API_TOKEN` | `TF_VAR_cloudflare_api_token` | Cloudflare API token |
| `TF_VAR_CLOUDFLARE_ACCOUNT_ID` | `TF_VAR_cloudflare_account_id` | Cloudflare account ID |
| `TF_VAR_CLOUDFLARE_ENABLED` | `TF_VAR_cloudflare_enabled` | `true` / `false` |
| `TF_VAR_CLOUDFLARE_DNS_ENABLED` | `TF_VAR_cloudflare_dns_enabled` | `true` / `false` |
| `TF_VAR_CLOUDFLARE_PROXY_ENABLED` | `TF_VAR_cloudflare_proxy_enabled` | `true` / `false` |
| `TF_VAR_CLOUDFLARE_WAF_ENABLED` | `TF_VAR_cloudflare_waf_enabled` | `true` / `false` |
| `TF_VAR_CLOUDFLARE_SCRAPER_ASNS` | `TF_VAR_cloudflare_scraper_asns` | JSON int array (`[]`) |

For local **`terraform init -migrate-state`**, export Spaces credentials as **`AWS_ACCESS_KEY_ID`** / **`AWS_SECRET_ACCESS_KEY`**.

---

## GitHub environments

- **`production`** — required for `terraform apply` workflow dispatch
- **`production-destroy`** — required for `terraform destroy` workflow dispatch
