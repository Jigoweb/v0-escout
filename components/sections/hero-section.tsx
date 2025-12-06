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
      {/* Background */}
      <Image
        src="/images/hero-background.png"
        alt="Hero Background"
        fill
        priority
        sizes="100vw"
        quality={85}
        style={{ objectFit: "cover" }}
      />

      {/* Characters - Left */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-0 left-[-20%] sm:left-[-10%] md:left-0 z-10 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] w-[60vw] sm:w-[45vw] md:w-[35vw] lg:w-[25vw] xl:w-[30vw] 2xl:w-[35vw] pointer-events-none"
      >
        <Image
          src="/images/hero/per1.png"
          alt="Esports Character Left"
          fill
          style={{ objectFit: "contain", objectPosition: "bottom left" }}
          quality={90}
        />
      </motion.div>

      {/* Characters - Right */}
      <motion.div 
        initial={{ opacity: 1, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-0 right-[-25%] sm:right-[-15%] md:right-0 z-10 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] xl:w-[40vw] 2xl:w-[45vw] pointer-events-none"
      >
        {/* Overlapping characters on the right */}
        <div className="relative w-full h-full">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} className="absolute inset-0">
            <Image
              src="/images/hero/per3.png"
              alt="Esports Character Right Back"
              fill
              style={{ objectFit: "contain", objectPosition: "bottom right" }}
              className="translate-x-[-25%]"
              quality={90}
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} className="absolute inset-0">
            <Image
              src="/images/hero/per2.png"
              alt="Esports Character Right Front"
              fill
              style={{ objectFit: "contain", objectPosition: "bottom right" }}
              quality={90}
            />
          </motion.div>
        </div>
      </motion.div>

      <div className="relative z-20 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center hero-white-fixed">
          
          {/* Replaced Text Title with Image Title */}
          <motion.div 
            custom={1} 
            variants={fadeUpVariants} 
            initial="hidden" 
            animate="visible"
            className="flex justify-center mb-8 md:mb-12"
          >
            <div className="w-[60svw] sm:w-[50svw] md:w-[40svw] lg:w-[30vw] max-w-[800px]">
              <Image 
                src="/images/hero/scritta_unita.png"
                alt="Discover the Next Esports Star"
                width={0}
                height={0}
                sizes="100svw"
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </div>
          </motion.div>

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4 text-white/90 drop-shadow-md">
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
              className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold border-0 rounded-full px-8"
              asChild
            >
              <a href="https://hh-escout.vercel.app/sign-in">
                {primaryCta}
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 rounded-full px-8"
              asChild
            >
              <a href="https://hh-escout.vercel.app/sign-in">{secondaryCta}</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
