import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.karaan.me'
  const now = new Date().toISOString()
  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}


