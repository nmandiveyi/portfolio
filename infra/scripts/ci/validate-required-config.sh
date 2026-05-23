#!/usr/bin/env bash
# Validates required Secrets / Variables are present before Terraform.
# Usage: ./scripts/ci/validate-required-config.sh terraform
# Never prints values — only missing key names.

set -euo pipefail

_nonempty() {
  local v="${1:-}"
  [[ "${v//$'\r'/}" =~ [^[:space:]] ]]
}

check_all() {
  local mode="$1"
  shift
  local missing=()
  local k v
  for k in "$@"; do
    v="${!k:-}"
    if ! _nonempty "$v"; then
      missing+=("$k")
    fi
  done
  if ((${#missing[@]})); then
    echo "Missing required configuration (${mode}): ${missing[*]}" >&2
    return 1
  fi
  echo "validate-required-config: ok (${mode})"
}

MODE="${1:-}"
if [[ "$MODE" != "terraform" ]]; then
  echo "usage: $0 terraform" >&2
  exit 2
fi

TERRAFORM_KEYS=(
  AWS_ACCESS_KEY_ID
  AWS_SECRET_ACCESS_KEY
  TF_VAR_do_token
  TF_VAR_cloudflare_api_token
  TF_VAR_cloudflare_account_id
  TF_VAR_cloudflare_enabled
  TF_VAR_cloudflare_dns_enabled
  TF_VAR_cloudflare_proxy_enabled
  TF_VAR_cloudflare_waf_enabled
  TF_VAR_cloudflare_scraper_asns
)

check_all terraform "${TERRAFORM_KEYS[@]}"
