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

export function InteractiveTimeline({
  title = "Interactive Timeline",
  subtitle = "Hover for Details",
  description = "Hover over timeline items to see more details and watch the progress animate as you scroll.",
  items = [
    {
      date: "Q3 2023",
      title: "MVP (Closed Beta)",
      description: "ESV, Basic search functions, Player and team profiles, Home feed",
      icon: <Flag className="h-5 w-5" />,
      status: "completed",
      details:
        "Our MVP phase focused on building the core functionality of the platform. We developed the initial ESV algorithm, created basic search functionality, and established the foundation for player and team profiles. The home feed was designed to showcase relevant players and teams based on user preferences.",
    },
    {
      date: "Q4 2023",
      title: "Test (Open Beta)",
      description: "Team reputation, analytics tools, Enhanced filters",
      icon: <Star className="h-5 w-5" />,
      status: "completed",
      details:
        "During the Open Beta, we expanded the platform with team reputation metrics, advanced analytics tools for performance tracking, and enhanced search filters. We invited select teams and players to test the platform and provide feedback, which helped us refine the user experience and identify key areas for improvement.",
    },
    {
      date: "Q1 2024",
      title: "Launch",
      description: "Blockchain-based contract verification, Player transfer market, Interactive leaderboard",
      icon: <CheckCircle className="h-5 w-5" />,
      status: "current",
      highlight: true,
      details:
        "Our official launch introduced blockchain-based contract verification for secure and transparent player agreements. We also launched the player transfer market, allowing teams to discover available talent and initiate transfer negotiations. The interactive leaderboard provides real-time rankings of players based on their ESV scores and recent performance.",
    },
    {
      date: "Q2 2024",
      title: "Scale",
      description: "Player career comparison tools, Additional game integrations",
      icon: <Zap className="h-5 w-5" />,
      status: "upcoming",
      highlight: true,
      details:
        "In our scaling phase, we'll introduce advanced player career comparison tools that allow for detailed analysis of player trajectories and potential. We'll also expand our platform to support additional game titles, broadening our reach within the esports ecosystem and providing more opportunities for players across different games.",
    },
    {
      date: "Q3 2024",
      title: "Tournament Integration",
      description: "Onboard tournament organizers & broadcasters",
      icon: <Calendar className="h-5 w-5" />,
      status: "upcoming",
      details:
        "Our tournament integration phase will focus on creating seamless connections with tournament organizers and broadcasters. This will include automated roster submission, player eligibility verification, and data integration for enhanced broadcast statistics. Tournament organizers will be able to create dedicated hubs on our platform for their events.",
    },
    {
      date: "Q4 2024",
      title: "Global Expansion",
      description: "Expand to additional regions and games",
      icon: <Clock className="h-5 w-5" />,
      status: "upcoming",
      details:
        "Our global expansion will focus on supporting more regions with localized versions of the platform and region-specific features. We'll establish partnerships with regional esports organizations and adapt our ESV algorithm to account for regional differences in competitive play. This phase will also include additional language support and region-specific content.",
    },
  ],
}: {
  title?: string
  subtitle?: string
  description?: string
  items?: TimelineItem[]
}) {
  const [activeItem, setActiveItem] = useState<number | null>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  // Determine status colors based on status
  const getStatusColors = (status: TimelineItem["status"], highlight = false, isActive = false) => {
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

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  })

  // Use scroll progress directly for the progress line
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

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

        <div className="max-w-3xl mx-auto">
          <div className="relative" ref={timelineRef}>
            {/* Vertical connector line - static background */}
            <div className="absolute left-[27px] top-0 bottom-0 w-px bg-white/5 ml-px" />

            {/* Animated progress line */}
            <motion.div
              className="absolute left-[27px] top-0 w-px ml-px z-[5] bg-gradient-to-b from-emerald-500 via-violet-500 to-white/30"
              style={{
                height: progressHeight,
                originY: 0,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            />

            <div className="space-y-12">
              {items.map((item, index) => {
                const isActive = activeItem === index
                const colors = getStatusColors(item.status, item.highlight, isActive)
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex"
                    onMouseEnter={() => setActiveItem(index)}
                    onMouseLeave={() => setActiveItem(null)}
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
                        whileHover={{ scale: 1.1 }}
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
                        {item.details && <Info className="h-4 w-4 ml-2 text-white/40" />}
                      </h4>
                      <p className="text-white/60">{item.description}</p>

                      {/* Expanded details */}
                      {isActive && item.details && (
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
      </div>
    </section>
  )
}
