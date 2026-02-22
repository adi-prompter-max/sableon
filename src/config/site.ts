import { SiteConfig } from "@/types"

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://www.sableon.com"

export const siteConfig: SiteConfig = {
  name: "Sableon",
  slogan: "Product Development & Engineering Agency",
  author: "sableon",
  description:
    "Sableon is a Product Development & Engineering Agency helping startups and modern businesses turn ideas into scalable digital products. From discovery and UX to MVP delivery, full-stack engineering, and AI-first product development.",
  keywords: [
    "Product development agency",
    "Engineering agency",
    "MVP development",
    "Full-stack engineering",
    "AI product development",
    "LLM application development",
    "Startup development partner",
    "UX design and prototyping",
    "Scalable digital products",
    "AI consulting and deployment",
  ],
  url: {
    base: baseUrl,
    author: baseUrl,
  },
  ogImage: `${baseUrl}/images/sableon_opengraph_banner.jpg`,
}
