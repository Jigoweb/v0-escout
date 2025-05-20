"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { Calendar, CheckCircle, Clock, Flag, Star, Zap, Info } from "lucide-react"

interface TimelineItem {
  date: string
  title: string
  description: string
  icon?: React.ReactNode
  status?: "completed" | "current" | "upcoming"
  highlight?: boolean
  details?: string
}

export function TimelineSection({
  title = "Escout Roadmap",
  subtitle = "Development Plan",
  description = "Our journey to revolutionize esports scouting and player transfers.",
  items = [
    {
      date: "Q3 2023",
      title: "MVP (Closed Beta)",
      description: "ESV, Basic search functions, Player and team profiles, Home feed",
      icon: <Flag className="h-5 w-5" />,
      status: "completed",
    },
    {
      date: "Q4 2023",
      title: "Test (Open Beta)",
      description: "Team reputation, analytics tools, Enhanced filters",
      icon: <Star className="h-5 w-5" />,
      status: "completed",
    },
    {
      date: "Q1 2024",
      title: "Launch",
      description: "Blockchain-based contract verification, Player transfer market, Interactive leaderboard",
      icon: <CheckCircle className="h-5 w-5" />,
      status: "current",
      highlight: true,
    },
    {
      date: "Q2 2024",
      title: "Scale",
      description: "Player career comparison tools, Additional game integrations",
      icon: <Zap className="h-5 w-5" />,
      status: "upcoming",
      highlight: true,
    },
    {
      date: "Q3 2024",
      title: "Tournament Integration",
      description: "Onboard tournament organizers & broadcasters",
      icon: <Calendar className="h-5 w-5" />,
      status: "upcoming",
    },
    {
      date: "Q4 2024",
      title: "Global Expansion",
      description: "Expand to additional regions and games",
      icon: <Clock className="h-5 w-5" />,
      status: "upcoming",
    },
  ],
  layout = "vertical",
  type = "roadmap",
  showConnectors = true,
  interactive = false,
}: {
  title?: string
  subtitle?: string
  description?: string
  items?: TimelineItem[]
  layout?: "vertical" | "horizontal"
  type?: "history" | "roadmap"
  showConnectors?: boolean
  interactive?: boolean
}) {
  const [activeItem, setActiveItem] = useState<number | null>(null)

  // Determine status colors based on type (history or roadmap) and interactive state
  const getStatusColors = (status: TimelineItem["status"], highlight = false, isActive = false) => {
    if (type === "history") {
      // For history, everything is in the past
      return {
        icon: highlight ? "text-emerald-400" : "text-white",
        bg: highlight
          ? isActive
            ? "from-violet-500/40 to-emerald-500/30"
            : "from-violet-500/20 to-emerald-500/20"
          : status === "current"
            ? isActive
              ? "from-violet-500/40 to-violet-500/20"
              : "from-violet-500/20 to-violet-500/10"
            : isActive
              ? "from-white/20 to-white/10"
              : "from-white/10 to-white/5",
        border: highlight
          ? isActive
            ? "border-emerald-500/40"
            : "border-emerald-500/20"
          : isActive
            ? "border-white/20"
            : "border-white/10",
        connector: highlight ? "bg-gradient-to-b from-emerald-500/50 to-violet-500/30" : "bg-white/10",
      }
    } else {
      // For roadmap, we differentiate between completed, current, and upcoming
      if (status === "completed") {
        return {
          icon: "text-emerald-400",
          bg: isActive ? "from-emerald-500/40 to-emerald-500/20" : "from-emerald-500/20 to-emerald-500/10",
          border: isActive ? "border-emerald-500/40" : "border-emerald-500/20",
          connector: "bg-gradient-to-b from-emerald-500/50 to-emerald-500/20",
        }
      } else if (status === "current") {
        return {
          icon: "text-violet-400",
          bg: isActive ? "from-violet-500/40 to-violet-500/20" : "from-violet-500/20 to-violet-500/10",
          border: isActive ? "border-violet-500/40" : "border-violet-500/20",
          connector: "bg-gradient-to-b from-violet-500/50 to-violet-500/20",
        }
      } else {
        return {
          icon: "text-white/60",
          bg: isActive ? "from-white/20 to-white/10" : "from-white/10 to-white/5",
          border: isActive ? "border-white/20" : "border-white/10",
          connector: "bg-white/10",
        }
      }
    }
  }

  // Reference for the timeline container
  const timelineRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-24 bg-[#030303]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-widest text-violet-400 mb-3">{subtitle}</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">{title}</h3>
            <p className="text-white/40 text-lg">{description}</p>
          </motion.div>
        </div>

        {layout === "vertical" ? (
          <div className="max-w-3xl mx-auto">
            <div className="relative" ref={timelineRef}>
              {/* Vertical connector line - static background */}
              {showConnectors && <div className="absolute left-[27px] top-0 bottom-0 w-px bg-white/5 ml-px" />}

              {/* Animated progress line */}
              {showConnectors && <AnimatedTimelineProgress containerRef={timelineRef} type={type} />}

              <div className="space-y-12">
                {items.map((item, index) => {
                  const isActive = interactive && activeItem === index
                  const colors = getStatusColors(item.status, item.highlight, isActive)

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative flex"
                      onMouseEnter={() => interactive && setActiveItem(index)}
                      onMouseLeave={() => interactive && setActiveItem(null)}
                    >
                      {/* Timeline node */}
                      <div className="relative z-10">
                        <motion.div
                          className={cn(
                            "w-14 h-14 rounded-full bg-gradient-to-br flex items-center justify-center",
                            `${colors.bg}`,
                            "border-2",
                            `${colors.border}`,
                            "transition-all duration-300",
                          )}
                          whileHover={interactive ? { scale: 1.1 } : {}}
                        >
                          <div className={cn(`${colors.icon}`)}>{item.icon}</div>
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="ml-6 pt-1 flex-1">
                        <div
                          className={cn(
                            "text-sm font-medium mb-1",
                            item.status === "current"
                              ? "text-violet-400"
                              : item.status === "completed"
                                ? "text-emerald-400"
                                : "text-white/60",
                          )}
                        >
                          {item.date}
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-2 flex items-center">
                          {item.title}
                          {interactive && item.details && <Info className="h-4 w-4 ml-2 text-white/40" />}
                        </h4>
                        <p className="text-white/60">{item.description}</p>

                        {/* Expanded details for interactive mode */}
                        {interactive && isActive && item.details && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10"
                          >
                            <p className="text-white/80 text-sm">{item.details}</p>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full overflow-x-auto pb-8">
            <div className="min-w-max">
              <div className="relative flex items-start space-x-8 px-4" ref={timelineRef}>
                {/* Horizontal connector line */}
                {showConnectors && <div className="absolute left-0 right-0 top-[27px] h-px bg-white/10" />}

                {/* Animated horizontal progress line */}
                {showConnectors && <AnimatedHorizontalProgress type={type} containerRef={timelineRef} />}

                {items.map((item, index) => {
                  const isActive = interactive && activeItem === index
                  const colors = getStatusColors(item.status, item.highlight, isActive)

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative flex flex-col items-center w-60"
                      onMouseEnter={() => interactive && setActiveItem(index)}
                      onMouseLeave={() => interactive && setActiveItem(null)}
                    >
                      {/* Timeline node */}
                      <div className="relative z-10">
                        <motion.div
                          className={cn(
                            "w-14 h-14 rounded-full bg-gradient-to-br flex items-center justify-center",
                            `${colors.bg}`,
                            "border-2",
                            `${colors.border}`,
                            "transition-all duration-300",
                          )}
                          whileHover={interactive ? { scale: 1.1 } : {}}
                        >
                          <div className={cn(`${colors.icon}`)}>{item.icon}</div>
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="mt-4 text-center">
                        <div
                          className={cn(
                            "text-sm font-medium mb-1",
                            item.status === "current"
                              ? "text-violet-400"
                              : item.status === "completed"
                                ? "text-emerald-400"
                                : "text-white/60",
                          )}
                        >
                          {item.date}
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-2 flex items-center justify-center">
                          {item.title}
                          {interactive && item.details && <Info className="h-4 w-4 ml-2 text-white/40" />}
                        </h4>
                        <p className="text-white/60 text-sm">{item.description}</p>

                        {/* Expanded details for interactive mode */}
                        {interactive && isActive && item.details && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10"
                          >
                            <p className="text-white/80 text-sm">{item.details}</p>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

// Component for the animated vertical progress line
function AnimatedTimelineProgress({
  containerRef,
  type,
}: {
  containerRef: React.RefObject<HTMLDivElement>
  type: "history" | "roadmap"
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"], // Better trigger points
  })

  // Use scroll progress directly for the progress line
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  // Determine the gradient based on the timeline type
  const gradientClass =
    type === "history"
      ? "bg-gradient-to-b from-emerald-500 via-violet-500 to-emerald-500/30"
      : "bg-gradient-to-b from-emerald-500 via-violet-500 to-white/30"

  return (
    <motion.div
      className={`absolute left-[27px] top-0 w-px ml-px z-[5] ${gradientClass}`}
      style={{
        height: progressHeight,
        originY: 0,
        transition: { duration: 0.3, ease: "easeOut" }, // Added transition properties
      }}
    />
  )
}

// Component for the animated horizontal progress line
function AnimatedHorizontalProgress({
  type,
  containerRef,
}: {
  type: "history" | "roadmap"
  containerRef: React.RefObject<HTMLDivElement>
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"], // Better trigger points
  })

  // Use scroll progress directly for the progress line
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  // Determine the gradient based on the timeline type
  const gradientClass =
    type === "history"
      ? "bg-gradient-to-r from-emerald-500 via-violet-500 to-emerald-500/30"
      : "bg-gradient-to-r from-emerald-500 via-violet-500 to-white/30"

  return (
    <div className="absolute left-0 right-0 top-[27px] h-px z-[5]">
      <motion.div
        className={`h-full ${gradientClass}`}
        style={{
          width: progressWidth,
          originX: 0,
          transition: { duration: 0.3, ease: "easeOut" }, // Added transition properties
        }}
      />
    </div>
  )
}
