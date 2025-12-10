"use client"

import { useEffect, useRef } from "react"

export default function TermsOfServicePage() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Imposta il titolo immediatamente
    document.title = "Escout | Terms of Service"
    
    // Imposta il titolo anche quando l'iframe si carica
    const handleLoad = () => {
      document.title = "Escout | Terms of Service"
    }
    
    const iframe = iframeRef.current
    if (iframe) {
      iframe.addEventListener("load", handleLoad)
    }

    // Imposta il titolo periodicamente per assicurarsi che non venga sovrascritto
    const interval = setInterval(() => {
      if (document.title !== "Escout | Terms of Service") {
        document.title = "Escout | Terms of Service"
      }
    }, 100)

    return () => {
      if (iframe) {
        iframe.removeEventListener("load", handleLoad)
      }
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <iframe
        ref={iframeRef}
        src="/Escout.gg_Terms_of_service.pdf"
        className="w-full h-screen border-0"
        title="Terms of Service"
      />
    </div>
  )
}

