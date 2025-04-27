"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { QuoteIcon } from "lucide-react"

type TestimonialCardProps = {
  name: string
  role: string
  company: string
  image: string
  quote: string
  delay?: number
}

export function TestimonialCard({ name, role, company, image, quote, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-8 transition-all hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
    >
      <div className="mb-6 flex items-center">
        <div className="mr-4 overflow-hidden rounded-full border border-gray-700">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={50}
            height={50}
            className="h-12 w-12 object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-400">
            {role}, {company}
          </p>
        </div>
      </div>
      <div className="relative">
        <QuoteIcon className="absolute -left-1 -top-1 h-6 w-6 text-purple-500/30" />
        <p className="mb-4 pl-5 text-gray-300">{quote}</p>
      </div>
    </motion.div>
  )
}
