"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"

export function PricingTable() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals just getting started",
      price: {
        monthly: "Free",
        annual: "Free",
      },
      features: [
        {
          name: "LinkedIn automation",
          included: true,
        },
        {
          name: "5 automated comments per day",
          included: true,
        },
        {
          name: "10 automated likes per day",
          included: true,
        },
        {
          name: "Basic analytics",
          included: true,
        },
        {
          name: "Single platform",
          included: true,
        },
        {
          name: "Email support",
          included: false,
        },
        {
          name: "Custom comment templates",
          included: false,
        },
        {
          name: "API access",
          included: false,
        },
      ],
      cta: "Get Started",
      color: "from-gray-600 to-gray-800",
      popular: false,
    },
    {
      name: "Pro",
      description: "For professionals and small businesses",
      price: {
        monthly: "$19",
        annual: "$190",
      },
      features: [
        {
          name: "LinkedIn automation",
          included: true,
        },
        {
          name: "25 automated comments per day",
          included: true,
        },
        {
          name: "50 automated likes per day",
          included: true,
        },
        {
          name: "Advanced analytics",
          included: true,
        },
        {
          name: "Multi-platform support",
          included: true,
          tooltip: "LinkedIn, Twitter, and Instagram",
        },
        {
          name: "Priority email support",
          included: true,
        },
        {
          name: "Custom comment templates",
          included: true,
        },
        {
          name: "API access",
          included: false,
        },
      ],
      cta: "Get Started",
      color: "from-pink-500 to-purple-600",
      popular: true,
      savings: "Save $38",
    },
    {
      name: "Business",
      description: "For teams and growing businesses",
      price: {
        monthly: "$49",
        annual: "$490",
      },
      features: [
        {
          name: "LinkedIn automation",
          included: true,
        },
        {
          name: "Unlimited comments",
          included: true,
        },
        {
          name: "Unlimited likes",
          included: true,
        },
        {
          name: "Advanced analytics and reporting",
          included: true,
        },
        {
          name: "Multi-platform support",
          included: true,
          tooltip: "LinkedIn, Twitter, Instagram, and more",
        },
        {
          name: "24/7 priority support",
          included: true,
        },
        {
          name: "Custom comment templates",
          included: true,
        },
        {
          name: "API access",
          included: true,
        },
      ],
      cta: "Get Started",
      color: "from-indigo-500 to-blue-600",
      popular: false,
      savings: "Save $98",
    },
  ]

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
          Simple, <span className="text-white">Transparent Pricing</span>
        </h2>
        <p className="mx-auto max-w-2xl text-xl text-gray-300">
          Choose the plan that fits your needs with no hidden fees
        </p>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full border border-gray-800 bg-black/50 p-1 backdrop-blur-sm">
            <button
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                billingCycle === "monthly"
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                billingCycle === "annual"
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setBillingCycle("annual")}
            >
              Annual <span className="text-xs">(-20%)</span>
            </button>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        <TooltipProvider>
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl border ${
                plan.popular ? "border-pink-500/50 shadow-lg shadow-pink-500/10" : "border-gray-800"
              } bg-black/40 backdrop-blur-sm`}
            >
              {plan.popular && (
                <div className="absolute -right-12 top-6 rotate-45 bg-gradient-to-r from-pink-500 to-purple-500 px-12 py-1 text-sm font-medium text-white">
                  Most Popular
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-400">{plan.description}</p>
                <div className="mt-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-extrabold text-white">{plan.price[billingCycle]}</span>
                    {plan.price[billingCycle] !== "Free" && (
                      <span className="ml-2 text-gray-400">/{billingCycle === "monthly" ? "mo" : "yr"}</span>
                    )}
                  </div>
                  {billingCycle === "annual" && plan.savings && (
                    <p className="mt-1 text-sm text-pink-400">{plan.savings}</p>
                  )}
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-start">
                      <div
                        className={`mr-3 rounded-full p-0.5 ${
                          feature.included ? "bg-gradient-to-r from-green-400 to-green-500" : "bg-gray-700"
                        }`}
                      >
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black">
                          <Check className={`h-3 w-3 ${feature.included ? "text-green-400" : "text-gray-700"}`} />
                        </div>
                      </div>
                      <span className={`${feature.included ? "text-gray-200" : "text-gray-500"}`}>
                        {feature.name}
                        {feature.tooltip && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircle className="ml-1 inline h-4 w-4 cursor-help text-gray-500" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-black text-white">{feature.tooltip}</TooltipContent>
                          </Tooltip>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link href="/signup">
                    <Button
                      className={`w-full rounded-full bg-gradient-to-r ${plan.color} text-white hover:shadow-lg ${
                        plan.popular ? "hover:shadow-pink-500/20" : ""
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </TooltipProvider>
      </div>
    </>
  )
}
