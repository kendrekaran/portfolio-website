import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import './quiet.css'
import { Analytics } from '@vercel/analytics/next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.karaan.me'
const defaultTitle = 'Karan Kendre – Design Engineer & Frontend Developer'
const defaultDescription = 'I\'m Karan Kendre, a Design Engineer & Frontend Developer from India. Recently at Kargul Studio. Passionate about polished interfaces, seamless UX, and animations that feel natural. View my projects, gallery, and get in touch.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: defaultTitle, template: '%s | Karan Kendre' },
  description: defaultDescription,
  generator: 'Karan Kendre',
  keywords: [
    'Karan Kendre',
    'Design Engineer',
    'Frontend Developer',
    'Frontend Engineer',
    'React Developer',
    'Next.js Developer',
    'Portfolio',
    'UI Engineer',
    'India Frontend Developer',
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
        url: "https://www.karaan.me/ogimage.png",
        width: 1327,
        height: 571,
        alt: 'Karan Kendre – Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    creator: '@karaan_dev',
    site: '@karaan_dev',
    images: "https://www.karaan.me/ogimage.png",
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
              "jobTitle": "Design Engineer & Frontend Developer",
              "nationality": {
                "@type": "Country",
                "name": "India"
              },
              "description": "Design Engineer & Frontend Developer from India, passionate about polished interfaces and seamless user experiences.",
              "knowsAbout": ["Frontend Development", "React", "Next.js", "UI/UX Design", "TypeScript", "Tailwind CSS"],
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
