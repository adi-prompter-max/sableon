import { siteConfig } from "@/config/site"

export function getSiteSettings() {
  return {
    siteName: siteConfig.name,
    siteSlogan: siteConfig.slogan || "",
    siteDescription: siteConfig.description,
    footerDescription:
      "Helping startups and modern businesses turn ideas into scalable digital products. From discovery and UX to MVP delivery, full-stack engineering, and AI-first product development.",
    contactEmail: "hello@sableon.com",
    contactAddress: "India",
    socialInstagram: "https://www.instagram.com/sableon",
    socialGithub: "https://www.github.com/sableon",
    socialLinkedin: "https://www.linkedin.com/company/sableon",
  }
}
