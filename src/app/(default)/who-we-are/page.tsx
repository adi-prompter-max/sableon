import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { getSiteSettings } from "@/lib/get-site-settings"
import WhoWeAreContent from "@/components/whoweare/WhoWeAreContent"

const settings = getSiteSettings()

export const metadata: Metadata = {
  title: `Who We Are - ${settings.siteName}`,
  description:
    "Meet the Sableon team — Gautam Chauhan, Keshav Chauhan, and Aditya Pratap Singh. We are a Product Development & Engineering Agency helping startups and modern businesses turn ideas into scalable digital products.",
  keywords: [
    "Product development agency",
    "Sableon founders",
    "Gautam Chauhan",
    "Keshav Chauhan",
    "Aditya Pratap Singh",
    "engineering agency",
    "MVP development team",
    "AI product development",
    "startup development partner",
    "full-stack engineering",
  ],
  openGraph: {
    title: `Who We Are - ${settings.siteName}`,
    description:
      "Meet the Sableon team — a Product Development & Engineering Agency led by Gautam Chauhan, Keshav Chauhan, and Aditya Pratap Singh. We help startups turn ideas into scalable products.",
    url: `${siteConfig.url.base}/who-we-are`,
    images: [
      {
        url: siteConfig.ogImage,
        alt: `${settings.siteName} - Who We Are`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Who We Are - ${settings.siteName}`,
    description:
      "Meet the Sableon team — Gautam Chauhan, Keshav Chauhan, and Aditya Pratap Singh. A Product Development & Engineering Agency building exceptional digital products.",
    images: [siteConfig.ogImage],
  },
}

export default function WhoWeAre() {
  return <WhoWeAreContent />
}
