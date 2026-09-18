import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import './quiet.css'
import { Analytics } from '@vercel/analytics/next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.karaan.me'
const defaultTitle = 'Karan Kendre – Design Engineer & Ghostwriter'
const defaultDescription = 'I\'m Karan Kendre, a Design Engineer & Ghostwriter from India. I build polished interfaces and have written and created posts for major AI companies. My content has generated over 100M impressions.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: defaultTitle, template: '%s | Karan Kendre' },
  description: defaultDescription,
  generator: 'Karan Kendre',
  keywords: [
    'Karan Kendre',
    'Design Engineer',
    'Ghostwriter',
    'AI Content Writer',
    'React Developer',
    'Next.js Developer',
    'Portfolio',
    'UI Engineer',
    'India Design Engineer and Ghostwriter',
    'Kargul Studio',
    'Keizer Works',
    'karaan_dev',
  ],
  authors: [{ name: 'Karan Kendre', url: 'https://github.com/kendrekaran' }],
  creator: 'Karan Kendre',
  publisher: 'Karan Kendre',
  alternates: { canonical: '/' },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: 'Karan Kendre',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: defaultTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    creator: '@karaan_dev',
    site: '@karaan_dev',
    images: "/opengraph-image",
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Karan Kendre",
              "alternateName": "Karan",
              "url": "https://www.karaan.me",
              "image": "https://i.pinimg.com/736x/48/9b/5a/489b5aa4d508ef3e18e9eecdfc50a63d.jpg",
              "sameAs": [
                "https://x.com/karaan_dev",
                "https://linkedin.com/in/kendrekaran",
                "https://github.com/kendrekaran"
              ],
              "jobTitle": "Design Engineer & Ghostwriter",
              "nationality": {
                "@type": "Country",
                "name": "India"
              },
              "description": defaultDescription,
              "knowsAbout": ["Design Engineering", "Ghostwriting", "AI Content", "React", "Next.js", "UI/UX Design", "TypeScript", "Tailwind CSS"],
            })
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="quiet-skip">Skip to content</a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
