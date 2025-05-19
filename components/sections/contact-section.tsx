"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Phone } from "lucide-react"

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
    <section className="py-24 bg-neutral-50 dark:bg-[#030303]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3">{subtitle}</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900 dark:text-white">{title}</h3>
            <p className="text-neutral-600 dark:text-white/40 text-lg mb-8">{description}</p>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-100 to-emerald-100 dark:from-violet-500/20 dark:to-emerald-500/20 flex items-center justify-center mr-4">
                    <div className="text-emerald-600 dark:text-emerald-400">{method.icon}</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-white mb-1">{method.title}</h4>
                    {method.link ? (
                      <a
                        href={method.link}
                        className="text-neutral-600 hover:text-emerald-600 dark:text-white/60 dark:hover:text-emerald-400 transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-neutral-600 dark:text-white/60">{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-neutral-200 dark:border-white/[0.05] rounded-xl p-8 shadow-sm dark:shadow-none"
          >
            <h4 className="text-xl font-semibold mb-6 text-neutral-900 dark:text-white">Send us a message</h4>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-white/60 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-neutral-50 dark:bg-white/[0.03] border-neutral-300 dark:border-white/10 text-neutral-900 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-white/30 focus-visible:ring-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-white/60 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-neutral-50 dark:bg-white/[0.03] border-neutral-300 dark:border-white/10 text-neutral-900 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-white/30 focus-visible:ring-emerald-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-white/60 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help?"
                  className="bg-neutral-50 dark:bg-white/[0.03] border-neutral-300 dark:border-white/10 text-neutral-900 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-white/30 focus-visible:ring-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-white/60 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                  className="bg-neutral-50 dark:bg-white/[0.03] border-neutral-300 dark:border-white/10 text-neutral-900 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-white/30 focus-visible:ring-emerald-500"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-500 to-emerald-500 hover:from-violet-600 hover:to-emerald-600 text-white border-0"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
