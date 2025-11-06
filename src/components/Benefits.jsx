import React from 'react'
import { Star, Leaf, Heart } from 'lucide-react'

const benefits = [
  {
    title: "A collection created from a child's imagination and a parent's eye for design.",
    icon: Star,
  },
  {
    title:
      'Crafted exclusively from robinia hardwood — natural, toxin-free, and built to last over 40 years.',
    icon: Leaf,
  },
  {
    title:
      'Every piece is thoughtfully designed with child development at its heart.',
    icon: Heart,
  },
]

const Benefits = () => {
  return (
    <section className="bg-[#faf6f0] py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map(({ title, icon: Icon }, i) => (
            <div
              key={i}
              className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <p className="text-neutral-800 leading-relaxed font-medium">
                  {title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
