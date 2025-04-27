"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "How does PostEngageAI work?",
      answer:
        "PostEngageAI uses artificial intelligence to analyze posts on LinkedIn and generate relevant, personalized comments and likes. After you connect your LinkedIn account, our AI will engage with content based on your preferences and settings.",
    },
    {
      question: "Is it safe to connect my LinkedIn account?",
      answer:
        "Yes, we prioritize your security and privacy. We use OAuth for secure authentication and never store your passwords. All data is encrypted, and you can revoke access at any time.",
    },
    {
      question: "When will PostEngageAI launch?",
      answer:
        "We're currently in the final stages of development and plan to launch soon. Subscribe to our newsletter to be the first to know when we go live!",
    },
    {
      question: "Which social media platforms will be supported?",
      answer:
        "We're starting with LinkedIn automation, but we plan to expand to other platforms like Instagram, Twitter, and more in the near future.",
    },
    {
      question: "Can I customize the AI-generated comments?",
      answer:
        "You can set your tone preferences, provide sample comments, and even create templates for the AI to follow. The more you customize, the more personalized your engagement will be.",
    },
    {
      question: "What if I want to cancel my subscription?",
      answer:
        "You can cancel your subscription at any time from your account settings. There are no long-term contracts or cancellation fees.",
    },
  ]

  return (
    <section className="py-20 dark:bg-slate-800" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400"
          >
            Everything you need to know about PostEngageAI
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-slate-900 dark:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-300">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
