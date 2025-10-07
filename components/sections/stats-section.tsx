"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import { BarChart3, Users, Globe, Award, Building, Trophy } from "lucide-react"

interface Stat {
  value: number
  label: string
  prefix?: string
  suffix?: string
  icon?: React.ReactNode
  description?: string
}

export function StatsSection({
  title = "The Esports Ecosystem",
  subtitle = "Key Metrics",
  description = "Escout connects the entire esports ecosystem with powerful tools and data.",
  stats = [
    {
      value: 3300,
      label: "Gamers Worldwide",
      suffix: "M",
      icon: <Globe className="h-6 w-6" />,
      description: "Total addressable market",
    },
    {
      value: 640,
      label: "Esports Fans",
      suffix: "M",
      icon: <Trophy className="h-6 w-6" />,
      description: "Active & occasional esports fans",
    },
    {
      value: 200,
      label: "Aspiring Pro Players",
      suffix: "M",
      icon: <Users className="h-6 w-6" />,
      description: "Players wanting to go pro",
    },
    {
      value: 50,
      label: "Professional Teams",
      suffix: "K",
      icon: <Building className="h-6 w-6" />,
      description: "Teams looking for talent",
    },
    {
      value: 15,
      label: "Professional Players",
      suffix: "K",
      icon: <Award className="h-6 w-6" />,
      description: "Current pro players",
    },
    {
      value: 100,
      label: "Tournament Organizers",
      suffix: "+",
      icon: <BarChart3 className="h-6 w-6" />,
      description: "Organizations running competitions",
    },
  ],
  columns = 3,
  variant = "default",
  animationDuration = 2000,
}: {
  title?: string
  subtitle?: string
  description?: string
  stats?: Stat[]
  columns?: 2 | 3 | 4
  variant?: "default" | "cards" | "minimal"
  animationDuration?: number
}) {
  return (
    <section className="py-24 bg-white dark:bg-[#030303]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
              {subtitle}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900 dark:text-white">{title}</h3>
            <p className="text-neutral-600 dark:text-white/40 text-lg">{description}</p>
          </motion.div>
        </div>

        <div
          className={cn(
            "grid gap-8",
            columns === 2 && "grid-cols-1 md:grid-cols-2",
            columns === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
            columns === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
          )}
        >
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} variant={variant} animationDuration={animationDuration} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatItem({
  stat,
  index,
  variant,
  animationDuration,
}: {
  stat: Stat
  index: number
  variant: string
  animationDuration: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const hasStartedCounting = useRef(false)

  useEffect(() => {
    if (isInView && !hasStartedCounting.current) {
      hasStartedCounting.current = true

      let startTimestamp: number | null = null
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / animationDuration, 1)
        setCount(Math.floor(progress * stat.value))

        if (progress < 1) {
          window.requestAnimationFrame(step)
        } else {
          setCount(stat.value)
        }
      }

      window.requestAnimationFrame(step)
    }
  }, [isInView, stat.value, animationDuration])

  // Format the number with commas
  const formattedValue = count.toLocaleString()

  if (variant === "cards") {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-neutral-200 dark:border-white/[0.05] rounded-xl p-6 hover:bg-neutral-50 dark:hover:bg-white/[0.05] transition-all duration-300 shadow-sm dark:shadow-none"
      >
        <div className="flex items-start">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-100 to-emerald-100 dark:from-violet-500/20 dark:to-emerald-500/20 flex items-center justify-center mr-4 flex-shrink-0">
            <div className="text-emerald-600 dark:text-emerald-400">{stat.icon}</div>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-neutral-900 dark:text-white mb-1">
              {stat.prefix}
              {formattedValue}
              {stat.suffix}
            </h4>
            <p className="text-lg font-medium text-neutral-800 dark:text-white/80 mb-2">{stat.label}</p>
            {stat.description && <p className="text-neutral-600 dark:text-white/40 text-sm">{stat.description}</p>}
          </div>
        </div>
      </motion.div>
    )
  }

  if (variant === "minimal") {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-violet-100 to-emerald-100 dark:from-violet-500/20 dark:to-emerald-500/20 mb-4">
          <div className="text-emerald-600 dark:text-emerald-400">{stat.icon}</div>
        </div>
        <h4 className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">
          {stat.prefix}
          {formattedValue}
          {stat.suffix}
        </h4>
        <p className="text-lg font-medium text-neutral-800 dark:text-white/80 mb-1">{stat.label}</p>
        {stat.description && <p className="text-neutral-600 dark:text-white/40 text-sm">{stat.description}</p>}
      </motion.div>
    )
  }

  // Default variant
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <div aria-hidden="true" className="absolute -top-4 -left-4 w-12 h-12 rounded-lg bg-gradient-to-br from-violet-100 to-emerald-100 dark:from-violet-500/20 dark:to-emerald-500/20 flex items-center justify-center z-10 pointer-events-none">
        <div className="text-emerald-600 dark:text-emerald-400">{stat.icon}</div>
      </div>
      <div className="relative z-0 bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-neutral-200 dark:border-white/[0.05] rounded-xl p-6 pl-10 hover:bg-neutral-50 dark:hover:bg-white/[0.05] transition-all duration-300">
        <div className="pt-2">
          <h4 className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">
            {stat.prefix}
            {formattedValue}
            {stat.suffix}
          </h4>
          <div className="h-px w-16 bg-gradient-to-r from-violet-300 to-emerald-300 dark:from-violet-500/40 dark:to-emerald-500/40 mb-3" />
          <p className="text-lg font-medium text-neutral-800 dark:text-white/80 mb-1">{stat.label}</p>
          {stat.description && <p className="text-neutral-600 dark:text-white/40 text-sm">{stat.description}</p>}
        </div>
      </div>
    </motion.div>
  )
}
