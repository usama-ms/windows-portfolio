"use client"
import styles from "./FolderContent.module.css"
import { Mail, Phone, Globe } from "lucide-react"

export default function ContactFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Contact Information</h1>

      <div className={styles.contactCard}>
        <div className={styles.contactItem}>
          <Mail size={24} className={styles.contactIcon} />
          <div className={styles.contactDetails}>
            <span className={styles.contactLabel}>Email</span>
            <a href="mailto:usama.ahmad00033@gmail.com" className={styles.contactValue}>
              usama.ahmad00033@gmail.com
            </a>
          </div>
        </div>

        <div className={styles.contactItem}>
          <Phone size={24} className={styles.contactIcon} />
          <div className={styles.contactDetails}>
            <span className={styles.contactLabel}>Phone</span>
            <a href="tel:+923044336613" className={styles.contactValue}>
              +92 3044336613
            </a>
          </div>
        </div>

        <div className={styles.contactItem}>
          <Globe size={24} className={styles.contactIcon} />
          <div className={styles.contactDetails}>
            <span className={styles.contactLabel}>Website</span>
            <a
              href="https://uxmechanic.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactValue}
            >
              https://uxmechanic.vercel.app/
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
