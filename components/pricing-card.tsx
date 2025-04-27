"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type PricingCardProps = {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant: "default" | "outline"
  highlighted?: boolean
  delay?: number
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted = false,
  delay = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`relative rounded-xl border ${
        highlighted ? "border-purple-500/50 shadow-lg shadow-purple-500/10" : "border-gray-800"
      } bg-gradient-to-br ${highlighted ? "from-purple-900/20 to-black" : "from-gray-900 to-black"} p-8`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-1 text-sm font-medium text-white">
          Most Popular
        </div>
      )}
      <div className="mb-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          {period && <span className="text-gray-400">{period}</span>}
        </div>
        <p className="mt-2 text-sm text-gray-400">{description}</p>
      </div>
      <ul className="mb-6 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center">
            <Check className="mr-2 h-5 w-5 text-green-500" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Link href="/signup">
        <Button
          className={`w-full ${
            buttonVariant === "default"
              ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
              : "border-gray-700 bg-black/50 text-white hover:bg-black/70"
          }`}
        >
          {buttonText}
        </Button>
      </Link>
    </motion.div>
  )
}
