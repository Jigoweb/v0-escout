"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useTheme } from "@/components/theme/theme-provider"
import Image from "next/image"

interface NavItem {
  label: string
  href: string
}

export function Header({
  navItems = [
    { label: "Features", href: "#features" },
    { label: "For Players", href: "#for-players" },
    { label: "For Teams", href: "#for-teams" },
    { label: "For Tournaments", href: "#for-tournaments" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
  ],
  ctaLabel = "Join the Beta",
}: {
  navItems?: NavItem[]
  ctaLabel?: string
}) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Determine which logo to use based on theme
  const logoSrc = theme === "dark" ? "/images/escout_logo-white.svg" : "/images/escout_logo-black.svg"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Main Header Bar */}
      <div
        className={cn(
          "relative z-50 transition-all duration-300 w-full",
          isScrolled || isMobileMenuOpen
            ? "bg-white/80 dark:bg-[#030303]/80 backdrop-blur-md py-4 shadow-lg dark:shadow-none"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="text-xl font-bold text-neutral-900 dark:text-white relative z-50">
              <Image
                src={logoSrc || "/placeholder.svg"}
                alt="Escout Logo"
                width={120}
                height={40}
                className="h-6 w-auto"
                priority
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-neutral-600 hover:text-neutral-900 dark:text-white/70 dark:hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center space-x-4">
                <Button
                  className="bg-gradient-to-r from-violet-500 to-emerald-500 hover:from-violet-600 hover:to-emerald-600 text-white border-0"
                  asChild
                >
                  <a href="https://hh-escout.vercel.app/sign-in">
                    <span className="text-white-fixed">{ctaLabel}</span>
                  </a>
                </Button>
              </div>
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center space-x-4 relative z-50">
              <button
                className="text-neutral-900 dark:text-white focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#030303] lg:hidden flex flex-col"
          >
            {/* Content Container - Padded from top to start below header */}
            <div className="container mx-auto px-4 h-full flex flex-col pt-24 pb-8 overflow-y-auto">
              <nav className="flex-1 flex flex-col space-y-6 mt-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    href={item.href}
                    className="text-neutral-900 dark:text-white font-bebas tracking-wide uppercase text-4xl md:text-5xl hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-auto pt-8"
              >
                <Button
                  className="bg-gradient-to-r from-violet-500 to-emerald-500 hover:from-violet-600 hover:to-emerald-600 text-white border-0 w-full h-14 text-lg font-bold uppercase tracking-wide"
                  asChild
                >
                  <a href="https://hh-escout.vercel.app/sign-in">
                    {ctaLabel}
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
