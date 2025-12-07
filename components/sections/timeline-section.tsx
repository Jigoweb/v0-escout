"use client"

import type React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface TimelineItem {
  number: string
  title: string
  description: string
  iconImage: string
  backgroundImage: string
  gradient: string
  numberGradient: string
}

export function TimelineSection({
  title = "How Escout Works",
  subtitle = "The Process",
  description = "Our streamlined approach connects talented players with professional opportunities in three simple steps: create your profile, showcase your skills, and get discovered by top teams.",
  items = [],
}: {
  title?: string
  subtitle?: string
  description?: string
  items?: TimelineItem[]
  layout?: string
  type?: string
}) {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-widest text-violet-400 mb-3">{subtitle}</h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase mb-6 leading-[0.9] text-white">{title}</h3>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">{description}</p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-center"
            >
              {/* Left Icon (Outside Card) */}
              <div className="hidden md:flex flex-shrink-0 w-24 h-24 mr-8 items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={item.iconImage}
                    alt="Step Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Card */}
              <div className="relative flex-1 overflow-hidden rounded-2xl min-h-[140px] h-auto md:min-h-[160px] group">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.backgroundImage}
                    alt={`Step ${item.number} background`}
                    fill
                    className="object-cover"
                  />
                  {/* Gradient Overlay */}
                  {item.gradient && (
                    <div className={`absolute inset-0 opacity-90 ${item.gradient}`} />
                  )}
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex items-center px-4 py-4 md:px-12 md:py-0 min-h-[140px] md:min-h-[160px]">
                  
                  {/* Step Number Badge */}
                  <div className="flex items-center mr-4 md:mr-10 flex-shrink-0">
                    <span className="text-2xl md:text-5xl font-bold text-white mr-2 md:mr-4 uppercase font-bebas tracking-wide">STEP</span>
                    <div className="w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center border border-white/20">
                      <div className="w-9 h-9 md:w-16 md:h-16 rounded-full bg-cyan-400/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl md:text-3xl font-bold text-white">{item.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 pl-4 md:pl-10 py-2 border-l border-white/20 min-w-0">
                    <h4 className="text-sm md:text-xl font-medium text-white leading-snug drop-shadow-md font-sans">
                      {item.description}
                    </h4>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
