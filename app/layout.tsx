// @ts-nocheck
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Geist, Geist_Mono, Newsreader } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import { Analytics } from '@vercel/analytics/next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.karaan.me'
const title = 'Karan Kendre'
const description = 'Design Engineer. Portfolio, projects, and contact information.'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })
const newsreader = Newsreader({ 
  variable: '--font-newsreader', 
  subsets: ['latin'],
  style: 'italic',
  weight: '400'
})

const newsreaderNormal = Newsreader({ 
  variable: '--font-newsreader-normal', 
  subsets: ['latin'],
  weight: '400'
})

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
    title : "Karan Kendre – Portfolio",
    description : "Design Engineer. Portfolio, projects, and contact information.",
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
  maximumScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <head>
      <head>
  <style dangerouslySetInnerHTML={{ __html: `
    html, body { 
      scrollbar-width: none !important; 
      -ms-overflow-style: none !important; 
      overflow-x: hidden !important; 
    }
    html::-webkit-scrollbar, body::-webkit-scrollbar { 
      display: none !important; 
      width: 0 !important; 
      height: 0 !important; 
    }
  ` }} />
  <meta property="og:title" content="Karan Kendre – Portfolio" />
  <meta property="og:description" content="Design Engineer. Portfolio, projects, and contact information." />
  <meta property="og:image" content="https://www.karaan.me/ogimage.png" />
  <meta property="og:url" content="https://www.karaan.me" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Karan Kendre – Portfolio" />
  <meta name="twitter:description" content="Design Engineer. Portfolio, projects, and contact information." />
  <meta name="twitter:image" content="https://www.karaan.me/ogimage.png" />
  <meta name="twitter:site" content="@karaan_dev" />
  <meta name="twitter:creator" content="@karaan_dev" />
</head>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} ${newsreaderNormal.variable} antialiased min-h-screen mb-12 overflow-x-hidden`} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
