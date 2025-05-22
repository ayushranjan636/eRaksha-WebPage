"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Users, School, Heart, Home, Building } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"


export default function UseCasesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-purple-600" />
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
            <Link href="/use-cases" className="text-sm font-medium text-purple-600 border-b-2 border-purple-600 pb-1">
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Who Uses eRaksha?</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Discover how different groups are using eRaksha to create safer digital environments for children.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Use Cases Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">eRaksha for Everyone</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  eRaksha is designed to meet the needs of various groups concerned with children's digital safety and
                  well-being.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader className="pb-4">
                    <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>Parents & Families</CardTitle>
                    <CardDescription>For parents seeking awareness and control, not just surveillance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Parents use eRaksha to gain insights into their children's digital activities while maintaining
                      trust and fostering healthy digital habits.
                    </p>
                    <Link href="#parents" className="text-purple-600 font-medium text-sm">
                      Learn more →
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader className="pb-4">
                    <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <School className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>Schools & Educators</CardTitle>
                    <CardDescription>For schools needing a managed learning environment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Educational institutions implement eRaksha to create safe digital learning environments while
                      teaching responsible technology use.
                    </p>
                    <Link href="#schools" className="text-purple-600 font-medium text-sm">
                      Learn more →
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader className="pb-4">
                    <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Heart className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>Children & Teens</CardTitle>
                    <CardDescription>For children needing safe autonomy in the digital world</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Children benefit from eRaksha's protection while maintaining age-appropriate independence and
                      developing healthy digital habits.
                    </p>
                    <Link href="#children" className="text-purple-600 font-medium text-sm">
                      Learn more →
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader className="pb-4">
                    <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Home className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>NGOs & Non-Profits</CardTitle>
                    <CardDescription>For organizations promoting digital safety in education</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Non-profit organizations partner with eRaksha to advance their mission of protecting children in
                      the digital age.
                    </p>
                    <Link href="#ngos" className="text-purple-600 font-medium text-sm">
                      Learn more →
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader className="pb-4">
                    <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Building className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>Government Programs</CardTitle>
                    <CardDescription>For government initiatives focused on child digital safety</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Government agencies implement eRaksha as part of broader initiatives to protect children online
                      and promote digital literacy.
                    </p>
                    <Link href="#government" className="text-purple-600 font-medium text-sm">
                      Learn more →
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader className="pb-4">
                    <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>Digital Families</CardTitle>
                    <CardDescription>For families seeking balance in their digital lives</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Modern families use eRaksha to establish healthy boundaries and foster positive digital
                      citizenship among all family members.
                    </p>
                    <Link href="#digital-families" className="text-purple-600 font-medium text-sm">
                      Learn more →
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Parents Use Case */}
        <section id="parents" className="py-16 bg-gray-50 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <h2 className="text-3xl font-bold mb-6">For Parents & Families</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Modern parenting requires a balanced approach to technology. eRaksha helps parents navigate this
                  challenge by providing tools that protect children while fostering trust and digital literacy.
                </p>
                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 text-green-500 mt-0.5">✓</div>
                    <div>
                      <h4 className="font-semibold">Real-time Insights</h4>
                      <p className="text-gray-600">
                        Gain visibility into your child's digital activities without invasive monitoring.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 text-green-500 mt-0.5">✓</div>
                    <div>
                      <h4 className="font-semibold">Customizable Controls</h4>
                      <p className="text-gray-600">Set age-appropriate boundaries that evolve as your child grows.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 text-green-500 mt-0.5">✓</div>
                    <div>
                      <h4 className="font-semibold">Educational Redirection</h4>
                      <p className="text-gray-600">
                        Transform potentially harmful content into learning opportunities.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 text-green-500 mt-0.5">✓</div>
                    <div>
                      <h4 className="font-semibold">Family Discussion Tools</h4>
                      <p className="text-gray-600">
                        Resources to help families have productive conversations about digital citizenship.
                      </p>
                    </div>
                  </div>
                </div>
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
                    alt="Family using eRaksha"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold mb-2">Parent Testimonial</h4>
                  <p className="text-gray-600 italic">
                    "eRaksha has transformed how our family approaches technology. Instead of constant battles over
                    screen time, we now have meaningful conversations about digital citizenship. The insights we get
                    help us guide our children without hovering over them."
                  </p>
                  <p className="text-sm text-gray-500 mt-2">— Sarah M., mother of two</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Schools Use Case */}
        <section id="schools" className="py-16 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <h2 className="text-3xl font-bold mb-6">For Schools & Educators</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Educational institutions face unique challenges in creating safe digital learning environments.
                  eRaksha provides schools with comprehensive tools to protect students while teaching responsible
                  technology use.
                </p>
                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 text-green-500 mt-0.5">✓</div>
                    <div>
                      <h4 className="font-semibold">Classroom Management</h4>
                      <p className="text-gray-600">
                        Tools to keep students focused and safe during digital learning activities.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 text-green-500 mt-0.5">✓</div>
                    <div>
                      <h4 className="font-semibold">Educational Content Filtering</h4>
                      <p className="text-gray-600">
                        Ensure students access age-appropriate content that supports learning objectives.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 text-green-500 mt-0.5">✓</div>
                    <div>
                      <h4 className="font-semibold">Digital Citizenship Curriculum</h4>
                      <p className="text-gray-600">Resources to teach students about responsible online behavior.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 text-green-500 mt-0.5">✓</div>
                    <div>
                      <h4 className="font-semibold">Parent-Teacher Collaboration</h4>
                      <p className="text-gray-600">
                        Tools that facilitate communication between educators and parents about digital learning.
                      </p>
                    </div>
                  </div>
                </div>
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
                    alt="School using eRaksha"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold mb-2">Educator Testimonial</h4>
                  <p className="text-gray-600 italic">
                    "Implementing eRaksha across our school district has been transformative. We've seen a significant
                    reduction in cyberbullying incidents, and students are more engaged in learning when they know
                    they're in a safe digital environment."
                  </p>
                  <p className="text-sm text-gray-500 mt-2">— Dr. James L., School District Technology Director</p>
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
              <h2 className="text-3xl font-bold mb-6">Find Your eRaksha Solution</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Whether you're a parent, educator, or organization, eRaksha has a solution tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Compare Plans
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
