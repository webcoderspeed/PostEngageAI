"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "PostEngageAI has completely transformed our LinkedIn strategy. We've seen a 300% increase in engagement and dozens of new leads. The AI-generated comments are incredibly natural and have helped us build meaningful connections.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Startup Founder",
      company: "InnovateLabs",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "As a founder, I don't have time to manage social media. This tool has been a game-changer for building our brand presence. The automation is seamless, and the analytics help us understand what content resonates with our audience.",
      rating: 5,
    },
    {
      id: 3,
      name: "Jessica Williams",
      role: "Content Creator",
      company: "Digital Nomad",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "The AI-generated comments are incredibly natural. My audience engagement has skyrocketed since I started using PostEngageAI. I can focus on creating great content while the platform handles the engagement strategy.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

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
          Trusted by <span className="text-white">Industry Leaders</span>
        </h2>
        <p className="mx-auto max-w-2xl text-xl text-gray-300">
          See how professionals and businesses are transforming their social media presence
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute -left-4 -top-4 h-20 w-20 text-pink-500/20">
          <Quote className="h-full w-full" />
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-1 backdrop-blur-sm">
          <div className="rounded-xl bg-gradient-to-br from-gray-900 to-black p-8 md:p-12">
            <div className="relative min-h-[300px]">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: index === activeIndex ? 1 : 0,
                    x: index === activeIndex ? 0 : 100,
                    position: index === activeIndex ? "relative" : "absolute",
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <div className="mb-8 text-center md:text-left">
                    <div className="flex flex-col items-center md:flex-row">
                      <Avatar className="h-20 w-20 border-2 border-purple-500/30">
                        <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 text-white">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="mt-4 md:ml-6 md:mt-0">
                        <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                        <p className="text-gray-400">
                          {testimonial.role}, {testimonial.company}
                        </p>
                        <div className="mt-2 flex justify-center md:justify-start">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < testimonial.rating ? "fill-yellow-500 text-yellow-500" : "text-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-center text-xl leading-relaxed text-gray-300 md:text-left md:text-2xl">
                    "{testimonial.quote}"
                  </blockquote>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-gray-800 bg-black/50 hover:bg-black/70 hover:text-pink-400"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous testimonial</span>
          </Button>
          <div className="flex items-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === activeIndex ? "bg-gradient-to-r from-pink-500 to-purple-500" : "bg-gray-700"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="sr-only">Testimonial {index + 1}</span>
              </button>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-gray-800 bg-black/50 hover:bg-black/70 hover:text-pink-400"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>
    </>
  )
}
