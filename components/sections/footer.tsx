"use client"

import Link from "next/link"
import Image from "next/image"
import { Twitter, Twitch, Youtube, DiscIcon as Discord } from "lucide-react"
import { useTheme } from "@/components/theme/theme-provider"


export function Footer() {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()

  // Determine which logo to use based on theme
  const logoSrc = theme === "dark" ? "/images/escout_logo-white.svg" : "/images/escout_logo-black.svg"

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-black to-cyan-950/20 border-t border-white/[0.05]">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large blurred color blooms */}
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-cyan-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src={logoSrc}
                  alt="Escout Logo"
                  width={160}
                  height={48}
                  className="h-8 w-auto"
                  priority
                />
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                Connecting talented esports players with professional opportunities through advanced analytics and AI-powered insights.
              </p>
            </div>
            
            <div className="flex space-x-4">
              {[Twitter, Discord, Twitch, Youtube].map((Icon, i) => (
                <Link 
                  key={i}
                  href="#" 
                  className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Platform Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-6">
              Platform
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#features"
                  className="text-white/50 hover:text-white transition-colors text-sm"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/50 hover:text-white transition-colors text-sm"
                >
                  Games
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-white/50 hover:text-white transition-colors text-sm"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-white/50 hover:text-white transition-colors text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-white/50 hover:text-white transition-colors text-sm"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-white/50 hover:text-white transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Press", "Partners", "Tournaments"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 mt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} Escout. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="/Escout.gg_Privacy_policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/Escout.gg_Terms_of_service.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/Escout.gg_Cookie_policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
