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
        "py-12 md:py-16", // Optimized padding
        variantStyles[variant],
        positionStyles[position],
        className,
      )}
    >
      {/* Background Image for Gradient Variant */}
      {variant === "gradient" && (
        <div className="absolute inset-0 z-0">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/banner_background.png')" }}
          />
          {/* Darkening overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/05" />
        </div>
      )}

      <div className={cn("container relative z-10 mx-auto px-4 md:px-6", isFloating && "max-w-6xl")}>
        <div
          className={cn(
            "flex flex-col md:flex-row md:items-center justify-between gap-8",
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn("w-full md:max-w-3xl text-left")}
          >
            <h2
              className={cn(
                "font-black text-white mb-4 uppercase leading-none",
                isFloating ? "text-4xl md:text-6xl" : "text-4xl md:text-6xl"
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
              "flex flex-col gap-4 w-full md:w-auto shrink-0 md:min-w-[200px]",
            )}
          >
            <Button
              size="lg"
              className={cn(
                "bg-cyan-400 hover:bg-cyan-500 text-black font-bold border-0 rounded-full shadow-lg shadow-cyan-500/20 px-8 h-14 text-lg w-full md:w-auto",
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
                  "bg-cyan-400/90 hover:bg-cyan-500/90 text-black font-bold border-0 rounded-full backdrop-blur-sm px-8 h-14 text-lg w-full md:w-auto",
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
