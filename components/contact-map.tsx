"use client"

import { useEffect, useState } from "react"

export default function ContactMap() {
  const [mapLoaded, setMapLoaded] = useState(false)
  
  useEffect(() => {
    // Load map when component mounts in the client
    setMapLoaded(true)
  }, [])

  if (!mapLoaded) {
    // Render a placeholder before map loads
    return (
      <div className="bg-card rounded-lg shadow-md p-2 h-full min-h-[400px] overflow-hidden flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-10 h-10 bg-muted rounded-full mb-4"></div>
          <div className="h-2 bg-muted rounded w-24 mb-2.5"></div>
          <div className="h-2 bg-muted rounded w-32"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card rounded-lg shadow-md p-2 h-full min-h-[400px] overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395361!2d37.383222!3d37.059444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e6b4f7f18c0d%3A0x68c8afb253911a78!2sPark%20%C4%B0%C5%9F%20Merkezi!5e0!3m2!1str!2str!4v1652345678901!5m2!1str!2str"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "400px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
        className="rounded-md"
      ></iframe>
    </div>
  )
}
