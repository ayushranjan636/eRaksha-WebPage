import Image from "next/image"

interface TestimonialCardProps {
  title: string
  description: string
  image: string
}

export default function TestimonialCard({ title, description, image }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative h-16 w-16 rounded-full overflow-hidden">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
