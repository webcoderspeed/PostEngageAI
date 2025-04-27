"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Linkedin, Github, Mail, Lock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Redirect to dashboard
    window.location.href = "/dashboard"
  }

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black"></div>
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[150px]"></div>
      </div>

      <header className="relative z-10 flex h-20 items-center border-b border-gray-800 px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">
            PostEngageAI
          </span>
        </Link>
      </header>

      <main className="relative z-10 flex flex-1 items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-1 backdrop-blur-xl"
        >
          <div className="rounded-xl bg-gradient-to-br from-gray-900 to-black p-8">
            <div className="mb-8 text-center">
              <h1 className="mb-2 text-3xl font-bold text-white">Welcome back</h1>
              <p className="text-gray-400">Sign in to your account to continue</p>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="w-full border-gray-800 bg-black/50 text-white hover:bg-black/70 hover:text-pink-400"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button
                variant="outline"
                className="w-full border-gray-800 bg-black/50 text-white hover:bg-black/70 hover:text-blue-400"
              >
                <Linkedin className="mr-2 h-4 w-4 text-blue-500" />
                LinkedIn
              </Button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full border-gray-800" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-black px-2 text-gray-500">Or continue with</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-gray-800 bg-black/50 pl-10 text-white placeholder:text-gray-500 focus-visible:ring-pink-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-gray-300">
                    Password
                  </Label>
                  <Link href="/forgot-password" className="text-xs text-gray-400 hover:text-pink-400">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-gray-800 bg-black/50 pl-10 text-white placeholder:text-gray-500 focus-visible:ring-pink-500"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]"
              >
                {isLoading ? (
                  "Signing in..."
                ) : (
                  <>
                    Sign in
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 text-center text-sm">
              <p className="text-gray-400">
                Don't have an account?{" "}
                <Link href="/signup" className="font-medium text-pink-400 hover:text-pink-300">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
