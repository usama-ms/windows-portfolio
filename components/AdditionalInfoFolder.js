"use client"
import styles from "./FolderContent.module.css"

export default function AdditionalInfoFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Additional Information</h1>

      <div className={styles.additionalInfo}>
        <div className={styles.infoSection}>
          <h2>Featured Projects</h2>
          
          <div className={styles.workExperience}>
            <h3>Torquewire - AI-Powered Automotive News Platform</h3>
            <p className={styles.workDescription}>
              Torquewire is an enterprise AI platform for automotive news aggregation, processing 10,000+ articles daily with high accuracy using OpenAI APIs and RAG technology. Built with Next.js, Supabase, and Stripe.
            </p>
            <ul className={styles.workResponsibilities}>
              <li>
                Developed enterprise AI platform for automotive news aggregation, processing 10,000+ articles daily with 
                95% metadata extraction accuracy using OpenAI APIs and RAG technology.
              </li>
              <li>
                Automated social media distribution via cron jobs, increasing content reach by 300% and reducing manual 
                workload by 80% across LinkedIn and X platforms.
              </li>
              <li>
                Implemented subscription management system with Stripe, achieving 25% conversion rate and processing $100K+ 
                in recurring revenue within first 6 months of launch.
              </li>
            </ul>
          </div>

          <div className={styles.workExperience}>
            <h3>TipHaus: Automated Tip Management for Restaurants</h3>
            <p className={styles.workDescription}>
              TipHaus is a no-code platform that automates tip pooling and distribution for service businesses. Powered by Next.js, Tailwind CSS, and JavaScript and Built with Builder.io, it integrates with payroll and POS systems for accurate, fair, and transparent tip management.
            </p>
            <ul className={styles.workResponsibilities}>
              <li>
                Created a no-code platform that automates tip pooling and distribution for service businesses.
              </li>
              <li>
                Integrated with payroll and POS systems for accurate, fair, and transparent tip management.
              </li>
              <li>
                Featured customizable pooling rules, automated calculations, real-time tracking, and employee visibility.
              </li>
              <li>
                Built with Next.js, Tailwind CSS, JavaScript, and Builder.io, integrating Hubspot API for seamless operations.
              </li>
              <li>
                Delivered a high-performance, responsive web app with pixel-perfect Figma-to-code implementation and intuitive CMS.
              </li>
            </ul>
          </div>

          <div className={styles.workExperience}>
            <h3>Verano</h3>
            <p className={styles.workDescription}>
              Verano is a modern web application showcasing innovative design and functionality. Built with cutting-edge technologies to deliver exceptional user experiences.
            </p>
            <ul className={styles.workResponsibilities}>
              <li>
                Developed a responsive web application with modern UI/UX design principles.
              </li>
              <li>
                Implemented advanced features using React and Next.js for optimal performance.
              </li>
              <li>
                Integrated third-party APIs and services for enhanced functionality.
              </li>
              <li>
                Ensured cross-browser compatibility and mobile responsiveness.
              </li>
              <li>
                Optimized for performance and SEO to deliver fast, accessible experiences.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.infoSection}>
          <h2>Languages</h2>
          <ul className={styles.languageList}>
            <li>English (Professional)</li>
            <li>Dutch (Very Basic)</li>
          </ul>
        </div>

        <div className={styles.infoSection}>
          <h2>Interests</h2>
          <ul className={styles.interestsList}>
            <li>Web Development</li>
            <li>Artificial Intelligence</li>
            <li>Open Source Contribution</li>
            <li>Reading</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
