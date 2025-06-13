"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image";

export function HeroSection({
  badge,
  title1,
  title2,
  description,
  primaryCta,
  secondaryCta,
}: {
  badge?: string
  title1?: string
  title2?: string
  description?: string
  primaryCta?: string
  secondaryCta?: string
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-background.jpg"
        alt="Hero Background"
        fill
        style={{ objectFit: "cover" }}
        quality={100}
        className="absolute inset-0 z-0"
      />
      {/* Removed gradient div */}

      {/* Removed FloatingShape instances */}

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100/80 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.08] mb-8 md:mb-12"
          >
            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-violet-500 to-emerald-500" />
            <span className="text-sm text-neutral-600 dark:text-white/60 tracking-wide">{badge}</span>
          </motion.div>

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-white dark:to-white/80">
                {title1}
              </span>
              <br />
              <span className="font-blackhawk font-normal text-neutral-900 dark:text-white text-5xl sm:text-7xl md:text-8xl tracking-wider">
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              {description}
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-500 to-emerald-500 hover:from-violet-600 hover:to-emerald-600 text-white border-0"
            >
              {primaryCta}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-neutral-300 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/5"
            >
              {secondaryCta}
            </Button>
          </motion.div>

          <motion.div
            custom={4} // New animation item
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 md:mt-16 flex justify-center"
          >
            <Image
              src="/images/hero-characters.png"
              alt="Hero Characters"
              width={480} // Adjust width as needed, this is a placeholder
              height={135} // Adjust height as needed, this is a placeholder
              quality={90}
            />
          </motion.div>
        </div>
      </div>

      {/* <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 via-transparent to-neutral-50/80 dark:from-[#030303] dark:via-transparent dark:to-[#030303]/80 pointer-events-none" /> */}
    </section>
  )
}
