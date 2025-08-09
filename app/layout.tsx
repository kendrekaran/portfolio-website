// @ts-nocheck
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { ThemeProvider } from '../components/theme-provider'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.karank.tech'
const title = 'Karan Kendre'
const description = 'Design Engineer. Portfolio, projects, and contact information.'
const ogImageUrl = `${siteUrl}/ogimage.png?v=1`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: '%s | Karan Kendre' },
  description,
  generator: 'Karan Kendre',
  keywords: [
    'Karan Kendre',
    'Design Engineer',
    'Frontend',
    'Next.js',
    'React',
    'Portfolio',
  ],
  authors: [{ name: 'Karan Kendre', url: 'https://github.com/kendrekaran' }],
  creator: 'Karan Kendre',
  publisher: 'Karan Kendre',
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'Karan Kendre',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Karan Kendre – Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@karaan_dev',
    site: '@karaan_dev',
    images: [ogImageUrl],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Karan Kendre',
              url: siteUrl,
              jobTitle: 'Design Engineer',
              email: 'mailto:karankendreg@gmail.com',
              sameAs: [
                'https://x.com/karaan_dev',
                'https://linkedin.com/in/kendrekaran',
                'https://github.com/kendrekaran',
              ],
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
