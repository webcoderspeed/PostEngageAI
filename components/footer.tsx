"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Instagram, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="relative border-t border-gray-800 bg-black py-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-[100px]"></div>
        <div className="absolute right-0 top-0 h-[200px] w-[200px] rounded-full bg-pink-500/5 blur-[100px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
              PostEngageAI
            </h3>
            <p className="text-gray-400">Automate your social media engagement with AI-powered tools.</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="rounded-full bg-gray-900 p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-pink-400"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-900 p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-900 p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-pink-400"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-900 p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 text-lg font-semibold text-white">Product</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#features" className="transition-colors hover:text-pink-400">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="transition-colors hover:text-pink-400">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-pink-400">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-pink-400">
                  FAQ
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#" className="transition-colors hover:text-pink-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-pink-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-pink-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-pink-400">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 text-lg font-semibold text-white">Subscribe</h4>
            <p className="mb-4 text-gray-400">Stay updated with our latest features and releases.</p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="rounded-l-full border-gray-800 bg-gray-900 text-white placeholder:text-gray-500 focus-visible:ring-pink-500"
              />
              <Button className="rounded-r-full bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} PostEngageAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
