"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Eye, Clock, Bell, Lock, BarChart, Heart, ArrowRight, Smartphone, Globe, Brain } from "lucide-react"
import FeatureCard from "@/components/feature-card"
import { motion } from "framer-motion"

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/eraksha.png" alt="eRaksha Logo" width={120} height={80} />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/features" className="text-sm font-medium text-purple-600 border-b-2 border-purple-600 pb-1">
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
        <section className="bg-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Features</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Discover how eRaksha's powerful features work together to create a safer digital environment for your
                children.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Feature Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-purple-50 p-8 rounded-xl border border-purple-100"
              >
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Protection</h3>
                <p className="text-gray-600 mb-4">
                  Advanced monitoring and filtering tools that keep your children safe from harmful content.
                </p>
                <a href="#protection" className="text-purple-600 font-medium flex items-center gap-1 text-sm">
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-blue-50 p-8 rounded-xl border border-blue-100"
              >
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Intelligence</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered insights and analytics that help you understand your child's digital behavior.
                </p>
                <a href="#intelligence" className="text-blue-600 font-medium flex items-center gap-1 text-sm">
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-green-50 p-8 rounded-xl border border-green-100"
              >
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Control</h3>
                <p className="text-gray-600 mb-4">
                  Powerful tools that give you complete control over your child's digital experience.
                </p>
                <a href="#control" className="text-green-600 font-medium flex items-center gap-1 text-sm">
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </div>

            {/* Protection Features */}
            <div id="protection" className="mb-20 scroll-mt-20">
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-4">Protection Features</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Our comprehensive protection features keep your children safe from harmful content and digital
                    threats.
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  icon={<Globe className="h-10 w-10 text-purple-600" />}
                  title="Web Filtering"
                  description="Advanced filtering technology that blocks inappropriate websites and content based on customizable categories."
                />

                <FeatureCard
                  icon={<Bell className="h-10 w-10 text-purple-600" />}
                  title="Alert System"
                  description="Instant notifications about potential risks, inappropriate content, or concerning digital behavior."
                />

                <FeatureCard
                  icon={<Shield className="h-10 w-10 text-purple-600" />}
                  title="Social Media Protection"
                  description="Monitor and filter content on popular social media platforms to protect against cyberbullying and predators."
                />

                <FeatureCard
                  icon={<Lock className="h-10 w-10 text-purple-600" />}
                  title="Safe Search Enforcement"
                  description="Ensures that search engines only return age-appropriate results for your child's queries."
                />
              </div>
            </div>

            {/* Intelligence Features */}
            <div id="intelligence" className="mb-20 scroll-mt-20">
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-4">Intelligence Features</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Our AI-powered intelligence features provide insights and analytics to help you understand your
                    child's digital behavior.
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<Brain className="h-10 w-10 text-blue-600" />}
                  title="AI-Powered Risk Detection"
                  description="Advanced algorithms that detect signs of cyberbullying, grooming, anxiety, addiction, and other risks."
                />

                <FeatureCard
                  icon={<BarChart className="h-10 w-10 text-blue-600" />}
                  title="Usage Analytics"
                  description="Detailed reports on app usage, screen time, content consumption, and digital habits."
                />

                <FeatureCard
                  icon={<Bell className="h-10 w-10 text-blue-600" />}
                  title="Smart Notifications"
                  description="Intelligent alerts that provide meaningful insights, not just raw data about your child's activities."
                />

                <FeatureCard
                  icon={<Heart className="h-10 w-10 text-blue-600" />}
                  title="Sentiment Analysis"
                  description="Detects shifts in emotional tone of interactions to identify potential issues early."
                  highlighted={true}
                />

                <FeatureCard
                  icon={<Globe className="h-10 w-10 text-blue-600" />}
                  title="Content Classification"
                  description="Automatically categorizes digital content based on educational value, entertainment, and potential risks."
                />

                <FeatureCard
                  icon={<Shield className="h-10 w-10 text-blue-600" />}
                  title="Behavioral Patterns"
                  description="Identifies patterns in digital behavior to help parents understand their child's online habits."
                />
              </div>
            </div>

            {/* Control Features */}
            <div id="control" className="scroll-mt-20">
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-4">Control Features</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Our powerful control features give you complete control over your child's digital experience.
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<Lock className="h-10 w-10 text-green-600" />}
                  title="App Blocking"
                  description="Block or limit access to specific apps and games based on content, time, or other factors."
                />

                <FeatureCard
                  icon={<Clock className="h-10 w-10 text-green-600" />}
                  title="Screen Time Management"
                  description="Set daily time limits for device usage, specific apps, or content categories."
                  highlighted={true}
                />

                <FeatureCard
                  icon={<Smartphone className="h-10 w-10 text-green-600" />}
                  title="Remote Device Control"
                  description="Pause internet access, lock devices, or adjust settings remotely from your parent dashboard."
                />

                <FeatureCard
                  icon={<Shield className="h-10 w-10 text-green-600" />}
                  title="Custom Safety Routines"
                  description="Create scheduled routines like Study Mode, Bedtime Mode, or Family Time with preset restrictions."
                />

                <FeatureCard
                  icon={<Bell className="h-10 w-10 text-green-600" />}
                  title="Location Tracking"
                  description="Monitor your child's location in real-time with geofencing alerts for added safety."
                />

                <FeatureCard
                  icon={<Heart className="h-10 w-10 text-green-600" />}
                  title="Content Personalization"
                  description="Customize content recommendations based on your child's age, interests, and learning goals."
                />
              </div>
            </div>
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
              <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Child's Digital Life?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get started with eRaksha today and transform your approach to digital parenting.
              </p>
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
