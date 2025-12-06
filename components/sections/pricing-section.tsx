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
      name: "Player Basic",
      price: {
        monthly: "$9.99",
        yearly: "$7.99",
      },
      description: "Perfect for amateur players looking to get discovered.",
      features: [
        "Verified player profile",
        "Basic ESV score analysis",
        "Connect up to 3 game accounts",
        "Upload 1 highlight reel",
        "Community forum access",
      ],
      cta: "Start Free Trial",
    },
    {
      name: "Player Pro",
      price: {
        monthly: "$19.99",
        yearly: "$16.99",
      },
      description: "For serious players ready to take the next step.",
      features: [
        "Everything in Basic",
        "Advanced ESV score insights",
        "Connect unlimited game accounts",
        "Upload unlimited highlight reels",
        "Priority in search results",
        "Performance trend analysis",
        "Direct messaging with teams",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Free",
      price: {
        monthly: "free",
        yearly: "free",
      },
      description: "Start for free and build your profile.",
      features: ["Create player profile", "Basic ESV score", "Connect 1 game account", "Access community"],
      cta: "Get Started",
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
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-widest text-[#39e4ff] mb-3">{subtitle}</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-6 text-white uppercase">{title}</h3>
            <p className="text-white/60 text-lg mb-8">{description}</p>

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col h-full"
            >
              <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-80"
                style={{
                  backgroundImage:
                    tier.name.toLowerCase().includes("free")
                      ? "url('/images/pricing/pl_xxx_box.jpg')"
                      : tier.name.toLowerCase().includes("basic")
                      ? "url('/images/pricing/pl_basic_box.jpg')"
                      : "url('/images/pricing/pl_pro_box.jpg')",
                }}
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-cyan-500/20 via-fuchsia-500/20 to-transparent" />

              <div className="relative z-20 p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className={cn(
                      "text-4xl font-black uppercase",
                      tier.name.toLowerCase().includes("pro") ? "text-[#39e4ff]" : tier.name.toLowerCase().includes("basic") ? "text-[#d946ef]" : "text-white"
                    )}>{tier.name}</h4>
                    <p className="text-white/70 mt-2 text-sm max-w-[200px]">{tier.description}</p>
                  </div>
                  <div className="self-start">
                  <img
                    src={tier.name.toLowerCase().includes("free")
                      ? "/images/pricing/pl_xxx_icon.png"
                      : tier.name.toLowerCase().includes("basic")
                      ? "/images/pricing/pl_basic_icon.png"
                      : "/images/pricing/pl_pro_icon.png"}
                    alt="Plan icon"
                    className="w-16 h-16 object-contain"
                  />
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-2">
                      <div className={cn(
                        "h-6 w-6 rounded-full border flex items-center justify-center mr-3 shrink-0",
                        tier.name.toLowerCase().includes("pro") 
                          ? "bg-cyan-500/20 border-cyan-400/40" 
                          : tier.name.toLowerCase().includes("basic")
                            ? "bg-fuchsia-500/20 border-fuchsia-400/40"
                            : "bg-white/10 border-white/20"
                      )}>
                        <Check className={cn(
                          "h-4 w-4",
                          tier.name.toLowerCase().includes("pro") 
                            ? "text-cyan-300" 
                            : tier.name.toLowerCase().includes("basic")
                              ? "text-fuchsia-300"
                              : "text-white"
                        )} />
                      </div>
                      <span className="text-white/90 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="flex items-center justify-between bg-black/30 border border-white/10 rounded-xl px-5 py-4 mb-4">
                    <div className="text-3xl font-extrabold text-cyan-300">
                      {annual ? tier.price.yearly : tier.price.monthly}
                      <span className="text-white/60 text-base ml-1">{tier.price.monthly === "free" ? "" : "/month"}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-bold rounded-xl border-0" asChild>
                    <a href="https://hh-escout.vercel.app/sign-in">
                      <span>{tier.cta}</span>
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
