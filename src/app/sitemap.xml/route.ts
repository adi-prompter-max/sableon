import { NextResponse } from 'next/server'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.sableon.com'

export async function GET() {
  const currentDate = new Date().toISOString()

  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0',
    },
    {
      url: `${baseUrl}/who-we-are`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: '0.8',
    },
    {
      url: `${baseUrl}/policies/terms-of-use`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: '0.5',
    },
    {
      url: `${baseUrl}/policies/privacy-policy`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: '0.5',
    },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes.map(route => `  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
}
