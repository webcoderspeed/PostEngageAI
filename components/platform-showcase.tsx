"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Link from "next/link"

export function PlatformShowcase() {
  const [activeTab, setActiveTab] = useState("linkedin")

  const platforms = [
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      color: "from-blue-500 to-blue-700",
      textColor: "text-blue-500",
      borderColor: "border-blue-500/30",
      shadowColor: "shadow-blue-500/20",
      features: [
        "AI-powered comment generation",
        "Automated post engagement",
        "Smart connection requests",
        "Content performance analytics",
        "Scheduled interactions",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "twitter",
      name: "Twitter",
      icon: <Twitter className="h-6 w-6" />,
      color: "from-sky-500 to-sky-700",
      textColor: "text-sky-500",
      borderColor: "border-sky-500/30",
      shadowColor: "shadow-sky-500/20",
      features: [
        "Automated replies and retweets",
        "Trending topic engagement",
        "Thread creation assistant",
        "Follower growth analytics",
        "Scheduled tweets and interactions",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: <Instagram className="h-6 w-6" />,
      color: "from-pink-500 to-pink-700",
      textColor: "text-pink-500",
      borderColor: "border-pink-500/30",
      shadowColor: "shadow-pink-500/20",
      features: [
        "Smart comment automation",
        "Hashtag research and optimization",
        "Content calendar management",
        "Engagement analytics",
        "Story and post scheduling",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const currentPlatform = platforms.find((p) => p.id === activeTab) || platforms[0]

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
          One Platform, <span className="text-white">All Networks</span>
        </h2>
        <p className="mx-auto max-w-2xl text-xl text-gray-300">
          Seamlessly manage and grow your presence across all major social media platforms
        </p>
      </motion.div>

      <Tabs defaultValue="linkedin" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="mb-12 flex justify-center">
          <TabsList className="grid w-full max-w-md grid-cols-3 rounded-full border border-gray-800 bg-black/50 p-1 backdrop-blur-sm">
            {platforms.map((platform) => (
              <TabsTrigger
                key={platform.id}
                value={platform.id}
                className={`rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:${platform.color} data-[state=active]:text-white`}
              >
                <div className="flex items-center space-x-2">
                  {platform.icon}
                  <span className="hidden sm:inline">{platform.name}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {platforms.map((platform) => (
          <TabsContent
            key={platform.id}
            value={platform.id}
            className="focus-visible:outline-none focus-visible:ring-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid gap-8 md:grid-cols-2"
            >
              <div className="flex flex-col justify-center">
                <div
                  className={`mb-6 inline-flex items-center rounded-full ${platform.borderColor} bg-black/50 px-4 py-2 backdrop-blur-sm`}
                >
                  {platform.icon}
                  <span className={`ml-2 ${platform.textColor} font-medium`}>{platform.name} Growth</span>
                </div>
                <h3 className="mb-6 text-3xl font-bold text-white">Supercharge Your {platform.name} Presence</h3>
                <ul className="mb-8 space-y-4">
                  {platform.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <div
                        className={`mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r ${platform.color}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-lg text-gray-200">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <Link href="/signup">
                  <Button
                    className={`group rounded-full bg-gradient-to-r ${platform.color} hover:${platform.shadowColor}`}
                  >
                    Get Started with {platform.name}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center"
              >
                <div
                  className={`overflow-hidden rounded-2xl border ${platform.borderColor} bg-black/40 p-1 backdrop-blur-sm ${platform.shadowColor}`}
                >
                  <div className="rounded-xl bg-black/80 p-4">
                    <div className="flex items-center border-b border-gray-800 pb-3">
                      {platform.icon}
                      <span className="ml-2 font-medium text-white">{platform.name} Automation</span>
                    </div>
                    <div className="mt-4 space-y-4">
                      <div className="rounded-lg bg-gray-900 p-4">
                        <p className="text-gray-300">AI analyzes posts and generates personalized comments</p>
                      </div>
                      <div className="rounded-lg bg-gray-900 p-4">
                        <p className="text-gray-300">Smart engagement with relevant content in your network</p>
                      </div>
                      <div className="rounded-lg bg-gray-900 p-4">
                        <p className="text-gray-300">Schedule posts and comments for optimal engagement times</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </>
  )
}
