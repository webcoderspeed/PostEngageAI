import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "PostEngageAI - Grow Your Social Media Presence with AI",
  description:
    "Automate your social media engagement with AI-powered tools. Save time and grow your network effortlessly.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Analytics />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
