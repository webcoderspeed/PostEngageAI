"use client"

import { motion } from "framer-motion"
import { Brain, Zap, BarChart, Shield, Clock, Globe } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Brain className="h-10 w-10 text-blue-500" />,
      title: "AI-Powered Engagement",
      description: "Our AI analyzes posts and generates personalized comments that sound natural and relevant.",
    },
    {
      icon: <Zap className="h-10 w-10 text-purple-500" />,
      title: "Automated Interactions",
      description: "Set up automated likes and comments based on your preferences and target audience.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-blue-500" />,
      title: "Growth Analytics",
      description: "Track your engagement metrics and see how your network grows over time.",
    },
    {
      icon: <Shield className="h-10 w-10 text-purple-500" />,
      title: "Secure Authentication",
      description: "Your account credentials are encrypted and securely stored. We prioritize your privacy.",
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-500" />,
      title: "Time-Saving",
      description: "Save hours each week by automating your social media engagement strategy.",
    },
    {
      icon: <Globe className="h-10 w-10 text-purple-500" />,
      title: "Multi-Platform Support",
      description: "Starting with LinkedIn, with plans to expand to Instagram, Twitter, and more platforms.",
    },
  ]

  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl"
          >
            Powerful Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400"
          >
            Everything you need to grow your social media presence effortlessly
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-800/50"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
