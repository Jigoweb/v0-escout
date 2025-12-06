"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

export function CTABanner({
  title = "Ready to Transform Esports Scouting?",
  description = "Join the platform that's creating a clear path to pro for players and efficient talent discovery for teams.",
  primaryCta = "Join the Beta",
  secondaryCta = "Schedule a Demo",
  primaryCtaLink = "#",
  secondaryCtaLink = "#",
  showSecondaryButton = true,
  variant = "gradient",
  position = "static",
  className,
}: {
  title?: string
  description?: string
  primaryCta?: string
  secondaryCta?: string
  primaryCtaLink?: string
  secondaryCtaLink?: string
  showSecondaryButton?: boolean
  variant?: "gradient" | "solid" | "minimal" | "floating"
  position?: "static" | "sticky" | "fixed"
  className?: string
}) {
  // Base styles for different variants
  const variantStyles = {
    gradient: "relative overflow-hidden border-y border-white/10",
    solid: "bg-white/[0.03] backdrop-blur-sm border border-white/[0.05]",
    minimal: "bg-transparent border-t border-b border-white/[0.05]",
    floating:
      "bg-gradient-to-r from-violet-500/10 to-emerald-500/10 border border-white/[0.1] shadow-lg shadow-emerald-500/5 backdrop-blur-md",
  }

  // Position styles
  const positionStyles = {
    static: "",
    sticky: "sticky top-20 z-40",
    fixed: "fixed bottom-0 left-0 right-0 z-50",
  }

  // Determine if we should use the floating variant layout
  const isFloating = variant === "floating"

  return (
    <section
      className={cn(
        "py-24 md:py-32", // Increased padding for hero-like presence
        variantStyles[variant],
        positionStyles[position],
        // isFloating && "mx-4 md:mx-8 my-8 rounded-2xl", // Removed margins and radius as requested
        className,
      )}
    >
      {/* Background Image for Gradient Variant */}
      {variant === "gradient" && (
        <div className="absolute inset-0 z-0">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
            style={{ backgroundImage: "url('/images/banner_background.png')" }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/80 via-blue-600/80 to-purple-600/80 mix-blend-overlay opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400/30 to-fuchsia-600/30 mix-blend-color-dodge" />
          {/* Darkening overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}

      <div className={cn("container relative z-10 mx-auto px-4 md:px-6", isFloating && "max-w-5xl")}>
        <div
          className={cn(
            "flex flex-col md:flex-row md:items-center",
            isFloating ? "md:justify-between gap-8" : "justify-between items-center", // Changed to justify-between for hero layout
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn("mb-8 md:mb-0", isFloating ? "md:max-w-md" : "md:max-w-3xl md:text-left")}
          >
            <h2
              className={cn(
                "font-black text-white mb-4 uppercase leading-none", // Bold styling
                isFloating ? "text-5xl md:text-7xl" : "text-4xl md:text-6xl"
              )}
            >
              {title}
            </h2>
            <p className={cn("text-[#39e4ff] max-w-xl", isFloating ? "text-lg font-medium" : "text-lg md:text-xl font-medium")}>
              {description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(
              "flex gap-4 shrink-0", // Prevent shrinking
              isFloating ? "flex-col sm:flex-col items-end" : "flex-col w-full md:w-auto", // Vertical stack on desktop for hero variant
              !isFloating && "md:ml-8", // Add spacing from text
            )}
          >
            <Button
              size="lg"
              className={cn(
                "bg-cyan-400 hover:bg-cyan-500 text-black font-bold border-0 rounded-full shadow-lg shadow-cyan-500/20 px-8 h-14 text-lg", // Custom styling for primary button
              )}
              asChild
            >
              <a href={primaryCtaLink}>
                <span className="">{primaryCta}</span>
              </a>
            </Button>

            {showSecondaryButton && (
              <Button
                size="lg"
                className={cn(
                  "bg-cyan-400/90 hover:bg-cyan-500/90 text-black font-bold border-0 rounded-full backdrop-blur-sm px-8 h-14 text-lg", // Matching style for secondary
                )}
                asChild
              >
                <a href={secondaryCtaLink}>
                  <span>{secondaryCta}</span>
                </a>
              </Button>
            )}
          </motion.div>
        </div>
      </div>

      {/* Background Image for Floating Variant */}
      {isFloating && (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 mix-blend-luminosity"
            style={{ backgroundImage: "url('/images/banner_background_lunch.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/70 via-blue-600/70 to-fuchsia-600/70 mix-blend-overlay" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}
    </section>
  )
}
