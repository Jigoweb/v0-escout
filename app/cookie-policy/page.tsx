"use client"

import { useEffect, useRef } from "react"

export default function CookiePolicyPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Imposta il titolo immediatamente
    document.title = "Escout | Cookie Policy"
    
    // Imposta il titolo anche quando l'iframe si carica
    const handleLoad = () => {
      document.title = "Escout | Cookie Policy"
    }
    
    const iframe = iframeRef.current
    if (iframe) {
      iframe.addEventListener("load", handleLoad)
    }

    // Imposta il titolo periodicamente per assicurarsi che non venga sovrascritto
    const interval = setInterval(() => {
      if (document.title !== "Escout | Cookie Policy") {
        document.title = "Escout | Cookie Policy"
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
        src="/Escout.gg_Cookie_policy.pdf"
        className="w-full h-screen border-0"
        title="Cookie Policy"
      />
    </div>
  )
}

