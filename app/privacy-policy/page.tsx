"use client"

import { useEffect, useRef } from "react"

export default function PrivacyPolicyPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Imposta il titolo immediatamente
    document.title = "Escout | Privacy Policy"
    
    // Imposta il titolo anche quando l'iframe si carica
    const handleLoad = () => {
      document.title = "Escout | Privacy Policy"
    }
    
    const iframe = iframeRef.current
    if (iframe) {
      iframe.addEventListener("load", handleLoad)
    }

    // Imposta il titolo periodicamente per assicurarsi che non venga sovrascritto
    const interval = setInterval(() => {
      if (document.title !== "Escout | Privacy Policy") {
        document.title = "Escout | Privacy Policy"
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
        src="/Escout.gg_Privacy_policy.pdf"
        className="w-full h-screen border-0"
        title="Privacy Policy"
      />
    </div>
  )
}

