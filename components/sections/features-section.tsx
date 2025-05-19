"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Award, BarChart, Database, Globe, Users, Zap } from "lucide-react"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

export function FeaturesSection({
  title = "Powerful Scouting Tools",
  subtitle = "Features",
  description = "Our platform provides all the tools needed to streamline player discovery, transfers, and career development.",
  features = [
    {
      icon: <Award className="h-6 w-6 z-1" />,
      title: "ESV Score",
      description: "Our proprietary Escout Value score provides fair and transparent player valuation.",
    },
    {
      icon: <BarChart className="h-6 w-6 z-1" />,
      title: "Data-Driven Scouting",
      description: "Discover talent based on performance metrics, not just opinions.",
    },
    {
      icon: <Database className="h-6 w-6 z-1" />,
      title: "Transfer Regulation",
      description: "Streamlined, transparent process for player transfers and contracts.",
    },
    {
      icon: <Zap className="h-6 w-6 z-1" />,
      title: "Unified Platform",
      description: "One place for player profiles, team scouting, and transfer management.",
    },
    {
      icon: <Users className="h-6 w-6 z-1" />,
      title: "Career Development",
      description: "Clear path to pro with personalized improvement recommendations.",
    },
    {
      icon: <Globe className="h-6 w-6 z-1" />,
      title: "Tournament Integration",
      description: "Seamless connection with tournament organizers for roster submissions.",
    },
  ],
}: {
  title?: string
  subtitle?: string
  description?: string
  features?: Feature[]
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <section className="py-24 bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-[#030303] dark:to-[#050505]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-sm uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
              {subtitle}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900 dark:text-white">{title}</h3>
            <p className="text-neutral-600 dark:text-white/40 text-lg">{description}</p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-neutral-200 dark:border-white/[0.05] rounded-xl p-6 hover:bg-neutral-50 dark:hover:bg-white/[0.05] transition-all duration-300 shadow-sm dark:shadow-none"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-100 to-emerald-100 dark:from-violet-500/20 dark:to-emerald-500/20 flex items-center justify-center mb-4">
                <div className="text-emerald-600 dark:text-emerald-400">{feature.icon}</div>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">{feature.title}</h4>
              <p className="text-neutral-600 dark:text-white/40">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
