"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)
  
  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    
    // Check for initial load
    setMatches(mediaQuery.matches)
    
    // Update when media query changes
    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }
    
    // Add event listener
    mediaQuery.addEventListener("change", handler)
    
    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handler)
    }
  }, [query])
  
  return matches
}
