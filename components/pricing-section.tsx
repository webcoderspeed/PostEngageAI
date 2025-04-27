"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "For individuals just getting started",
      features: [
        "LinkedIn automation",
        "5 automated comments per day",
        "10 automated likes per day",
        "Basic analytics",
      ],
      cta: "Join Waitlist",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "For professionals and small businesses",
      features: [
        "LinkedIn automation",
        "25 automated comments per day",
        "50 automated likes per day",
        "Advanced analytics",
        "Priority support",
        "Custom comment templates",
      ],
      cta: "Join Waitlist",
      highlighted: true,
    },
    {
      name: "Business",
      price: "$49",
      period: "/month",
      description: "For teams and growing businesses",
      features: [
        "LinkedIn automation",
        "Unlimited comments and likes",
        "Multi-platform support (coming soon)",
        "Team collaboration",
        "Advanced analytics and reporting",
        "API access",
        "Dedicated account manager",
      ],
      cta: "Join Waitlist",
      highlighted: false,
    },
  ]

  return (
    <section className="py-20 dark:bg-slate-900" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400"
          >
            Choose the plan that fits your needs
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-xl border ${
                plan.highlighted
                  ? "border-purple-500 shadow-lg shadow-purple-500/10"
                  : "border-slate-200 dark:border-slate-700"
              } bg-white p-6 dark:bg-slate-800`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 text-sm font-medium text-white">
                  Most Popular
                </div>
              )}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{plan.name}</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                  {plan.period && <span className="text-slate-600 dark:text-slate-400">{plan.period}</span>}
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{plan.description}</p>
              </div>
              <ul className="mb-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
