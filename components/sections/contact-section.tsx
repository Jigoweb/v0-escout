"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Phone } from "lucide-react"
import Image from "next/image"

interface ContactMethod {
  icon: React.ReactNode
  title: string
  value: string
  link?: string
}

export function ContactSection({
  title = "Get in Touch",
  subtitle = "Contact Us",
  description = "Have questions about Escout? We're here to help. Reach out to us using any of the methods below.",
  contactMethods = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "hello@escout.gg",
      link: "mailto:hello@escout.gg",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Live Chat",
      value: "Available 24/7",
      link: "#",
    },
  ],
}: {
  title?: string
  subtitle?: string
  description?: string
  contactMethods?: ContactMethod[]
}) {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card: Get In Touch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-purple-500/30 rounded-2xl p-8 md:p-12 relative overflow-hidden bg-black shadow-[0_0_30px_rgba(139,92,246,0.1)] h-full flex flex-col"
          >
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 text-purple-500 uppercase font-sans">{title}</h3>
              <p className="text-neutral-400 text-base mb-1">Have questions about Escout?</p>
              <p className="text-neutral-400 text-base mb-8">Our team is here to help players and organizations connect.</p>

              <div className="h-px w-full bg-purple-500/30 mb-8" />

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-center justify-between group">
                    <span className="text-neutral-400 font-medium">{method.title}</span>
                    {method.link ? (
                      <a
                        href={method.link}
                        className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <span className="text-purple-400 font-medium">{method.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Card: Send Us A Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden h-full"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/box_contact_background.jpg"
                alt="Contact Background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/60 to-black/40 mix-blend-multiply" />
            </div>

            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col">
              <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white uppercase font-sans">SEND US A MESSAGE</h3>
              
              <form className="space-y-4 flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-black/30 border-cyan-500/30 text-white placeholder:text-white/50 focus-visible:ring-cyan-500 h-12 rounded-lg backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="bg-black/30 border-cyan-500/30 text-white placeholder:text-white/50 focus-visible:ring-cyan-500 h-12 rounded-lg backdrop-blur-sm"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    className="bg-black/30 border-cyan-500/30 text-white placeholder:text-white/50 focus-visible:ring-cyan-500 h-12 rounded-lg backdrop-blur-sm"
                  />
                </div>
                <div>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={5}
                    className="bg-black/30 border-cyan-500/30 text-white placeholder:text-white/50 focus-visible:ring-cyan-500 rounded-lg backdrop-blur-sm resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 h-12 rounded-lg font-semibold mt-2"
                >
                  Send message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

