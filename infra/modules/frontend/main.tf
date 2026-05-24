resource "digitalocean_app" "this" {
  spec {
    name   = var.name
    region = var.region

    service {
      name               = "web"
      instance_size_slug = "apps-s-1vcpu-0.5gb"
      instance_count     = 1
      source_dir         = var.source_dir

      github {
        repo           = var.github_repo
        branch         = var.branch
        deploy_on_push = true
      }

      build_command = "pnpm run build"
      run_command   = "pnpm start"
      http_port     = 3001

      env {
        key   = "NEXT_PUBLIC_SITE_URL"
        value = var.site_url
        scope = "RUN_AND_BUILD_TIME"
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
