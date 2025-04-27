"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { subscribeToNewsletter } from "@/app/actions"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      await subscribeToNewsletter(email)
      setIsSuccess(true)
      setEmail("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-purple-600 blur-[120px]" />
        <div className="absolute top-1/2 right-0 h-80 w-80 rounded-full bg-blue-600 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-sm text-slate-300">
              <span className="mr-2 rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">
                Coming Soon
              </span>
              <span>Join the waitlist today</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Grow Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Social Media
              </span>{" "}
              Presence with AI
            </h1>

            <p className="text-xl text-slate-300">
              Automate your LinkedIn engagement with AI-powered likes and comments. Save time and grow your network
              effortlessly.
            </p>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-400"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 bg-gradient-to-r from-blue-600 to-purple-600 px-6 text-white hover:from-blue-700 hover:to-purple-700"
                  >
                    {isSubmitting ? (
                      "Subscribing..."
                    ) : (
                      <>
                        Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
                {error && <p className="text-sm text-red-400">{error}</p>}
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-lg bg-slate-800/70 p-4 text-center"
              >
                <div className="flex items-center justify-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  <p className="text-green-400">Thanks for subscribing! Check your email for confirmation.</p>
                </div>
              </motion.div>
            )}

            <p className="text-sm text-slate-400">Be the first to know when we launch. No spam, ever.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
              <div className="p-6">
                <div className="mb-4 flex items-center">
                  <Linkedin className="mr-2 h-6 w-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">LinkedIn Automation</h3>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg bg-slate-700/50 p-4">
                    <p className="text-slate-300">AI analyzes posts and generates personalized comments</p>
                  </div>
                  <div className="rounded-lg bg-slate-700/50 p-4">
                    <p className="text-slate-300">Smart engagement with relevant content in your network</p>
                  </div>
                  <div className="rounded-lg bg-slate-700/50 p-4">
                    <p className="text-slate-300">Schedule posts and comments for optimal engagement times</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-slate-400">More platforms coming soon: Twitter, Instagram, and more!</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
