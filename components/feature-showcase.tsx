"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Brain, BarChart, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Link from "next/link"

export function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState("ai")

  const features = [
    {
      id: "ai",
      name: "AI-Powered",
      icon: <Brain className="h-6 w-6" />,
      color: "from-pink-500 to-pink-700",
      textColor: "text-pink-500",
      borderColor: "border-pink-500/30",
      shadowColor: "shadow-pink-500/20",
      title: "Advanced AI Content Analysis",
      description:
        "Our AI analyzes post content to generate contextually relevant comments and responses that sound natural and drive engagement.",
      benefits: [
        "Natural language generation for authentic comments",
        "Content sentiment analysis for appropriate responses",
        "Contextual understanding of industry-specific topics",
        "Personalized tone matching your brand voice",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "analytics",
      name: "Analytics",
      icon: <BarChart className="h-6 w-6" />,
      color: "from-purple-500 to-purple-700",
      textColor: "text-purple-500",
      borderColor: "border-purple-500/30",
      shadowColor: "shadow-purple-500/20",
      title: "Comprehensive Growth Analytics",
      description:
        "Track your engagement metrics and network growth with detailed analytics that help you understand what's working and optimize your strategy.",
      benefits: [
        "Real-time engagement tracking and reporting",
        "Performance comparison across platforms",
        "Audience growth and demographic insights",
        "Content performance analytics and recommendations",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "automation",
      name: "Automation",
      icon: <Zap className="h-6 w-6" />,
      color: "from-indigo-500 to-indigo-700",
      textColor: "text-indigo-500",
      borderColor: "border-indigo-500/30",
      shadowColor: "shadow-indigo-500/20",
      title: "Intelligent Automation Engine",
      description:
        "Set up automated engagement schedules that run even when you're offline, ensuring consistent presence and growth across all your platforms.",
      benefits: [
        "Smart scheduling based on optimal engagement times",
        "Automated responses to comments and messages",
        "Bulk content scheduling across multiple platforms",
        "Custom automation rules and triggers",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const currentFeature = features.find((f) => f.id === activeTab) || features[0]

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
          Powered by <span className="text-white">Advanced Technology</span>
        </h2>
        <p className="mx-auto max-w-2xl text-xl text-gray-300">
          Our platform leverages cutting-edge artificial intelligence to deliver personalized engagement at scale
        </p>
      </motion.div>

      <Tabs defaultValue="ai" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="mb-12 flex justify-center">
          <TabsList className="grid w-full max-w-md grid-cols-3 rounded-full border border-gray-800 bg-black/50 p-1 backdrop-blur-sm">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className={`rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:${feature.color} data-[state=active]:text-white`}
              >
                <div className="flex items-center space-x-2">
                  {feature.icon}
                  <span className="hidden sm:inline">{feature.name}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {features.map((feature) => (
          <TabsContent key={feature.id} value={feature.id} className="focus-visible:outline-none focus-visible:ring-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid gap-8 md:grid-cols-2"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center order-2 md:order-1"
              >
                <div
                  className={`overflow-hidden rounded-2xl border ${feature.borderColor} bg-black/40 p-1 backdrop-blur-sm ${feature.shadowColor}`}
                >
                  <div className="aspect-video w-full max-w-lg rounded-xl bg-black/80 p-4">
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center">
                        {feature.icon && (
                          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-gray-900 to-black">
                            {React.cloneElement(feature.icon, { className: `h-8 w-8 ${feature.textColor}` })}
                          </div>
                        )}
                        <p className={`text-lg font-medium ${feature.textColor}`}>Feature Preview</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="flex flex-col justify-center order-1 md:order-2">
                <div
                  className={`mb-6 inline-flex items-center rounded-full ${feature.borderColor} bg-black/50 px-4 py-2 backdrop-blur-sm`}
                >
                  {feature.icon}
                  <span className={`ml-2 ${feature.textColor} font-medium`}>{feature.name}</span>
                </div>
                <h3 className="mb-4 text-3xl font-bold text-white">{feature.title}</h3>
                <p className="mb-6 text-lg text-gray-300">{feature.description}</p>
                <ul className="mb-8 space-y-4">
                  {feature.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <div
                        className={`mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r ${feature.color}`}
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
                      <span className="text-gray-200">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
                <Link href="/signup">
                  <Button
                    className={`group rounded-full bg-gradient-to-r ${feature.color} hover:${feature.shadowColor}`}
                  >
                    Explore {feature.name} Features
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </>
  )
}
