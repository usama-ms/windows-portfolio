export default function generateMetadata() {
  const title = "Windows 10 UI Clone - Interactive Portfolio by UxMechanic"
  const description =
    "An interactive portfolio website designed as a Windows 10 desktop clone. Explore projects, skills, and professional information through a familiar Windows 10 interface."
  const url = "https://uxmechanic.vercel.app/"
  const ogImage = "https://uxmechanic.vercel.app/images/og-image.png"

  return {
    title,
    description,
    metadataBase: new URL(url),
    openGraph: {
      title,
      description,
      url,
      siteName: "UxMechanic Portfolio",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Windows 10 UI Clone Portfolio",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@UxMechanic",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
    },
    authors: [{ name: "Usama Ahmad", url: "https://github.com/usama-ms" }],
    creator: "Usama Ahmad",
    publisher: "UxMechanic",
    keywords: [
      "portfolio",
      "windows 10",
      "ui clone",
      "web developer",
      "react",
      "next.js",
      "interactive portfolio",
      "usama ahmad",
      "UxMechanic",
      "frontend developer",
      "full stack developer",
    ],
  }
}
