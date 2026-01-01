"use client"

import { useState, useEffect } from "react"
import DesktopIcon from "./DesktopIcon"
import Window from "./Window"
import styles from "./Desktop.module.css"
import { desktopApps } from "@/data/apps"

export default function Desktop({
  openWindow,
  openWindows,
  closeWindow,
  minimizeWindow,
  minimizedWindows,
  activeWindow,
  setActiveWindow,
}) {
  const [selectedIcon, setSelectedIcon] = useState(null)
  const [windowZIndexes, setWindowZIndexes] = useState({})
  const baseZIndex = 1000

  // Z-index management: active window always gets highest z-index
  useEffect(() => {
    setWindowZIndexes((prev) => {
      const newZIndexes = { ...prev }
      
      // Initialize z-indexes for new windows
      openWindows.forEach((window) => {
        if (!newZIndexes[window.id]) {
          newZIndexes[window.id] = baseZIndex
        }
      })
      
      // Remove z-indexes for closed windows
      Object.keys(newZIndexes).forEach((windowId) => {
        if (!openWindows.find((w) => w.id === windowId)) {
          delete newZIndexes[windowId]
        }
      })
      
      // Active window gets highest z-index
      if (activeWindow) {
        if (!newZIndexes[activeWindow]) {
          newZIndexes[activeWindow] = baseZIndex
        }
        
        const otherZIndexes = Object.entries(newZIndexes)
          .filter(([id]) => id !== activeWindow)
          .map(([, z]) => z)
        const maxZ = otherZIndexes.length > 0 
          ? Math.max(...otherZIndexes) 
          : baseZIndex
        
        newZIndexes[activeWindow] = maxZ + 1
      }
      
      return newZIndexes
    })
  }, [openWindows, activeWindow, baseZIndex])

  const handleIconClick = (e, app) => {
    e.stopPropagation()
    setSelectedIcon(app.id)
  }

  const handleIconDoubleClick = (app) => {
    openWindow(app)
  }

  const handleDesktopClick = () => {
    setSelectedIcon(null)
    setActiveWindow(null)
  }

  const focusWindow = (id) => {
    setActiveWindow(id)
  }

  return (
    <div className={styles.desktop} onClick={handleDesktopClick}>
      <div className={styles.iconGrid} onClick={(e) => e.stopPropagation()}>
        {desktopApps.map((app) => (
          <DesktopIcon
            key={app.id}
            app={app}
            isSelected={selectedIcon === app.id}
            onClick={(e) => handleIconClick(e, app)}
            onDoubleClick={() => handleIconDoubleClick(app)}
          />
        ))}
      </div>

      {openWindows.map((window) => {
        // Add openWindow function to the window props
        const windowWithOpenWindow = {
          ...window,
          openWindow: openWindow,
        }

        return (
          <Window
            key={window.id}
            app={windowWithOpenWindow}
            onClose={() => closeWindow(window.id)}
            isActive={activeWindow === window.id}
            onFocus={() => focusWindow(window.id)}
            onMinimize={() => minimizeWindow(window.id)}
            zIndex={windowZIndexes[window.id] || baseZIndex}
          />
        )
      })}
    </div>
  )
}
