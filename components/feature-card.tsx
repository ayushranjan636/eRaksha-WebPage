import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  highlighted?: boolean
}

export default function FeatureCard({ icon, title, description, highlighted = false }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "p-6 rounded-lg border transition-all duration-300 hover:shadow-md",
        highlighted ? "border-purple-300 bg-purple-50" : "border-gray-200 bg-white",
      )}
    >
      <div className="mb-4">{icon}</div>
      <h3 className={cn("text-xl font-semibold mb-3", highlighted ? "text-purple-700" : "text-gray-900")}>{title}</h3>
      <p className="text-gray-600">{description}</p>
      {highlighted && (
        <div className="mt-4 inline-block text-sm font-medium text-purple-600">Our Unique Approach →</div>
      )}
    </div>
  )
}
