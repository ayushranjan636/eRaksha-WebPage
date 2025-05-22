"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Lock, FileCheck, Database, Key, CheckCircle } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function SecurityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/eraksha.png" alt="eRaksha Logo" width={120} height={80} />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/features" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Features
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="/security" className="text-sm font-medium text-purple-600 border-b-2 border-purple-600 pb-1">
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Security & Privacy</h1>
              <p className="text-xl max-w-2xl mx-auto">
                We take the security and privacy of your family's data seriously. Learn about our comprehensive approach
                to keeping your information safe.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Security Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <h2 className="text-3xl font-bold mb-6">Our Security Commitment</h2>
                <p className="text-lg text-gray-700 mb-4">
                  At eRaksha, we understand that we're handling sensitive information about your family. That's why
                  security and privacy are foundational to everything we build.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Our platform is designed with a "security-first" approach, implementing industry-leading practices and
                  technologies to ensure your data remains protected at all times.
                </p>
                <p className="text-lg text-gray-700">
                  We're committed to transparency about how we handle your data and giving you control over your
                  information. We only collect what's necessary to provide our services and never sell your data to
                  third parties.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Security Visualization"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Security & Privacy Features</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Our comprehensive security measures ensure your family's data is protected at every level.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">End-to-End Encryption</h3>
                <p className="text-gray-600">
                  All data transmitted between your devices and our servers is encrypted using industry-standard
                  protocols, ensuring it can't be intercepted or read by unauthorized parties.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Key className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Role-Based Access</h3>
                <p className="text-gray-600">
                  Our platform allows you to define specific access levels for different guardians, ensuring each person
                  only sees the information they need.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Secure Data Storage</h3>
                <p className="text-gray-600">
                  Your data is stored in secure, redundant data centers with multiple layers of protection, including
                  physical security, network security, and access controls.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Regulatory Compliance</h3>
                <p className="text-gray-600">
                  We comply with major privacy regulations including GDPR, India's DPDP, and COPPA, ensuring we meet or
                  exceed legal requirements for protecting children's data.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">No Data Resale</h3>
                <p className="text-gray-600">
                  Unlike many tech companies, we never sell your data to advertisers or third parties. Your information
                  is used solely to provide and improve our services.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Regular Security Audits</h3>
                <p className="text-gray-600">
                  We conduct regular security audits and penetration testing to identify and address potential
                  vulnerabilities before they can be exploited.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Security Diagram */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">How We Protect Your Data</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Our multi-layered security approach ensures protection at every stage of data processing.
                </p>
              </motion.div>
            </div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                  <div className="relative h-[400px] w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Security Architecture Diagram"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Data Control */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <h2 className="text-3xl font-bold mb-6">Your Data, Your Control</h2>
                <p className="text-lg text-gray-700 mb-4">
                  We believe that you should have complete control over your family's data. That's why we provide
                  comprehensive tools to manage your information.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 text-green-500 mt-0.5">✓</div>
                    <div>
                      <h4 className="font-semibold">Data Export</h4>
                      <p className="text-gray-600">Download all your data in a standard format at any time.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 text-green-500 mt-0.5">✓</div>
                    <div>
                      <h4 className="font-semibold">Data Deletion</h4>
                      <p className="text-gray-600">
                        Permanently delete your data from our systems with a simple request.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 text-green-500 mt-0.5">✓</div>
                    <div>
                      <h4 className="font-semibold">Privacy Settings</h4>
                      <p className="text-gray-600">
                        Customize what data is collected and how it's used through granular privacy controls.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 text-green-500 mt-0.5">✓</div>
                    <div>
                      <h4 className="font-semibold">Transparency</h4>
                      <p className="text-gray-600">
                        Clear, plain-language privacy policies that explain exactly how we use your data.
                      </p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Privacy Control Center</h3>
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Activity Data Collection</h4>
                        <div className="w-12 h-6 bg-purple-600 rounded-full relative">
                          <div className="absolute right-1 top-1 bg-white h-4 w-4 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Collect data about your child's app usage and online activities to provide insights and
                        protection.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Content Analysis</h4>
                        <div className="w-12 h-6 bg-purple-600 rounded-full relative">
                          <div className="absolute right-1 top-1 bg-white h-4 w-4 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Analyze content your child interacts with to detect and block harmful material.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Location Tracking</h4>
                        <div className="w-12 h-6 bg-gray-300 rounded-full relative">
                          <div className="absolute left-1 top-1 bg-white h-4 w-4 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">Track your child's location for safety purposes.</p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Anonymous Analytics</h4>
                        <div className="w-12 h-6 bg-gray-300 rounded-full relative">
                          <div className="absolute left-1 top-1 bg-white h-4 w-4 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">Share anonymous usage data to help improve our services.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
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
              <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Family?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get started with eRaksha today and experience peace of mind with our secure, privacy-focused parental
                control solution.
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
