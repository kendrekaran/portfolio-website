// @ts-nocheck
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/theme-provider'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.karank.tech'
const title = 'Karan Kendre'
const description = 'Design Engineer. Portfolio, projects, and contact information.'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

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
        url: "https://www.karank.tech/ogimage.png",
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
    images: "https://www.karank.tech/ogimage.png",
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
      <head>
  <meta property="og:title" content="Karan Kendre – Portfolio" />
  <meta property="og:description" content="Design Engineer. Portfolio, projects, and contact information." />
  <meta property="og:image" content="https://www.karank.tech/ogimage.png" />
  <meta property="og:url" content="https://www.karank.tech" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Karan Kendre – Portfolio" />
  <meta name="twitter:description" content="Design Engineer. Portfolio, projects, and contact information." />
  <meta name="twitter:image" content="https://www.karank.tech/ogimage.png" />
  <meta name="twitter:site" content="@karaan_dev" />
  <meta name="twitter:creator" content="@karaan_dev" />
</head>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
