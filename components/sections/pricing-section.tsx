"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useState } from "react"

interface PricingTier {
  name: string
  price: {
    monthly: string
    yearly: string
  }
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
}

export function PricingSection({
  title = "Simple, Transparent Pricing",
  subtitle = "Choose the perfect plan",
  description = "Plans designed for every stage of your esports journey.",
  tiers = [
    {
      name: "Free",
      price: {
        monthly: "free",
        yearly: "free",
      },
      description: "Perfect for players looking to get noticed.",
      features: ["Basic profile", "ESV score", "Performance tracking", "Limited team discovery", "Community access"],
      cta: "Get Started",
    },
    {
      name: "Professional",
      price: {
        monthly: "€16.99",
        yearly: "€169.99",
      },
      description: "For serious players and professionals.",
      features: [
        "Advanced profile",
        "Detailed ESV analytics",
        "Full team discovery",
        "Direct messaging",
        "Transfer assistance",
        "Career development tools",
        "Priority support",
      ],
      cta: "Get Started",
      highlighted: true,
    },
  ],
}: {
  title?: string
  subtitle?: string
  description?: string
  tiers?: PricingTier[]
}) {
  const [annual, setAnnual] = useState(true)

  return (
    <section className="py-24 bg-neutral-100 dark:bg-[#050505]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3">{subtitle}</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900 dark:text-white">{title}</h3>
            <p className="text-neutral-600 dark:text-white/40 text-lg mb-8">{description}</p>

            <div className="inline-flex items-center p-1 bg-neutral-200/50 dark:bg-white/[0.03] rounded-full border border-neutral-300 dark:border-white/[0.05]">
              <button
                onClick={() => setAnnual(false)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  !annual
                    ? "bg-gradient-to-r from-violet-500 to-emerald-500 text-white"
                    : "text-neutral-600 dark:text-white/40",
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  annual
                    ? "bg-gradient-to-r from-violet-500 to-emerald-500 text-white"
                    : "text-neutral-600 dark:text-white/40",
                )}
              >
                Annual (Save 15%)
              </button>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "rounded-2xl p-8 backdrop-blur-sm transition-all duration-300",
                tier.highlighted
                  ? "bg-gradient-to-b from-white to-neutral-50 dark:from-white/[0.07] dark:to-white/[0.03] border-2 border-violet-200 dark:border-white/[0.1] shadow-lg"
                  : "bg-white dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.05] shadow-sm dark:shadow-none",
              )}
            >
              <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">{tier.name}</h4>
              <div className="mb-4">
                <span className="text-4xl font-bold text-neutral-900 dark:text-white">
                  {annual ? tier.price.yearly : tier.price.monthly}
                </span>
                <span className="text-neutral-500 dark:text-white/40 ml-1">
                  {tier.price.monthly === "free" ? "" : "/month"}
                </span>
              </div>
              <p className="text-neutral-600 dark:text-white/40 mb-6">{tier.description}</p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-emerald-500 dark:text-emerald-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700 dark:text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={cn(
                  "w-full",
                  tier.highlighted
                    ? "bg-gradient-to-r from-violet-500 to-emerald-500 hover:from-violet-600 hover:to-emerald-600 text-white border-0"
                    : "bg-neutral-100 hover:bg-neutral-200 text-neutral-800 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] dark:text-white dark:border-white/[0.1]",
                )}
                asChild
              >
                <a href="https://hh-escout.vercel.app/sign-in">
                  <span className={cn(tier.highlighted && "text-white-fixed")}>{tier.cta}</span>
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
