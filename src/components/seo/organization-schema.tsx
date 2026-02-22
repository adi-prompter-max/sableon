export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sableon",
    "alternateName": "Sableon Agency",
    "url": process.env.NEXT_PUBLIC_APP_URL || "https://www.sableon.com",
    "logo": `${process.env.NEXT_PUBLIC_APP_URL || "https://www.sableon.com"}/images/assets/logos/sableon-logo.svg`,
    "description": "Helping startups and modern businesses turn ideas into scalable digital products. From discovery and UX to MVP delivery, full-stack engineering, and AI-first product development.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.instagram.com/sableon",
      "https://www.github.com/sableon",
      "https://www.linkedin.com/company/sableon"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@sableon.com",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    },
    "founder": [
      {
        "@type": "Person",
        "name": "Gautam Chauhan",
        "jobTitle": "Co-Founder & CEO"
      },
      {
        "@type": "Person",
        "name": "Keshav Chauhan",
        "jobTitle": "Co-Founder & CTO"
      },
      {
        "@type": "Person",
        "name": "Aditya Pratap Singh",
        "jobTitle": "Co-Founder & COO"
      },
    ],
    "foundingDate": "2025",
    "knowsAbout": [
      "Product Development",
      "Full-Stack Engineering",
      "MVP Development",
      "UX/UI Design",
      "AI Product Development",
      "LLM Application Development",
      "Cloud Infrastructure",
      "Intelligent Automation"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
