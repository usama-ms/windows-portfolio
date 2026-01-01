"use client"
import { ExternalLink } from "lucide-react"
import styles from "./FolderContent.module.css"

export default function ProjectsFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Projects</h1>

      <div className={styles.projectItem}>
        <h2>Torquewire: Discover Automobiles With Intelligent Tech</h2>
        <div className={styles.projectLinks}>
          <a
            href="https://www.torquewire.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        </div>
        <ul>
          <li>
            Built an AI-powered platform for automotive news using OpenAI to extract article metadata and enable
            RAG-based search for precise, context-aware results.
          </li>
          <li>
            Automated daily social media posts to LinkedIn and X via cron jobs, ensuring consistent content distribution.
          </li>
          <li>
            Integrated Stripe for subscription management and secure authentication including LinkedIn OAuth.
          </li>
          <li>
            Developed with Next.js, React, Supabase, SendGrid, RAG and OpenAI, blending AI, automation, and real-time
            data processing.
          </li>
          <li>
            Streamlined workflows to deliver timely, relevant automotive news with intelligent search capabilities.
          </li>
        </ul>
      </div>

      <div className={styles.projectItem}>
        <h2>TipHaus: Automated Tip Management for Restaurants</h2>
        <div className={styles.projectLinks}>
          <a
            href="https://tiphaus.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        </div>
        <ul>
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
            Built with Next.js, Tailwind CSS, JavaScript, and Builder.io, integrating Hubspot API for seamless
            operations.
          </li>
          <li>
            Delivered a high-performance, responsive web app with pixel-perfect Figma-to-code implementation and
            intuitive CMS.
          </li>
        </ul>
      </div>

      <div className={styles.projectItem}>
        <h2>Zen Leaf: Multi-state Cannabis Dispensary Platform</h2>
        <div className={styles.projectLinks}>
          <a
            href="https://zenleafdispensaries.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        </div>
        <ul>
          <li>
            Developed a multi-state cannabis dispensary platform for seamless online browsing and purchasing for
            medical and recreational users.
          </li>
          <li>
            Built a high-performance, scalable front-end using Next.js and React, ensuring smooth and intuitive user
            experience.
          </li>
          <li>
            Integrated real-time product availability, location-based services, and secure checkout functionalities.
          </li>
          <li>
            Implemented interactive maps using Mapbox and Google Maps, allowing users to locate stores in the US with
            just one tap.
          </li>
          <li>
            Utilized TypeScript, GraphQL, and StoryBook for type-safe development and component documentation.
          </li>
        </ul>
      </div>

      <div className={styles.projectItem}>
        <h2>Findasetter: Find Vetted Setters to Fill Calendars & Drive Sales</h2>
        <div className={styles.projectLinks}>
          <a
            href="https://www.findasetter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        </div>
        <ul>
          <li>
            Created a hiring platform that connects businesses with vetted appointment setters specializing in booking
            qualified calls and following up with leads.
          </li>
          <li>
            Streamlined the entire process from posting a job to messaging and interviewing, making it easy to find and
            hire the right talent.
          </li>
          <li>
            Integrated multiple payment gateways including Stripe for seamless transactions.
          </li>
          <li>
            Built with Supabase, TypeScript, Next.js, React, and Tailwind CSS for a modern, scalable solution.
          </li>
          <li>
            Enabled businesses to grow faster and more efficiently by filling calendars and keeping sales pipelines
            active.
          </li>
        </ul>
      </div>

      <div className={styles.projectItem}>
        <h2>Patient Journey: A Healthcare Platform Backed by Brazilian Government</h2>
        <div className={styles.projectLinks}>
          <a
            href="https://uxmechanic.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        </div>
        <ul>
          <li>
            Developed an AI-powered doctor's assistant designed specifically for Brazilian doctors, now launched for
            over half a million practitioners.
          </li>
          <li>
            Helps doctors by analyzing patient health patterns and providing diagnostic support and treatment
            recommendations in real-time.
          </li>
          <li>
            Leveraged advanced AI techniques including RAG, fine-tuned models, OpenAI APIs, and vector databases like
            Pinecone.
          </li>
          <li>
            Built using React for the frontend, with LangChain orchestrating the AI workflows for seamless integration.
          </li>
          <li>
            Delivered a scalable solution that supports healthcare professionals with intelligent, context-aware
            assistance.
          </li>
        </ul>
      </div>

      <div className={styles.projectItem}>
        <h2>Portfolio Website</h2>
        <div className={styles.projectLinks}>
          <a
            href="https://uxmechanic.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        </div>
        <ul>
          <li>
            Built a modern, responsive portfolio website showcasing projects, skills, and professional experience.
          </li>
          <li>
            Developed with Next.js and Tailwind CSS for optimal performance and responsive design.
          </li>
          <li>
            Integrated Framer Motion for smooth animations and enhanced user experience.
          </li>
          <li>
            Implemented TypeScript for type safety and improved code quality.
          </li>
          <li>
            Designed with a clean, professional layout that effectively presents technical expertise and project
            portfolio.
          </li>
        </ul>
      </div>
    </div>
  )
}
