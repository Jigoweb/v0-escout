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
  title = "FREQUENTLY ASKED QUESTIONS",
  subtitle = "FAQ",
  description = "Find answers to common questions about Escout and how it works.",
  faqs = [
    {
      question: "How does the ESV Score work?",
      answer:
        "The Esports Scouting Value (ESV) Score is our proprietary algorithm that analyzes over 200 data points from a player's performance history. It considers mechanical skill, game sense, consistency, teamwork indicators, and performance trends to generate a comprehensive evaluation of a player's potential and team compatibility.",
    },
    {
      question: "Which games does Escout support?",
      answer:
        "Escout is designed to support multiple esports titles. At launch, we'll support major titles including League of Legends, Counter-Strike, Valorant, Dota 2, and Rocket League. We plan to expand to additional games based on community demand and partnership opportunities. Our platform is built to scale across the entire esports ecosystem.",
    },
    {
      question: "How do I get noticed by teams?",
      answer:
        "Escout provides aspiring players with a platform to showcase their skills, track their performance, and get discovered by professional teams. Players can create detailed profiles, receive an ESV score, access career development resources, and connect directly with teams looking for talent. We're creating a clear path to pro that's based on merit rather than connections.",
    },
    {
      question: "Is Escout only for professional players?",
      answer:
        "Teams can use Escout's advanced search and filtering tools to discover players that match their specific requirements. They can compare players using detailed performance metrics and ESV scores, review player history and tournament results, and directly contact players they're interested in. Our platform eliminates the inefficiencies of traditional scouting methods and helps teams build stronger rosters.",
    },
  ],
}: {
  title?: string
  subtitle?: string
  description?: string
  faqs?: FAQItem[]
}) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase mb-6 leading-[0.9] text-white">{title}</h3>
            <p className="text-white/60 text-lg">{description}</p>
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
                  "rounded-xl overflow-hidden transition-all duration-300",
                  expandedIndex === index
                    ? "bg-[#0a0a0a] border border-[#39e4ff] shadow-[0_0_15px_rgba(57,228,255,0.1)]"
                    : "bg-[#111111] border border-white/5 hover:border-white/10"
                )}
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="flex items-center w-full p-6 text-left"
                  aria-expanded={expandedIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center w-full">
                    <div className={cn(
                      "w-10 h-10 mr-4 flex-shrink-0 relative transition-all duration-300",
                      expandedIndex === index ? "opacity-100" : "opacity-70"
                    )}>
                       <img 
                        src="/images/faq_icon.png" 
                        alt="FAQ Icon" 
                        className="w-full h-full object-contain"
                        style={{ filter: expandedIndex === index ? 'drop-shadow(0 0 2px #39e4ff)' : 'none' }}
                       />
                    </div>
                    <h4 className={cn(
                      "text-2xl font-normal transition-colors duration-300",
                      expandedIndex === index ? "text-[#39e4ff]" : "text-neutral-400"
                    )}>
                      {faq.question}
                    </h4>
                  </div>
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
                      <div className="px-6 pb-8 pt-0">
                        <div className="h-px w-full bg-[#39e4ff]/30 mb-6" />
                        <p className="text-white/80 leading-relaxed text-base">
                          {faq.answer}
                        </p>
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
          className="text-center mt-16 flex flex-col items-center gap-4"
        >
          <span className="text-[#39e4ff] text-sm font-medium uppercase tracking-wider">
            Still have questions?
          </span>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#39e4ff] bg-[#39e4ff]/10 text-white font-medium hover:bg-[#39e4ff] hover:text-black transition-all duration-300"
          >
            Contact our support team
          </a>
        </motion.div>
      </div>
    </section>
  )
}
