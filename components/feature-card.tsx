"use client"

import { motion } from "framer-motion"
import { Brain, Sparkles, BarChart, Clock, Shield, Zap } from "lucide-react"

type FeatureCardProps = {
  icon: "brain" | "sparkles" | "chart" | "clock" | "shield" | "zap"
  title: string
  description: string
  delay?: number
}

export function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  const icons = {
    brain: <Brain className="h-10 w-10 text-purple-400" />,
    sparkles: <Sparkles className="h-10 w-10 text-blue-400" />,
    chart: <BarChart className="h-10 w-10 text-purple-400" />,
    clock: <Clock className="h-10 w-10 text-blue-400" />,
    shield: <Shield className="h-10 w-10 text-purple-400" />,
    zap: <Zap className="h-10 w-10 text-blue-400" />,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-8 transition-all hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
    >
      <div className="mb-6">{icons[icon]}</div>
      <h3 className="mb-4 text-2xl font-bold">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}
