"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-purple-300 rounded-full opacity-20 blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-purple-600">eRaksha</span> – Intelligent Parental Control
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Turning Harmful to Harmless – Empowering digital parenting through AI-driven safety, smart insights, and
              content transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/get-started">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Get Started
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-2">
                <div className="bg-green-100 p-1 rounded-full">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm">AI-Powered Protection</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-100 p-1 rounded-full">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm">Real-time Monitoring</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-100 p-1 rounded-full">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm">Privacy Focused</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="eRaksha Dashboard"
                fill
                className="object-cover"
                priority
              />

              {/* Floating UI elements for visual interest */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -right-6 -top-6 bg-white p-4 rounded-lg shadow-lg border border-gray-200 w-48"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="text-xs font-medium">Alert Detected</div>
                </div>
                <div className="text-xs text-gray-600">Potential harmful content blocked on YouTube</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -left-6 -bottom-6 bg-white p-4 rounded-lg shadow-lg border border-gray-200 w-48"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <div className="text-xs font-medium">Screen Time</div>
                </div>
                <div className="text-xs text-gray-600">2h 15m of educational content today</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
