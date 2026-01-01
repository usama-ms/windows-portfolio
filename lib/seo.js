/**
 * SEO utility functions for the Windows 10 UI Clone Portfolio
 */

// Generate canonical URL
export function getCanonicalUrl(path = "") {
  const baseUrl = "https://uxmechanic.vercel.app/"
  return `${baseUrl}${path}`
}

// Generate structured data for the portfolio
export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Usama Ahmad",
    url: "https://uxmechanic.vercel.app/",
    sameAs: ["https://github.com/usama-ms", "https://linkedin.com/in/usamaahmad81", "https://uxmechanic.vercel.app/"],
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "IVY Knowledge Service Pvt Ltd",
    },
    image: "https://uxmechanic.vercel.app/images/profile.jpg",
    description: "Full Stack Developer specializing in React, Next.js, and Node.js",
    knowsAbout: ["JavaScript", "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "MySQL"],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Punjab University College of Information Technology - PUCIT",
      sameAs: "https://pucit.edu.pk/",
    },
  }
}

// Generate Open Graph metadata
export function generateOpenGraphData({
  title = "Windows 10 UI Clone - Interactive Portfolio by UxMechanic",
  description = "An interactive portfolio website designed as a Windows 10 desktop clone. Explore projects, skills, and professional information through a familiar Windows 10 interface.",
  url = "https://uxmechanic.vercel.app/",
  image = "https://uxmechanic.vercel.app/images/og-image.png",
}) {
  return {
    title,
    description,
    url,
    siteName: "UxMechanic Portfolio",
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: "Windows 10 UI Clone Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  }
}

// Generate Twitter Card metadata
export function generateTwitterCardData({
  title = "Windows 10 UI Clone - Interactive Portfolio by UxMechanic",
  description = "An interactive portfolio website designed as a Windows 10 desktop clone. Explore projects, skills, and professional information through a familiar Windows 10 interface.",
  image = "https://uxmechanic.vercel.app/images/og-image.png",
}) {
  return {
    card: "summary_large_image",
    title,
    description,
    images: [image],
    creator: "@UxMechanic",
  }
}
