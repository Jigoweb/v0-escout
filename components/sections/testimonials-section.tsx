"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  avatar?: string
}

export function TestimonialsSection({
  title = "What the Esports Community Says",
  subtitle = "Testimonials",
  description = "Don't just take our word for it. Here's what our users have to say about their experience with Escout.",
  testimonials = [
    {
      quote:
        "Escout has completely transformed how we scout new talent. The ESV score gives us an objective measure to evaluate players, and the transfer system is seamless.",
      author: "Alex Johnson",
      role: "Team Manager",
      company: "Nexus Esports",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "As a professional player, Escout has made it much easier to showcase my skills and connect with teams. The platform's reputation system ensures I'm only approached by legitimate organizations.",
      author: "Michael Chen",
      role: "Professional Player",
      company: "Titan Gaming",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Implementing Escout for our tournament has streamlined the roster submission process and brought transparency to player transfers. It's a game-changer for tournament organizers.",
      author: "Emily Rodriguez",
      role: "Tournament Director",
      company: "Global Esports League",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ],
}: {
  title?: string
  subtitle?: string
  description?: string
  testimonials?: Testimonial[]
}) {
  return (
    <section className="py-24 bg-neutral-100 dark:bg-[#050505]">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-neutral-200 dark:border-white/[0.05] rounded-xl p-8 relative shadow-sm dark:shadow-none"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-emerald-500 flex items-center justify-center">
                <Quote className="h-4 w-4 text-white" />
              </div>

              <p className="text-neutral-700 dark:text-white/70 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>

              <div className="flex items-center">
                {testimonial.avatar && (
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-neutral-200 dark:border-white/10">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
                <div>
                  <h4 className="font-medium text-neutral-900 dark:text-white">{testimonial.author}</h4>
                  <p className="text-neutral-500 dark:text-white/40 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
