"use client"
import styles from "./FolderContent.module.css"

export default function EducationFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Education</h1>

      <div className={styles.educationItem}>
        <div className={styles.educationHeader}>
          <h2>BS Computer Science</h2>
        </div>
        <p className={styles.educationInstitution}>Punjab University College of Information Technology - PUCIT</p>
      </div>
    </div>
  )
}
