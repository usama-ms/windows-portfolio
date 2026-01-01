"use client"
import { useState, useRef } from "react"
import { Download, Printer } from "lucide-react"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"
import styles from "./ResumePdfViewer.module.css"
import Experience from "./Experience"

export default function ResumePdfViewer() {
  const [isDownloading, setIsDownloading] = useState(false)
  const resumeRef = useRef(null)

  const handleDownload = async () => {
    if (!resumeRef.current || isDownloading) return

    setIsDownloading(true)
    try {
      const element = resumeRef.current
      
      // Find the inner content element (Experience component container)
      const contentElement = element.querySelector('[class*="experienceContainer"]') || element.firstElementChild || element
      
      // Store original styles
      const originalOverflow = element.style.overflow
      const originalHeight = element.style.height
      const originalMaxHeight = element.style.maxHeight
      const originalContentOverflow = contentElement.style.overflow
      const originalContentHeight = contentElement.style.height
      
      // Temporarily remove height constraints to capture full content
      element.style.overflow = "visible"
      element.style.height = "auto"
      element.style.maxHeight = "none"
      if (contentElement !== element) {
        contentElement.style.overflow = "visible"
        contentElement.style.height = "auto"
      }
      
      // Wait for layout to adjust
      await new Promise(resolve => setTimeout(resolve, 200))
      
      // Get the actual content dimensions
      const contentHeight = contentElement.scrollHeight || contentElement.offsetHeight
      const contentWidth = contentElement.scrollWidth || contentElement.offsetWidth
      
      // Capture the full resume content as canvas
      const canvas = await html2canvas(contentElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        height: contentHeight,
        width: contentWidth,
        windowWidth: contentWidth,
        windowHeight: contentHeight,
        scrollX: 0,
        scrollY: 0,
      })

      // Restore original styles
      element.style.overflow = originalOverflow
      element.style.height = originalHeight
      element.style.maxHeight = originalMaxHeight
      if (contentElement !== element) {
        contentElement.style.overflow = originalContentOverflow
        contentElement.style.height = originalContentHeight
      }

      // Calculate PDF dimensions
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const pdfWidth = 210 // A4 width in mm
      const pdfHeight = (imgHeight * pdfWidth) / imgWidth
      const pageHeight = 297 // A4 height in mm

      // Create PDF
      const pdf = new jsPDF("p", "mm", "a4")
      const imgData = canvas.toDataURL("image/png", 1.0)

      // Handle multi-page PDF if content is longer than one page
      if (pdfHeight <= pageHeight) {
        // Content fits on one page
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)
      } else {
        // Content spans multiple pages
        let heightLeft = pdfHeight
        let position = 0

        while (heightLeft > 0) {
          if (position === 0) {
            // First page
            pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight)
          } else {
            // Additional pages
            pdf.addPage()
            pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight)
          }
          heightLeft -= pageHeight
          position -= pageHeight
        }
      }

      // Download the PDF
      pdf.save("Usama_Ahmad_Resume.pdf")
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Failed to download resume. Please try again.")
    } finally {
      setIsDownloading(false)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className={styles.pdfViewer}>
      <div className={styles.toolbar}>
        <div className={styles.toolbarButtons}>
          <button className={styles.toolbarButton}>File</button>
          <button className={styles.toolbarButton}>Edit</button>
          <button className={styles.toolbarButton}>View</button>
          <button className={styles.toolbarButton}>Help</button>
        </div>
        <div className={styles.toolbarActions}>
          <button 
            className={styles.actionButton} 
            onClick={handleDownload}
            disabled={isDownloading}
          >
            <Download size={16} />
            {isDownloading ? "Downloading..." : "Save"}
          </button>
          <button className={styles.actionButton} onClick={handlePrint}>
            <Printer size={16} />
            Print
          </button>
        </div>
      </div>

      <div className={styles.pdfContent} ref={resumeRef}>
        <Experience />
      </div>
    </div>
  )
}
