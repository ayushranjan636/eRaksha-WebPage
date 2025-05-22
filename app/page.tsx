"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Eye, Lock, Heart, ArrowRight } from "lucide-react"
import FeatureCard from "@/components/feature-card"
import { HeroSection } from "@/components/hero-section"
import { PhoneCompanion } from "@/components/phone-companion"
import { motion } from "framer-motion"
import Image from "next/image"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/eraksha.png" alt="eRaksha Logo" width={32} height={32} />
            <span className="text-xl font-bold">eRaksha</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/features" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Features
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="/security" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Security
            </Link>
            <Link href="/use-cases" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Use Cases
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:inline-flex">
              Log In
            </Button>
            <Link href="/get-started">
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* What is eRaksha */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">What is eRaksha?</h2>
                <p className="text-lg text-gray-700 mb-8">
                  eRaksha is an advanced AI-powered parental control system designed to protect, monitor, and guide
                  children's digital lives. Built as an integral part of the SlateMate ecosystem, it offers real-time
                  visibility, control, and customization over the content and platforms children engage with—turning
                  harmful exposure into positive digital learning experiences.
                </p>
                <div className="bg-purple-100 p-6 rounded-lg border border-purple-200">
                  <h3 className="text-xl font-semibold mb-3 text-purple-800">Core Vision</h3>
                  <p className="text-gray-700">
                    Today's children are not just growing with technology—they're growing inside it. eRaksha ensures
                    they grow safely, smartly, and confidently.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Phone Companion Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Mobile Companion App</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Monitor and protect your child's digital activities on the go with our intuitive mobile companion app.
                </p>
              </motion.div>
            </div>

            <PhoneCompanion />
          </div>
        </section>

        {/* Key Features Preview */}
        <section id="features-preview" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-center mb-12">Key Features & Capabilities</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<Eye className="h-10 w-10 text-purple-600" />}
                  title="Real-Time Content Monitoring"
                  description="Scans websites, apps, videos, chats, and social media content using AI/NLP to detect harmful material."
                />

                <FeatureCard
                  icon={<Heart className="h-10 w-10 text-purple-600" />}
                  title="Harmful to Harmless™ Engine"
                  description="Instead of simply blocking, eRaksha transforms or redirects harmful content to educational alternatives."
                  highlighted={true}
                />

                <FeatureCard
                  icon={<Lock className="h-10 w-10 text-purple-600" />}
                  title="Parental Control Suite"
                  description="Web filtering, app blocking, internet pausing, custom routines, and time limits for complete control."
                />
              </div>

              <div className="text-center mt-10">
                <Link href="/features">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    View All Features <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Digital Parenting?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">From Harmful to Harmless – Parenting, Reinvented.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Learn More
                </Button>
                <Link href="/get-started">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                    Get Started
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-purple-400" />
                <span className="text-lg font-bold text-white">eRaksha</span>
              </div>
              <p className="text-sm">
                Turning Harmful to Harmless – Empowering digital parenting through AI-driven safety.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/features" className="hover:text-purple-400 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="hover:text-purple-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>© {new Date().getFullYear()} SlateMate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
