"use client"

import type React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface Feature {
  title: string
  description: string
  image: string
}

export function FeaturesSection({
  title = "Powerful Scouting Tools",
  subtitle = "Features",
  description = "Our platform provides all the tools needed to streamline player discovery, transfers, and career development.",
  features = [],
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
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-sm uppercase tracking-widest text-[#39e4ff] mb-3">
              DISCOVER TOP TALENT
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase mb-6 leading-[0.9] text-white">{title}</h3>
            <p className="text-neutral-400 text-lg">{description}</p>
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
              className="relative group overflow-hidden rounded-2xl h-[280px]"
            >
              {/* Background Image */}
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-center">
                <h4 className="text-4xl font-black mb-3 text-white uppercase drop-shadow-md">
                  {feature.title}
                </h4>
                <p className="text-neutral-200 text-sm leading-relaxed drop-shadow-sm font-medium max-w-[90%]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
