"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Logo {
  name: string
  url: string
  image: string
}

export function LogoShowcase({
  title = "Trusted by Esports Leaders",
  subtitle = "Our Partners",
  description = "Join the growing number of teams, players, and organizations using Escout to revolutionize esports scouting.",
  logos = [
    {
      name: "Esports World Cup",
      url: "#",
      image: "/placeholder.svg?height=60&width=120",
    },
    {
      name: "FACEIT",
      url: "#",
      image: "/placeholder.svg?height=60&width=120",
    },
    {
      name: "ESL",
      url: "#",
      image: "/placeholder.svg?height=60&width=120",
    },
    {
      name: "GRID",
      url: "#",
      image: "/placeholder.svg?height=60&width=120",
    },
    {
      name: "Blast",
      url: "#",
      image: "/placeholder.svg?height=60&width=120",
    },
    {
      name: "PGL",
      url: "#",
      image: "/placeholder.svg?height=60&width=120",
    },
    {
      name: "Starladder",
      url: "#",
      image: "/placeholder.svg?height=60&width=120",
    },
    {
      name: "Hero Esports",
      url: "#",
      image: "/placeholder.svg?height=60&width=120",
    },
  ],
  variant = "grid",
  grayscale = true,
  autoplay = true,
  autoplaySpeed = 3000,
  pauseOnHover = true,
}: {
  title?: string
  subtitle?: string
  description?: string
  logos?: Logo[]
  variant?: "grid" | "carousel" | "marquee"
  grayscale?: boolean
  autoplay?: boolean
  autoplaySpeed?: number
  pauseOnHover?: boolean
}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [containerWidth, setContainerWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const totalSlides = Math.ceil(logos.length / 4) // 4 logos per slide on desktop

  // Calculate container width for marquee animation
  useEffect(() => {
    if (variant === "marquee" && containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth)
    }
  }, [variant, logos])

  // Autoplay functionality for carousel
  useEffect(() => {
    if (variant !== "carousel" || !autoplay || isPaused) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
    }, autoplaySpeed)

    return () => clearInterval(interval)
  }, [variant, autoplay, autoplaySpeed, isPaused, totalSlides])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  // Render grid layout
  const renderGrid = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {logos.map((logo, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="flex items-center justify-center"
        >
          <a
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-neutral-200 dark:border-white/[0.05] rounded-xl p-6",
              "flex items-center justify-center h-24 w-full",
              "transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-white/[0.06] hover:border-neutral-300 dark:hover:border-white/[0.1]",
              "hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-emerald-500/5",
            )}
          >
            <Image
              src={logo.image || "/placeholder.svg"}
              alt={logo.name}
              width={120}
              height={60}
              className={cn(
                "max-h-12 w-auto object-contain transition-all duration-300",
                grayscale && "grayscale opacity-60 hover:grayscale-0 hover:opacity-100",
              )}
            />
          </a>
        </motion.div>
      ))}
    </div>
  )

  // Render carousel layout
  const renderCarousel = () => (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="min-w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {logos
                  .slice(slideIndex * 4, slideIndex * 4 + 4)
                  .filter(Boolean)
                  .map((logo, logoIndex) => (
                    <div
                      key={logoIndex}
                      className={cn(
                        "bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-neutral-200 dark:border-white/[0.05] rounded-xl p-6",
                        "flex items-center justify-center h-24",
                        "transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-white/[0.06] hover:border-neutral-300 dark:hover:border-white/[0.1]",
                      )}
                      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
                      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
                    >
                      <Image
                        src={logo.image || "/placeholder.svg"}
                        alt={logo.name}
                        width={120}
                        height={60}
                        className={cn(
                          "max-h-12 w-auto object-contain transition-all duration-300",
                          grayscale && "grayscale opacity-60 hover:grayscale-0 hover:opacity-100",
                        )}
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-white/[0.05] border border-neutral-300 dark:border-white/[0.1] flex items-center justify-center text-neutral-600 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-white/[0.05] border border-neutral-300 dark:border-white/[0.1] flex items-center justify-center text-neutral-600 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              currentSlide === index
                ? "bg-gradient-to-r from-violet-500 to-emerald-500 w-6"
                : "bg-neutral-300 dark:bg-white/20 hover:bg-neutral-400 dark:hover:bg-white/40",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )

  // Render marquee layout
  const renderMarquee = () => (
    <div className="overflow-hidden">
      <div
        ref={containerRef}
        className="relative"
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <motion.div
          className="flex space-x-8"
          animate={isPaused ? { x: 0 } : { x: -containerWidth / 2 }}
          transition={{
            x: {
              duration: containerWidth / 100,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "linear",
            },
          }}
        >
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={index}
              className={cn(
                "bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-neutral-200 dark:border-white/[0.05] rounded-xl p-6",
                "flex items-center justify-center h-24 min-w-[200px]",
                "transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-white/[0.06] hover:border-neutral-300 dark:hover:border-white/[0.1]",
              )}
            >
              <Image
                src={logo.image || "/placeholder.svg"}
                alt={logo.name}
                width={120}
                height={60}
                className={cn(
                  "max-h-12 w-auto object-contain transition-all duration-300",
                  grayscale && "grayscale opacity-60 hover:grayscale-0 hover:opacity-100",
                )}
              />
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`duplicate-${index}`}
              className={cn(
                "bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-neutral-200 dark:border-white/[0.05] rounded-xl p-6",
                "flex items-center justify-center h-24 min-w-[200px]",
                "transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-white/[0.06] hover:border-neutral-300 dark:hover:border-white/[0.1]",
              )}
            >
              <Image
                src={logo.image || "/placeholder.svg"}
                alt={logo.name}
                width={120}
                height={60}
                className={cn(
                  "max-h-12 w-auto object-contain transition-all duration-300",
                  grayscale && "grayscale opacity-60 hover:grayscale-0 hover:opacity-100",
                )}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )

  return (
    <section className="py-20 bg-neutral-50 dark:bg-[#030303]">
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
            <p className="text-neutral-600 dark:text-white/40 text-lg">{description}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {variant === "grid" && renderGrid()}
          {variant === "carousel" && renderCarousel()}
          {variant === "marquee" && renderMarquee()}
        </motion.div>
      </div>
    </section>
  )
}
