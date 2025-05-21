"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Twitter, Mail, MapPin, Phone, Twitch, Youtube, DiscIcon as Discord } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme/theme-provider"
import Image from "next/image"

function FloatingBubble({
  size = "md",
  color = "primary",
  delay = 0,
  duration = 20,
  className,
}: {
  size?: "sm" | "md" | "lg"
  color?: "primary" | "secondary" | "accent"
  delay?: number
  duration?: number
  className?: string
}) {
  // Size mappings
  const sizeMap = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  // Color mappings
  const colorMap = {
    primary: "bg-gradient-to-br from-violet-500/20 to-violet-500/5 dark:from-violet-500/20 dark:to-violet-500/10",
    secondary: "bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 dark:from-emerald-500/20 dark:to-emerald-500/10",
    accent: "bg-gradient-to-br from-amber-500/20 to-amber-500/5 dark:from-amber-500/20 dark:to-amber-500/10",
  }

  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: -40, opacity: 1 }}
      transition={{
        y: {
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
          delay,
        },
        opacity: {
          duration: 0.4,
          delay,
        },
      }}
      className={cn("absolute rounded-full", sizeMap[size], colorMap[color], className)}
    />
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()

  // Determine which logo to use based on theme
  const logoSrc = theme === "dark" ? "/images/escout_logo-white.svg" : "/images/escout_logo-black.svg"

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-[#050505] dark:to-[#030303] border-t border-neutral-200 dark:border-white/[0.05]">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

        {/* Floating bubbles */}
        <div className="absolute inset-0">
          <FloatingBubble size="sm" color="primary" delay={0.5} className="left-[10%] top-[20%]" />
          <FloatingBubble size="md" color="secondary" delay={0.8} className="left-[20%] top-[40%]" />
          <FloatingBubble size="sm" color="accent" delay={1.2} className="left-[30%] top-[70%]" />
          <FloatingBubble size="lg" color="primary" delay={1.5} className="left-[70%] top-[15%]" />
          <FloatingBubble size="sm" color="secondary" delay={0.7} className="left-[80%] top-[30%]" />
          <FloatingBubble size="md" color="accent" delay={1.0} className="left-[90%] top-[60%]" />
        </div>

        {/* Glowing orb */}
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-violet-500/10 to-emerald-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src={logoSrc || "/placeholder.svg"}
                alt="Escout Logo"
                width={120}
                height={40}
                className="h-6 w-auto"
              />
            </div>
            <p className="text-neutral-600 dark:text-white/40 mb-6">
              Connecting talented esports players with professional opportunities through advanced analytics and
              AI-powered insights.
            </p>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="outline"
                className="rounded-full border-neutral-300 dark:border-white/10 text-neutral-700 dark:text-white/70 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/5"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full border-neutral-300 dark:border-white/10 text-neutral-700 dark:text-white/70 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/5"
              >
                <Discord className="h-4 w-4" />
                <span className="sr-only">Discord</span>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full border-neutral-300 dark:border-white/10 text-neutral-700 dark:text-white/70 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/5"
              >
                <Twitch className="h-4 w-4" />
                <span className="sr-only">Twitch</span>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full border-neutral-300 dark:border-white/10 text-neutral-700 dark:text-white/70 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/5"
              >
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-white mb-4">
              Platform
            </h4>
            <ul className="space-y-2">
              {["Features", "Games", "How It Works", "Pricing", "Success Stories", "FAQ"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-neutral-600 dark:text-white/40 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {["About", "Blog", "Careers", "Press", "Partners", "Tournaments"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-neutral-600 dark:text-white/40 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-500 dark:text-emerald-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-600 dark:text-white/40">
                  123 Esports Avenue, Gaming District, GD 10101
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-emerald-500 dark:text-emerald-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-600 dark:text-white/40">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-emerald-500 dark:text-emerald-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-600 dark:text-white/40">support@escout.gg</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-neutral-200 dark:border-white/[0.05] flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-600 dark:text-white/40 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Escout. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="#"
              className="text-neutral-600 dark:text-white/40 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-neutral-600 dark:text-white/40 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-neutral-600 dark:text-white/40 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
