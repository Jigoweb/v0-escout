import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Escout | Privacy Policy",
  description: "Privacy Policy for Escout.gg platform",
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

