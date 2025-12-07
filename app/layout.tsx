import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
// Import directly from the component file to avoid the index.ts issue
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Footer } from "@/components/sections/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const bebasNeue = localFont({
  src: "../public/fonts/BebasNeue-Regular.ttf",
  variable: "--font-bebas",
  display: "swap",
})

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
      <body className={`${inter.className} ${bebasNeue.variable} overflow-x-hidden`}>
        <ThemeProvider defaultTheme="dark" storageKey="theme-preference">
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
