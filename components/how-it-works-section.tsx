"use client"

import { motion } from "framer-motion"
import { UserPlus, Settings, MessageSquare, ThumbsUp } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: <UserPlus className="h-10 w-10 text-white" />,
      title: "Sign Up & Connect",
      description: "Create an account and securely connect your LinkedIn profile.",
      color: "bg-blue-500",
    },
    {
      icon: <Settings className="h-10 w-10 text-white" />,
      title: "Configure Preferences",
      description: "Set your engagement preferences, target audience, and content topics.",
      color: "bg-purple-500",
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-white" />,
      title: "Automated Engagement",
      description: "Our AI automatically likes relevant posts in your network.",
      color: "bg-blue-500",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-white" />,
      title: "Smart Comments",
      description: "AI generates thoughtful comments that drive meaningful conversations.",
      color: "bg-purple-500",
    },
  ]

  return (
    <section className="py-20 dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400"
          >
            Get started with PostEngageAI in just a few simple steps
          </motion.p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500 to-purple-500 md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:grid md:grid-cols-2 md:gap-8"
              >
                <div className={`${index % 2 === 0 ? "md:text-right" : "md:order-2"}`}>
                  <div
                    className={`relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${step.color} md:mx-0 ${
                      index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                    }`}
                  >
                    {/* Connector to timeline */}
                    <div
                      className={`absolute hidden h-0.5 w-8 bg-gradient-to-r from-blue-500 to-purple-500 md:block ${
                        index % 2 === 0 ? "left-full top-1/2 -translate-y-1/2" : "right-full top-1/2 -translate-y-1/2"
                      }`}
                    />
                    {step.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
                </div>
                <div className={`hidden md:block ${index % 2 === 0 ? "md:order-2" : ""}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
