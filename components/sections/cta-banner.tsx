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
    gradient: "bg-gradient-to-r from-violet-500/10 to-emerald-500/10 border border-white/[0.05]",
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
        "py-12",
        variantStyles[variant],
        positionStyles[position],
        isFloating && "mx-4 md:mx-8 my-8 rounded-2xl",
        className,
      )}
    >
      <div className={cn("container mx-auto px-4 md:px-6", isFloating && "max-w-5xl")}>
        <div
          className={cn(
            "flex flex-col md:flex-row md:items-center",
            isFloating ? "md:justify-between gap-8" : "md:justify-center text-left",
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn("mb-6 md:mb-0", isFloating ? "md:max-w-md" : "md:max-w-2xl md:text-left")}
          >
            <h2
              className={cn("font-bold text-white mb-3", isFloating ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl")}
            >
              {title}
            </h2>
            <p className={cn("text-white/60", isFloating ? "text-base" : "text-lg")}>{description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(
              "flex gap-4",
              isFloating ? "flex-col sm:flex-row" : "flex-col sm:flex-row",
              !isFloating && "justify-center",
            )}
          >
            <Button
              size={isFloating ? "default" : "lg"}
              className={cn(
                "bg-gradient-to-r from-violet-500 to-emerald-500 hover:from-violet-600 hover:to-emerald-600 text-white border-0",
                isFloating ? "" : "px-8",
              )}
              asChild
            >
              <a href={primaryCtaLink}>
                <span className="text-white-fixed">{primaryCta}</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            {showSecondaryButton && (
              <Button
                size={isFloating ? "default" : "lg"}
                variant="outline"
                className={cn(
                  "border-white/10 text-white/70 hover:text-white hover:bg-white/5",
                  isFloating ? "" : "px-8",
                )}
                asChild
              >
                <a href={secondaryCtaLink}>
                  <span>{secondaryCta}</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements for gradient variant */}
      {variant === "gradient" && !isFloating && (
        <>
          <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
          <div className="absolute bottom-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
        </>
      )}

      {/* Decorative elements for floating variant */}
      {isFloating && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>
      )}
    </section>
  )
}
