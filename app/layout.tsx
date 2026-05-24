import type { Metadata, Viewport } from 'next'

import './globals.css'

import { AppShell } from '@/components/layout/AppShell'
import { JsonLd } from '@/components/shared/JsonLd'
import { getSiteUrl, personJsonLd, seo, webSiteJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: seo.defaultTitle,
    template: `%s | ${seo.siteName}`,
  },
  description: seo.defaultDescription,
  authors: [{ name: seo.siteName }],
  openGraph: {
    type: 'website',
    locale: seo.locale,
    siteName: seo.siteName,
    title: seo.defaultTitle,
    description: seo.defaultDescription,
  },
  twitter: {
    card: 'summary',
    title: seo.defaultTitle,
    description: seo.defaultDescription,
  },
  alternates: {
    canonical: '/',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d0d0b',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA">
      <body>
        <JsonLd data={personJsonLd()} />
        <JsonLd data={webSiteJsonLd()} />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
