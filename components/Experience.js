"use client"
import styles from "./Experience.module.css"

export default function Experience() {
  return (
    <div className={styles.experienceContainer}>
      <div className={styles.resumeHeader}>
        <h1>Usama Ahmad</h1>
        <div className={styles.contactInfo}>
          <p>Lahore, Pakistan | usama.ahmad00033@gmail.com | +92 3044336613</p>
          <p>
            <a href="https://linkedin.com/in/usamaahmad81" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/usamaahmad81
            </a> |{" "}
            <a href="https://github.com/usama-ms" target="_blank" rel="noopener noreferrer">
              github.com/usama-ms
            </a> |{" "}
            <a href="https://uxmechanic.vercel.app/" target="_blank" rel="noopener noreferrer">
              uxmechanic.vercel.app
            </a>
          </p>
        </div>
      </div>

      <section className={styles.resumeSection}>
        <h2>Professional Summary</h2>
        <p>
          Results-driven Software Engineer with 5+ years of experience developing scalable web applications and AI-powered solutions. 
          Proven track record of delivering high-impact projects for enterprise clients, reducing operational costs by up to 40%, 
          and improving system performance by 60%. Specialized in full-stack development with React, Next.js, and Node.js, 
          with expertise in AI integration, cloud architecture, and real-time systems serving 500K+ users.
        </p>
      </section>

      <section className={styles.resumeSection}>
        <h2>Core Competencies</h2>
        <div className={styles.competenciesGrid}>
          <div>
            <strong>Frontend:</strong> React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS
          </div>
          <div>
            <strong>Backend:</strong> Node.js, Express.js, GraphQL, REST APIs, Microservices
          </div>
          <div>
            <strong>AI/ML:</strong> OpenAI API, RAG, LangChain, Pinecone, GPT-4, Fine-tuning
          </div>
          <div>
            <strong>Databases:</strong> PostgreSQL, MongoDB, Supabase, Vector Databases
          </div>
          <div>
            <strong>Cloud & DevOps:</strong> AWS, Docker, CI/CD, Vercel
          </div>
          <div>
            <strong>Tools:</strong> Git, Builder.io, Mapbox, Stripe, SendGrid, Storybook
          </div>
        </div>
      </section>

      <section className={styles.resumeSection}>
        <h2>Professional Experience</h2>
        
        <div className={styles.experienceItem}>
          <div className={styles.jobHeader}>
            <h3>Software Engineer</h3>
            <span className={styles.date}>Aug 2023 - Present</span>
          </div>
          <p className={styles.companyName}>Mergestack | Lahore, Pakistan</p>
          <ul>
            <li>
              Architected and developed scalable full-stack web applications, reducing page load times by 45% and improving 
              user engagement metrics by 35% through performance optimization and modern React patterns.
            </li>
            <li>
              Led cross-functional agile teams of 5+ developers to deliver enterprise-grade solutions, consistently meeting 
              sprint deadlines with 95% on-time delivery rate.
            </li>
            <li>
              Implemented microservices architecture and API integrations, increasing system scalability to handle 10x traffic 
              growth and reducing infrastructure costs by 30%.
            </li>
            <li>
              Developed reusable component libraries and design systems, reducing development time by 40% and ensuring 
              consistent UX across multiple product lines.
            </li>
          </ul>
        </div>

        <div className={styles.experienceItem}>
          <div className={styles.jobHeader}>
            <h3>Associate Software Engineer</h3>
            <span className={styles.date}>Jul 2022 - Jun 2023</span>
          </div>
          <p className={styles.companyName}>Technosoft Solutions | Lahore, Pakistan</p>
          <ul>
            <li>
              Developed responsive web applications using React and Next.js, improving mobile user experience scores by 50% 
              and increasing conversion rates by 25%.
            </li>
            <li>
              Collaborated with design and backend teams to deliver 15+ production-ready features, reducing bug rates by 30% 
              through comprehensive testing and code reviews.
            </li>
            <li>
              Optimized database queries and API responses, reducing average response times from 800ms to 200ms, resulting 
              in 60% improvement in application performance.
            </li>
            <li>
              Integrated third-party APIs and payment gateways, successfully processing $2M+ in transactions with 99.9% 
              uptime reliability.
            </li>
          </ul>
        </div>

        <div className={styles.experienceItem}>
          <div className={styles.jobHeader}>
            <h3>Freelance Software Engineer</h3>
            <span className={styles.date}>Jan 2021 - Present</span>
          </div>
          <p className={styles.companyName}>Fiverr | Remote</p>
          <ul>
            <li>
              Delivered 50+ custom web applications and solutions for international clients, maintaining 4.9/5.0 average 
              rating and 98% client satisfaction rate.
            </li>
            <li>
              Built scalable e-commerce platforms and SaaS applications, generating $500K+ in client revenue and serving 
              25K+ active users across various industries.
            </li>
            <li>
              Provided technical consulting services, helping clients reduce development costs by 35% through strategic 
              architecture decisions and technology recommendations.
            </li>
          </ul>
        </div>

        <div className={styles.experienceItem}>
          <div className={styles.jobHeader}>
            <h3>Software Engineering Intern</h3>
            <span className={styles.date}>Jan 2022 - Jul 2022</span>
          </div>
          <p className={styles.companyName}>Tech Solutions Inc. | Lahore, Pakistan</p>
          <ul>
            <li>
              Contributed to 3 major web application projects, implementing 20+ features that improved user workflows and 
              reduced manual processes by 40%.
            </li>
            <li>
              Learned and applied modern development frameworks (React, Node.js), completing training modules with 100% 
              completion rate and earning certification.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.resumeSection}>
        <h2>Key Projects</h2>

        <div className={styles.projectItem}>
          <div className={styles.jobHeader}>
            <h3>Patient Journey - AI Healthcare Platform</h3>
            <span className={styles.date}>2024</span>
          </div>
          <p className={styles.projectTech}>React | LangChain | GPT-4 | Pinecone | RAG</p>
          <ul>
            <li>
              Architected and developed AI-powered doctor's assistant platform deployed to 500,000+ healthcare practitioners 
              across Brazil, reducing diagnostic time by 35% and improving treatment accuracy by 28%.
            </li>
            <li>
              Implemented RAG-based retrieval system with Pinecone vector database, achieving 92% accuracy in medical 
              query responses and reducing API costs by 40% through optimized prompt engineering.
            </li>
            <li>
              Built scalable React frontend with LangChain orchestration, handling 50K+ daily active users with sub-200ms 
              response times and 99.95% uptime.
            </li>
          </ul>
        </div>

        <div className={styles.projectItem}>
          <div className={styles.jobHeader}>
            <h3>Torquewire - AI-Powered Automotive News Platform</h3>
            <span className={styles.date}>2024</span>
          </div>
          <p className={styles.projectTech}>Next.js | OpenAI | Supabase | Stripe | RAG</p>
          <ul>
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

        <div className={styles.projectItem}>
          <div className={styles.jobHeader}>
            <h3>TipHaus - Automated Tip Management Platform</h3>
            <span className={styles.date}>2024</span>
          </div>
          <p className={styles.projectTech}>Next.js | Builder.io | Hubspot API | Tailwind CSS</p>
          <ul>
            <li>
              Built no-code SaaS platform automating tip pooling for 500+ service businesses, reducing payroll processing 
              time by 70% and eliminating calculation errors by 100%.
            </li>
            <li>
              Integrated with 10+ payroll and POS systems, processing $5M+ in tip distributions with 99.9% accuracy and 
              real-time transparency for employees.
            </li>
            <li>
              Delivered pixel-perfect Figma-to-code implementation, achieving 98% design system compliance and reducing 
              development iterations by 50% through Builder.io CMS integration.
            </li>
          </ul>
        </div>

        <div className={styles.projectItem}>
          <div className={styles.jobHeader}>
            <h3>Zen Leaf - Multi-State Cannabis E-Commerce Platform</h3>
            <span className={styles.date}>2023</span>
          </div>
          <p className={styles.projectTech}>Next.js | TypeScript | Mapbox | GraphQL | Storybook</p>
          <ul>
            <li>
              Developed high-performance e-commerce platform serving 50+ dispensary locations across multiple states, 
              processing 15K+ monthly transactions with seamless checkout experience.
            </li>
            <li>
              Implemented interactive map-based store locator using Mapbox and Google Maps, reducing store search time 
              by 60% and increasing in-store foot traffic by 25%.
            </li>
            <li>
              Built scalable frontend architecture with TypeScript and GraphQL, improving code maintainability by 45% 
              and reducing bug rates by 35% through type safety and component documentation with Storybook.
            </li>
          </ul>
        </div>

        <div className={styles.projectItem}>
          <div className={styles.jobHeader}>
            <h3>Findasetter - Appointment Setter Hiring Platform</h3>
            <span className={styles.date}>2023</span>
          </div>
          <p className={styles.projectTech}>Next.js | Supabase | Stripe | TypeScript | React</p>
          <ul>
            <li>
              Created hiring marketplace connecting businesses with vetted appointment setters, facilitating 5,000+ 
              successful job matches and generating $300K+ in platform transactions.
            </li>
            <li>
              Streamlined hiring workflow reducing time-to-hire by 50%, with 90% client satisfaction rate and 40% 
              repeat customer rate.
            </li>
            <li>
              Integrated multi-payment gateway system including Stripe, processing $500K+ in payments with 99.8% 
              transaction success rate and PCI-compliant security.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.resumeSection}>
        <h2>Education</h2>
        <div className={styles.educationItem}>
          <div className={styles.jobHeader}>
            <h3>BS Computer Science</h3>
          </div>
          <p className={styles.companyName}>Punjab University College of Information Technology (PUCIT) | Lahore, Pakistan</p>
        </div>
      </section>

      <section className={styles.resumeSection}>
        <h2>Technical Skills</h2>
        <ul className={styles.skillsList}>
          <li>
            <strong>Programming Languages:</strong> JavaScript (ES6+), TypeScript, HTML5, CSS3, SQL
          </li>
          <li>
            <strong>Frontend Frameworks:</strong> React.js, Next.js, Redux, Context API, Framer Motion
          </li>
          <li>
            <strong>Backend Technologies:</strong> Node.js, Express.js, REST APIs, GraphQL, Microservices
          </li>
          <li>
            <strong>AI & Machine Learning:</strong> OpenAI API, LangChain, RAG, Vector Databases (Pinecone), GPT-4
          </li>
          <li>
            <strong>Databases:</strong> PostgreSQL, MongoDB, Supabase, MySQL
          </li>
          <li>
            <strong>Cloud & Infrastructure:</strong> AWS, Docker, Vercel, CI/CD Pipelines
          </li>
          <li>
            <strong>Tools & Platforms:</strong> Git, GitHub, Builder.io, Stripe, SendGrid, Mapbox, Storybook, Postman
          </li>
        </ul>
      </section>
    </div>
  )
}

