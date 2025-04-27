"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  activeSection: string
  onSectionClick: (id: string) => void
}

export function Navbar({ activeSection, onSectionClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "platforms", label: "Platforms" },
    { id: "features", label: "Features" },
    { id: "testimonials", label: "Testimonials" },
    { id: "pricing", label: "Pricing" },
  ]

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">
              PostEngageAI
            </span>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onSectionClick(item.id)}
                    className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                      activeSection === item.id ? "text-white" : "text-gray-400 hover:text-gray-200"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="rounded-full text-gray-300 hover:bg-white/10 hover:text-white">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]">
                Sign Up
              </Button>
            </Link>
          </div>

          <button className="block md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 bg-black/95 backdrop-blur-lg"
          >
            <div className="container mx-auto px-4 py-6">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        onSectionClick(item.id)
                        setIsMobileMenuOpen(false)
                      }}
                      className={`w-full px-4 py-2 text-left text-lg font-medium ${
                        activeSection === item.id ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col space-y-4">
                <Link href="/login" className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full rounded-full border border-gray-800 text-gray-300 hover:bg-white/10 hover:text-white"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup" className="w-full">
                  <Button className="w-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
