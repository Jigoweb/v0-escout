import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
// Import directly from the component file to avoid the index.ts issue
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Footer } from "@/components/sections/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Escout | Esports Scouting Platform",
  description:
    "Discover and connect with the next generation of esports talent through advanced analytics and AI-powered insights.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="theme-preference">
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
