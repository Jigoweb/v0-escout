import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Escout | Cookie Policy",
  description: "Cookie Policy for Escout.gg platform",
}

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

