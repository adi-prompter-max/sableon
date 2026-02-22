import { NextResponse } from 'next/server'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.sableon.com'

export async function GET() {
  const currentDate = new Date().toISOString()

  const sitemaps = [
    {
      url: `${baseUrl}/sitemap.xml`,
      lastmod: currentDate,
    },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(sitemap => `  <sitemap>
    <loc>${sitemap.url}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
}
