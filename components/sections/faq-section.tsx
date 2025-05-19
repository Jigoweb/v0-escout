"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronDown, HelpCircle } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

export function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "FAQ",
  description = "Find answers to common questions about Escout and esports scouting.",
  faqs = [
    {
      question: "What is the ESV score?",
      answer:
        "The Escout Value (ESV) score is our proprietary rating system that provides a fair and objective measure of a player's value. It combines in-game performance metrics, tournament results, team history, and other factors to create a comprehensive evaluation that helps teams make informed decisions when scouting talent.",
    },
    {
      question: "How does Escout help aspiring players?",
      answer:
        "Escout provides aspiring players with a platform to showcase their skills, track their performance, and get discovered by professional teams. Players can create detailed profiles, receive an ESV score, access career development resources, and connect directly with teams looking for talent. We're creating a clear path to pro that's based on merit rather than connections.",
    },
    {
      question: "How does the transfer system work?",
      answer:
        "Our transfer system streamlines the process of player transfers between teams. It provides a secure environment for negotiations, contract management, and transfer execution. All transfers are recorded on our platform, creating transparency and establishing fair market values for players. The system also ensures compliance with tournament regulations regarding roster changes and transfer windows.",
    },
    {
      question: "Which games does Escout support?",
      answer:
        "Escout is designed to support multiple esports titles. At launch, we'll support major titles including League of Legends, Counter-Strike, Valorant, Dota 2, and Rocket League. We plan to expand to additional games based on community demand and partnership opportunities. Our platform is built to scale across the entire esports ecosystem.",
    },
    {
      question: "How do teams use Escout for scouting?",
      answer:
        "Teams can use Escout's advanced search and filtering tools to discover players that match their specific requirements. They can compare players using detailed performance metrics and ESV scores, review player history and tournament results, and directly contact players they're interested in. Our platform eliminates the inefficiencies of traditional scouting methods and helps teams build stronger rosters.",
    },
    {
      question: "How does Escout integrate with tournaments?",
      answer:
        "Escout works with tournament organizers to streamline roster submissions, verify player eligibility, and manage transfer windows. Tournament organizers can create dedicated hubs on our platform to communicate rules, schedules, and requirements to participating teams. We also provide data integration options for enhancing broadcast content with player statistics and ESV scores.",
    },
  ],
}: {
  title?: string
  subtitle?: string
  description?: string
  faqs?: FAQItem[]
}) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-white dark:bg-[#030303]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
              {subtitle}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900 dark:text-white">{title}</h3>
            <p className="text-neutral-600 dark:text-white/40 text-lg">{description}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={cn(
                  "bg-neutral-50 dark:bg-white/[0.03] backdrop-blur-sm border border-neutral-200 dark:border-white/[0.05] rounded-xl overflow-hidden shadow-sm dark:shadow-none",
                  expandedIndex === index && "ring-1 ring-emerald-200 dark:ring-emerald-500/30",
                )}
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="flex items-center justify-between w-full p-6 text-left"
                  aria-expanded={expandedIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-100 to-emerald-100 dark:from-violet-500/20 dark:to-emerald-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <HelpCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h4 className="text-lg font-medium text-neutral-900 dark:text-white">{faq.question}</h4>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-neutral-500 dark:text-white/40 transition-transform duration-300",
                      expandedIndex === index && "transform rotate-180 text-emerald-600 dark:text-emerald-400",
                    )}
                  />
                </button>
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      id={`faq-answer-${index}`}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="pl-12">
                          <div className="h-px w-full bg-gradient-to-r from-violet-200 via-emerald-200 to-transparent dark:from-violet-500/20 dark:via-emerald-500/20 dark:to-transparent mb-4" />
                          <p className="text-neutral-700 dark:text-white/60 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-neutral-600 dark:text-white/40">
            Still have questions?{" "}
            <a
              href="#contact"
              className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
            >
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
