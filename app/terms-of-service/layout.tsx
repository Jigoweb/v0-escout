import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Escout | Terms of Service",
  description: "Terms of Service for Escout.gg platform",
}

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

