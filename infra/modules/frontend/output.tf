output "id" {
  value = digitalocean_app.this.id
}

output "default_ingress" {
  value = digitalocean_app.this.default_ingress
}

output "live_url" {
  value = digitalocean_app.this.live_url
}
