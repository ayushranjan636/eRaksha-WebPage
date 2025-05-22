"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, BarChart, Shield, Home } from "lucide-react"

export function PhoneCompanion() {
  const [activeScreen, setActiveScreen] = useState(0)
  const screens = [
    {
      title: "Dashboard",
      icon: <Home className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-purple-100 rounded-lg p-4">
            <h4 className="font-medium text-purple-800 mb-1">Daily Summary</h4>
            <p className="text-sm text-gray-700">Your child spent 3h 45m online today</p>
            <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 rounded-full" style={{ width: "65%" }}></div>
            </div>
            <div className="mt-1 flex justify-between text-xs text-gray-500">
              <span>0h</span>
              <span>Daily limit: 6h</span>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium">App Usage</h4>
              <span className="text-xs text-purple-600">View All</span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>YouTube</span>
                  <span className="font-medium">1h 20m</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 rounded-full" style={{ width: "40%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Educational Apps</span>
                  <span className="font-medium">1h 45m</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: "55%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Games</span>
                  <span className="font-medium">40m</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 rounded-full" style={{ width: "20%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h4 className="font-medium mb-2">Recent Alerts</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm">
                <div className="h-4 w-4 rounded-full bg-yellow-100 flex items-center justify-center mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                </div>
                <div>
                  <p className="text-gray-800">Approaching screen time limit</p>
                  <p className="text-xs text-gray-500">15 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <div className="h-4 w-4 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                </div>
                <div>
                  <p className="text-gray-800">Blocked inappropriate content</p>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Activity",
      icon: <BarChart className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h4 className="font-medium mb-3">Weekly Activity</h4>
            <div className="flex items-end justify-between h-32 mb-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                <div key={day} className="flex flex-col items-center">
                  <div
                    className="w-6 bg-purple-500 rounded-t-sm"
                    style={{ height: `${[40, 65, 30, 80, 55, 90, 45][i]}%` }}
                  ></div>
                  <span className="text-xs mt-1 text-gray-500">{day}</span>
                </div>
              ))}
            </div>
            <div className="text-center text-sm text-gray-700 mt-2">Average: 3h 15m per day</div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h4 className="font-medium mb-2">Content Categories</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Educational</span>
                  <span>45%</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: "45%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Entertainment</span>
                  <span>30%</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "30%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Social Media</span>
                  <span>15%</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: "15%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Gaming</span>
                  <span>10%</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 rounded-full" style={{ width: "10%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Protection",
      icon: <Shield className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 rounded-lg p-4 border border-green-100">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-green-800">Protection Active</h4>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <p className="text-sm text-gray-700">All monitoring systems are working properly</p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h4 className="font-medium mb-3">Protection Stats</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-purple-50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-purple-700">24</div>
                <div className="text-xs text-gray-600">Harmful content blocked</div>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-blue-700">8</div>
                <div className="text-xs text-gray-600">Redirected searches</div>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-yellow-700">3</div>
                <div className="text-xs text-gray-600">Alerts sent</div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-green-700">12</div>
                <div className="text-xs text-gray-600">Educational redirects</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h4 className="font-medium mb-2">Protected Apps</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                    <div className="h-4 w-4 text-red-600">Y</div>
                  </div>
                  <span className="text-sm">YouTube</span>
                </div>
                <div className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Active</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <div className="h-4 w-4 text-blue-600">F</div>
                  </div>
                  <span className="text-sm">Facebook</span>
                </div>
                <div className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Active</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <div className="h-4 w-4 text-purple-600">I</div>
                  </div>
                  <span className="text-sm">Instagram</span>
                </div>
                <div className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Active</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const nextScreen = () => {
    setActiveScreen((prev) => (prev === screens.length - 1 ? 0 : prev + 1))
  }

  const prevScreen = () => {
    setActiveScreen((prev) => (prev === 0 ? screens.length - 1 : prev - 1))
  }

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center md:text-left md:w-1/3"
      >
        <h3 className="text-2xl font-bold mb-4">Monitor On The Go</h3>
        <p className="text-gray-600 mb-6">
          The eRaksha mobile app gives you complete visibility and control over your child's digital activities, no
          matter where you are.
        </p>
        <ul className="space-y-3 text-left">
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 text-green-500 mt-0.5">✓</div>
            <span>Real-time activity monitoring</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 text-green-500 mt-0.5">✓</div>
            <span>Instant alerts for concerning content</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 text-green-500 mt-0.5">✓</div>
            <span>Adjust settings remotely</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 text-green-500 mt-0.5">✓</div>
            <span>View detailed activity reports</span>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Phone frame */}
        <div className="w-[280px] h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-xl relative">
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-full"></div>
          <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden flex flex-col">
            {/* Phone header */}
            <div className="bg-purple-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  <span className="font-medium">eRaksha Parent</span>
                </div>
                <div className="text-xs">4:20 PM</div>
              </div>
            </div>

            {/* Navigation tabs */}
            <div className="flex border-b">
              {screens.map((screen, index) => (
                <button
                  key={screen.title}
                  onClick={() => setActiveScreen(index)}
                  className={`flex-1 py-3 text-xs font-medium flex flex-col items-center gap-1 ${
                    activeScreen === index ? "text-purple-600 border-b-2 border-purple-600" : "text-gray-500"
                  }`}
                >
                  {screen.icon}
                  <span>{screen.title}</span>
                </button>
              ))}
            </div>

            {/* Content area with scrollbar */}
            <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {screens[activeScreen].content}
            </div>

            {/* Bottom navigation */}
            <div className="bg-white border-t p-3 flex justify-between items-center">
              <button
                onClick={prevScreen}
                className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>

              <div className="flex space-x-1">
                {screens.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 w-1.5 rounded-full ${activeScreen === index ? "bg-purple-600" : "bg-gray-300"}`}
                  ></div>
                ))}
              </div>

              <button
                onClick={nextScreen}
                className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
