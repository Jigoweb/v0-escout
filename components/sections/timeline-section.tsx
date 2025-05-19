"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Calendar, CheckCircle, Clock, Flag, Star, Zap } from "lucide-react"

interface TimelineItem {
  date: string
  title: string
  description: string
  icon?: React.ReactNode
  status?: "completed" | "current" | "upcoming"
  highlight?: boolean
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
}: {
  title?: string
  subtitle?: string
  description?: string
  items?: TimelineItem[]
  layout?: "vertical" | "horizontal"
  type?: "history" | "roadmap"
  showConnectors?: boolean
}) {
  // Determine status colors based on type (history or roadmap)
  const getStatusColors = (status: TimelineItem["status"], highlight = false) => {
    if (type === "history") {
      // For history, everything is in the past
      return {
        icon: highlight ? "text-emerald-400" : "text-white",
        bg: highlight
          ? "from-violet-500/20 to-emerald-500/20"
          : status === "current"
            ? "from-violet-500/20 to-emerald-500/20"
            : "from-white/10 to-white/5",
        border: highlight ? "border-emerald-500/20" : "border-white/10",
        connector: highlight ? "bg-gradient-to-b from-emerald-500/50 to-violet-500/30" : "bg-white/10",
      }
    } else {
      // For roadmap, we differentiate between completed, current, and upcoming
      if (status === "completed") {
        return {
          icon: "text-emerald-400",
          bg: "from-emerald-500/20 to-emerald-500/10",
          border: "border-emerald-500/20",
          connector: "bg-gradient-to-b from-emerald-500/50 to-emerald-500/20",
        }
      } else if (status === "current") {
        return {
          icon: "text-violet-400",
          bg: "from-violet-500/20 to-violet-500/10",
          border: "border-violet-500/20",
          connector: "bg-gradient-to-b from-violet-500/50 to-violet-500/20",
        }
      } else {
        return {
          icon: "text-white/60",
          bg: "from-white/10 to-white/5",
          border: "border-white/10",
          connector: "bg-white/10",
        }
      }
    }
  }

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
            <div className="relative">
              {/* Vertical connector line */}
              {showConnectors && <div className="absolute left-[27px] top-0 bottom-0 w-px bg-white/10 ml-px" />}

              <div className="space-y-12">
                {items.map((item, index) => {
                  const colors = getStatusColors(item.status, item.highlight)
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative flex"
                    >
                      {/* Timeline node */}
                      <div className="relative z-10">
                        <div
                          className={cn(
                            "w-14 h-14 rounded-full bg-gradient-to-br flex items-center justify-center",
                            `${colors.bg}`,
                            "border-2",
                            `${colors.border}`,
                          )}
                        >
                          <div className={cn(`${colors.icon}`)}>{item.icon}</div>
                        </div>

                        {/* Connector to next item */}
                        {showConnectors && index < items.length - 1 && (
                          <div
                            className={cn(
                              "absolute left-1/2 top-14 bottom-0 w-px h-[calc(100%-3.5rem)]",
                              `${colors.connector}`,
                            )}
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div className="ml-6 pt-1">
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
                        <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                        <p className="text-white/60">{item.description}</p>
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
              <div className="relative flex items-start space-x-8 px-4">
                {/* Horizontal connector line */}
                {showConnectors && <div className="absolute left-0 right-0 top-[27px] h-px bg-white/10" />}

                {items.map((item, index) => {
                  const colors = getStatusColors(item.status, item.highlight)
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative flex flex-col items-center w-60"
                    >
                      {/* Timeline node */}
                      <div className="relative z-10">
                        <div
                          className={cn(
                            "w-14 h-14 rounded-full bg-gradient-to-br flex items-center justify-center",
                            `${colors.bg}`,
                            "border-2",
                            `${colors.border}`,
                          )}
                        >
                          <div className={cn(`${colors.icon}`)}>{item.icon}</div>
                        </div>

                        {/* Connector to next item */}
                        {showConnectors && index < items.length - 1 && (
                          <div className={cn("absolute left-14 top-1/2 w-8 h-px", `${colors.connector}`)} />
                        )}
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
                        <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                        <p className="text-white/60 text-sm">{item.description}</p>
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
