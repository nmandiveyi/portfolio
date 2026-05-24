resource "digitalocean_app" "this" {
  spec {
    name   = var.name
    region = var.region

    static_site {
      name              = "web"
      source_dir        = var.source_dir
      environment_slug  = "node-js"
      build_command     = var.build_command
      output_dir        = var.output_dir
      index_document    = "index.html"
      catchall_document = "index.html"

      github {
        repo           = var.github_repo
        branch         = var.branch
        deploy_on_push = true
      }

      env {
        key   = "PNPM_SKIP_PRUNING"
        value = "true"
        scope = "BUILD_TIME"
      }

      env {
        key   = "PNPM_VERSION"
        value = "9.15.9"
        scope = "BUILD_TIME"
      }
    }

    domain {
      name = var.domain
      type = "PRIMARY"
      zone = var.manage_dns_zone ? var.domain : null
    }

    domain {
      name = var.www_domain
      type = "ALIAS"
      zone = var.manage_dns_zone ? var.domain : null
    }
  }
}
