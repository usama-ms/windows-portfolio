"use client"
import styles from "./FolderContent.module.css"

export default function SkillsFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Skills</h1>

      <div className={styles.skillsGrid}>
        <div className={styles.skillCategory}>
          <h2>Programming Languages</h2>
          <ul className={styles.skillList}>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SQL</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Frontend Frameworks</h2>
          <ul className={styles.skillList}>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Redux</li>
            <li>Context API</li>
            <li>Framer Motion</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Backend Technologies</h2>
          <ul className={styles.skillList}>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST APIs</li>
            <li>GraphQL</li>
            <li>Microservices</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>AI & Machine Learning</h2>
          <ul className={styles.skillList}>
            <li>OpenAI API</li>
            <li>LangChain</li>
            <li>RAG</li>
            <li>Vector Databases (Pinecone)</li>
            <li>GPT-4</li>
            <li>Fine-tuning</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Databases</h2>
          <ul className={styles.skillList}>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Supabase</li>
            <li>MySQL</li>
            <li>Vector Databases</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Cloud & Infrastructure</h2>
          <ul className={styles.skillList}>
            <li>AWS</li>
            <li>Docker</li>
            <li>Vercel</li>
            <li>CI/CD Pipelines</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Tools & Platforms</h2>
          <ul className={styles.skillList}>
            <li>Git</li>
            <li>GitHub</li>
            <li>Builder.io</li>
            <li>Stripe</li>
            <li>SendGrid</li>
            <li>Mapbox</li>
            <li>Storybook</li>
            <li>Postman</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
