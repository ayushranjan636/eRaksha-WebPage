"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Shield, Smartphone, Users, Check, ArrowRight, ArrowLeft } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const steps = [
  {
    id: "account",
    title: "Create Account",
    description: "Set up your parent account",
  },
  {
    id: "children",
    title: "Add Children",
    description: "Add your children's profiles",
  },
  {
    id: "devices",
    title: "Connect Devices",
    description: "Link your children's devices",
  },
  {
    id: "preferences",
    title: "Set Preferences",
    description: "Configure protection settings",
  },
  {
    id: "complete",
    title: "Complete",
    description: "You're all set!",
  },
]

export function SetupWizard() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    childName: "",
    childAge: "",
    deviceType: "smartphone",
    contentFiltering: true,
    screenTimeLimit: true,
    appBlocking: true,
    locationTracking: false,
  })

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div>
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm font-medium">{steps[currentStep].title}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="border-2 border-purple-100">
            <CardHeader>
              <CardTitle>{steps[currentStep].title}</CardTitle>
              <CardDescription>{steps[currentStep].description}</CardDescription>
            </CardHeader>
            <CardContent>
              {currentStep === 0 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => updateFormData("password", e.target.value)}
                    />
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-purple-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-sm">Your privacy matters</h4>
                        <p className="text-xs text-gray-600 mt-1">
                          We use industry-leading security measures to protect your family's data. Your information is
                          never sold to third parties.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="childName">Child's Name</Label>
                    <Input
                      id="childName"
                      placeholder="Enter name"
                      value={formData.childName}
                      onChange={(e) => updateFormData("childName", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="childAge">Child's Age</Label>
                    <Input
                      id="childAge"
                      type="number"
                      placeholder="Enter age"
                      min="1"
                      max="17"
                      value={formData.childAge}
                      onChange={(e) => updateFormData("childAge", e.target.value)}
                    />
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-sm">Age-appropriate protection</h4>
                        <p className="text-xs text-gray-600 mt-1">
                          eRaksha automatically adjusts protection levels based on your child's age, providing
                          age-appropriate safeguards.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Device Type</Label>
                    <RadioGroup
                      value={formData.deviceType}
                      onValueChange={(value) => updateFormData("deviceType", value)}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="smartphone" id="smartphone" />
                        <Label htmlFor="smartphone" className="cursor-pointer">
                          Smartphone
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="tablet" id="tablet" />
                        <Label htmlFor="tablet" className="cursor-pointer">
                          Tablet
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="computer" id="computer" />
                        <Label htmlFor="computer" className="cursor-pointer">
                          Computer
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <div className="flex items-start gap-3">
                      <Smartphone className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-sm">Easy device setup</h4>
                        <p className="text-xs text-gray-600 mt-1">
                          After completing this wizard, you'll receive simple instructions to install eRaksha on your
                          child's device.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Protection Features</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="contentFiltering"
                          checked={formData.contentFiltering}
                          onCheckedChange={(checked) => updateFormData("contentFiltering", checked)}
                        />
                        <Label htmlFor="contentFiltering" className="cursor-pointer">
                          Content Filtering
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="screenTimeLimit"
                          checked={formData.screenTimeLimit}
                          onCheckedChange={(checked) => updateFormData("screenTimeLimit", checked)}
                        />
                        <Label htmlFor="screenTimeLimit" className="cursor-pointer">
                          Screen Time Limits
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="appBlocking"
                          checked={formData.appBlocking}
                          onCheckedChange={(checked) => updateFormData("appBlocking", checked)}
                        />
                        <Label htmlFor="appBlocking" className="cursor-pointer">
                          App Blocking
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="locationTracking"
                          checked={formData.locationTracking}
                          onCheckedChange={(checked) => updateFormData("locationTracking", checked)}
                        />
                        <Label htmlFor="locationTracking" className="cursor-pointer">
                          Location Tracking
                        </Label>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-purple-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-sm">Customizable protection</h4>
                        <p className="text-xs text-gray-600 mt-1">
                          You can adjust these settings at any time from your parent dashboard after setup is complete.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="text-center py-6">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Setup Complete!</h3>
                  <p className="text-gray-600 mb-6">
                    Your eRaksha parental control system is now set up. You're ready to start protecting your child's
                    digital life.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 text-left">
                      <h4 className="font-medium text-sm mb-2">Next Steps:</h4>
                      <ul className="text-xs text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="h-4 w-4 text-purple-600 mt-0.5">1.</div>
                          <span>Install the eRaksha app on your child's device</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-4 w-4 text-purple-600 mt-0.5">2.</div>
                          <span>Customize protection settings in your parent dashboard</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-4 w-4 text-purple-600 mt-0.5">3.</div>
                          <span>Set up additional children and devices as needed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
                className={currentStep === 0 ? "invisible" : ""}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              {currentStep < steps.length - 1 ? (
                <Button onClick={nextStep} className="bg-purple-600 hover:bg-purple-700">
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </CardFooter>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
