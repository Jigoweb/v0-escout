"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface Stat {
  value: number
  label: string
  prefix?: string
  suffix?: string
  description?: string
  image?: string
}

export function StatsSection({
  title = "The Esports Ecosystem",
  subtitle = "Key Metrics",
  description = "Escout connects the entire esports ecosystem with powerful tools and data.",
  stats = [],
  columns = 3,
  variant = "cards",
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
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-widest text-cyan-400 mb-3">
              {subtitle}
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase mb-6 leading-[0.9] text-white">{title}</h3>
            <p className="text-neutral-400 text-lg">{description}</p>
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

  // Format the number with dots as thousands separator
  const formattedValue = count.toLocaleString('it-IT')

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-2xl h-[200px] group"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {stat.image && (
          <Image
            src={stat.image}
            alt={stat.label}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center p-8">
        <h4 className="text-6xl font-bold text-white mb-2">
          {stat.prefix}
          {formattedValue}
          {stat.suffix}
        </h4>
        <p className="text-xl font-bold text-white mb-1">{stat.label}</p>
        {stat.description && <p className="text-white/80 text-sm font-light">{stat.description}</p>}
      </div>
    </motion.div>
  )
}
