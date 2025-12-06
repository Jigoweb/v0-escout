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
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-widest text-cyan-400 mb-3">
              {subtitle}
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white uppercase">{title}</h3>
            <p className="text-white/70 text-lg">{description}</p>
          </motion.div>
        </div>
      </div>

      {/* Background band below title */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/testimonials_background.jpg"
            alt="Testimonials Background"
            fill
            className="object-cover opacity-60"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/80 to-purple-900/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 relative shadow-xl h-full flex flex-col justify-between"
              >
                <div>
                  <p className="text-cyan-100 text-lg mb-8 italic leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                </div>
                <div className="mt-auto">
                  <h4 className="font-bold text-white text-xl mb-1">{testimonial.author}</h4>
                  <p className="text-cyan-400 text-sm font-medium">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
