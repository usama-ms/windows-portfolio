export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0078d7" />
      <meta name="msapplication-TileColor" content="#0078d7" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <link rel="canonical" href="https://uxmechanic.vercel.app/" />

      {/* Preload critical assets */}
      <link rel="preload" href="/images/windows-wallpaper.png" as="image" />

      {/* Structured data for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />
    </>
  )
}
