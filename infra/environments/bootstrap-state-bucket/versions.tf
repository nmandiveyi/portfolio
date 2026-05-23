terraform {
  backend "local" {}

  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.50"
    }
  }
}

# Local backend only: this workspace creates the Space prod uses via backend "s3".
# Never point this workspace at that same backend without a deliberate migration story.
