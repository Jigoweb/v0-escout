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
    <section className="relative min-h-[85vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden py-20 sm:py-24">
      <Image
        src="/images/hero-background.jpg"
        alt="Hero Background"
        fill
        priority
        sizes="100vw"
        quality={85}
        style={{ objectFit: "cover" }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center hero-white-fixed">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100/80 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.08] mb-8 md:mb-12"
          >
            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-violet-500 to-emerald-500" />
            <span className="text-sm tracking-wide force-black-light">{badge}</span>
          </motion.div>

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-balance text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="text-white">
                {title1}
              </span>
              <br />
              <span className="font-blackhawk font-normal text-white text-5xl sm:text-7xl md:text-8xl tracking-wider">
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
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
              asChild
            >
              <a href="https://hh-escout.vercel.app/sign-in">
                <span className="text-white-fixed">{primaryCta}</span>
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-neutral-300 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/5"
              asChild
            >
              <a href="https://hh-escout.vercel.app/sign-in" className="force-black-light">{secondaryCta}</a>
            </Button>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 md:mt-16 flex justify-center"
          >
            <div className="relative w-[320px] h-[90px] sm:w-[420px] sm:h-[120px] md:w-[480px] md:h-[135px] lg:w-[560px] lg:h-[160px]">
              <Image
                src="/images/hero-characters.png"
                alt="Esports characters illustration"
                fill
                priority
                style={{ objectFit: "contain" }}
                quality={90}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 via-transparent to-neutral-50/80 dark:from-[#030303] dark:via-transparent dark:to-[#030303]/80 pointer-events-none" /> */}
    </section>
  )
}
