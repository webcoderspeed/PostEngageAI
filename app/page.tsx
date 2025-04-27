"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroScene } from "@/components/hero-scene"
import { PlatformShowcase } from "@/components/platform-showcase"
import { FeatureShowcase } from "@/components/feature-showcase"
import { Testimonials } from "@/components/testimonials"
import { PricingTable } from "@/components/pricing-table"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, ChevronDown } from "lucide-react"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Update active section based on scroll position
      const sections = ["hero", "platforms", "features", "testimonials", "pricing"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <>
      <Navbar activeSection={activeSection} onSectionClick={scrollToSection} />

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="relative min-h-screen overflow-hidden bg-black">
        <HeroScene scrollY={scrollY} />

        <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 pt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-pink-500/30 bg-gradient-to-r from-pink-500/10 to-purple-500/10 px-4 py-2 backdrop-blur-md">
              <span className="mr-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-2 py-0.5 text-xs font-bold text-white">
                NEW
              </span>
              <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-sm font-medium text-transparent">
                AI-Powered Social Media Growth Platform
              </span>
            </div>

            <h1 className="mb-6 bg-gradient-to-br from-white via-pink-100 to-purple-200 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl">
              Supercharge Your <br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Social Media Presence
              </span>
            </h1>

            <p className="mb-8 text-xl text-gray-300 md:text-2xl">
              Automate engagement, grow your network, and save hours every week with our AI-powered platform
            </p>

            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-8 py-6 text-lg font-medium text-white transition-all hover:shadow-[0_0_25px_rgba(236,72,153,0.5)]"
                >
                  <span className="relative z-10">Get Started Free</span>
                  <span className="absolute inset-0 z-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 transition-opacity group-hover:opacity-100"></span>
                  <ArrowRight className="relative z-10 ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-gray-700 bg-black/50 px-8 py-6 text-lg backdrop-blur-sm hover:bg-black/70 hover:text-pink-300"
                onClick={() => scrollToSection("features")}
              >
                Explore Features
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <button
              onClick={() => scrollToSection("platforms")}
              className="flex flex-col items-center text-gray-400 transition-colors hover:text-pink-400"
            >
              <span className="mb-2 text-sm">Scroll to explore</span>
              <ChevronDown className="h-6 w-6 animate-bounce" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="relative py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[150px]"></div>
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[150px]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <PlatformShowcase />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/20 to-black"></div>
          <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[150px]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <FeatureShowcase />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/20 to-black"></div>
          <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-pink-500/10 blur-[150px]"></div>
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[150px]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <Testimonials />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/20 to-black"></div>
          <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[150px]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <PricingTable />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-purple-950/30"></div>
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 blur-[100px]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-gray-800 bg-black/40 p-2 backdrop-blur-xl"
          >
            <div className="rounded-2xl bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-indigo-500/5 p-10 text-center md:p-16">
              <h2 className="mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
                Ready to Transform Your Social Media Presence?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
                Join thousands of professionals and businesses already growing with PostEngageAI
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-8 py-6 text-lg font-medium text-white transition-all hover:shadow-[0_0_25px_rgba(236,72,153,0.5)]"
                  >
                    <span className="relative z-10">Get Started Free</span>
                    <span className="absolute inset-0 z-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 transition-opacity group-hover:opacity-100"></span>
                    <ArrowRight className="relative z-10 ml-2 h-5 w-5" />
                  </Button>
                </Link>

                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-gray-700 bg-black/50 px-8 py-6 text-lg backdrop-blur-sm hover:bg-black/70 hover:text-pink-300"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
