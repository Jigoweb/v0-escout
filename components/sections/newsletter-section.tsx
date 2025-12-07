"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Mail, CheckCircle, AlertCircle, ArrowRight } from "lucide-react"

type SubscriptionStatus = "idle" | "loading" | "success" | "error"

interface NewsletterProps {
  title?: string
  subtitle?: string
  description?: string
  placeholder?: string
  buttonText?: string
  successMessage?: string
  errorMessage?: string
  className?: string
  variant?: "default" | "compact" | "card"
}

export function NewsletterSection({
  title = "Stay Updated on Esports Opportunities",
  subtitle = "Newsletter",
  description = "Subscribe to receive the latest news about tournaments, team openings, and platform features.",
  placeholder = "Enter your email",
  buttonText = "Subscribe",
  successMessage = "Thank you for subscribing! Check your email to confirm your subscription.",
  errorMessage = "Something went wrong. Please try again later.",
  className,
  variant = "default",
}: NewsletterProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<SubscriptionStatus>("idle")
  const [touched, setTouched] = useState(false)

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const isEmailValid = !email || isValidEmail(email)
  const canSubmit = email && isValidEmail(email)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!canSubmit) return

    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      // 90% success rate for demo purposes
      if (Math.random() > 0.1) {
        setStatus("success")
        setEmail("")
      } else {
        setStatus("error")
      }
    }, 1500)
  }

  const renderForm = () => (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={cn("flex flex-col sm:flex-row gap-3", variant === "compact" && "max-w-md mx-auto")}>
        <div className="relative flex-grow">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched(true)}
            placeholder={placeholder}
            className={cn(
              "bg-transparent border-[#39e4ff] text-white placeholder:text-white/50 pr-10 rounded-md",
              "focus-visible:ring-[#39e4ff] h-12",
              !isEmailValid && touched && "border-red-500 focus-visible:ring-red-500",
            )}
            disabled={status === "loading" || status === "success"}
          />
          <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#39e4ff]" />
        </div>
        <Button
          type="submit"
          disabled={!canSubmit || status === "loading" || status === "success"}
          className={cn(
            "bg-[#39e4ff] hover:bg-[#27d4f0] text-black",
            "rounded-md border-0 h-12 px-6",
            variant === "compact" ? "sm:w-auto" : "sm:w-auto md:w-auto",
          )}
        >
          {status === "loading" ? (
            <div className="flex items-center">
              <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              <span>Subscribing...</span>
            </div>
          ) : (
            <div className="flex items-center">
              <span>{buttonText}</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          )}
        </Button>
      </div>

      {!isEmailValid && touched && <p className="text-red-500 text-sm mt-2">Please enter a valid email address</p>}
    </form>
  )

  const renderFeedback = () => {
    if (status === "success") {
      return (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 p-4 rounded-lg mt-4"
        >
          <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
          <p>{successMessage}</p>
        </motion.div>
      )
    }

    if (status === "error") {
      return (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 p-4 rounded-lg mt-4"
        >
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
          <div>
            <p>{errorMessage}</p>
            <Button
              variant="link"
              className="text-red-700 dark:text-red-400 p-0 h-auto font-normal underline"
              onClick={() => setStatus("idle")}
            >
              Try again
            </Button>
          </div>
        </motion.div>
      )
    }

    return null
  }

  // Card variant
  if (variant === "card") {
    return (
      <div className={cn("w-full", className)}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-neutral-200 dark:border-white/[0.05] rounded-xl p-8 shadow-sm dark:shadow-none"
        >
          <div className="flex items-start mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-100 to-emerald-100 dark:from-violet-500/20 dark:to-emerald-500/20 flex items-center justify-center mr-4">
              <Mail className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-1">{title}</h3>
              <p className="text-neutral-600 dark:text-white/40">{description}</p>
            </div>
          </div>

          {renderForm()}
          {renderFeedback()}
        </motion.div>
      </div>
    )
  }

  // Default and compact variants
  return (
    <section className={cn("py-20 bg-black", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn("text-center", variant === "default" ? "max-w-3xl mx-auto" : "max-w-xl mx-auto")}
        >
          {variant === "default" && (
            <h2 className="text-sm uppercase tracking-widest text-[#39e4ff] mb-3">{subtitle}</h2>
          )}
          <h3
            className={cn(
              "font-black text-white uppercase mb-6 leading-[0.9]",
              variant === "default" ? "text-4xl md:text-5xl lg:text-7xl" : "text-3xl",
            )}
          >
            {title}
          </h3>
          <p
            className={cn("text-white/60 mb-8", variant === "default" ? "text-lg" : "text-base")}
          >
            {description}
          </p>

          {renderForm()}
          {renderFeedback()}
        </motion.div>
      </div>
    </section>
  )
}
