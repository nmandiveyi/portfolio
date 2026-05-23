resource "digitalocean_app" "this" {
  spec {
    name   = var.name
    region = var.region

    static_site {
      name       = "web"
      source_dir = var.source_dir

      github {
        repo           = var.github_repo
        branch         = var.branch
        deploy_on_push = true
      }

      build_command     = var.build_command
      output_dir        = var.output_dir
      index_document    = "index.html"
      catchall_document = "index.html"
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
