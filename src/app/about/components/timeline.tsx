'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface TimelineItem {
  year: string
  title: string
  description: string
  image: string
}

const timelineData: TimelineItem[] = [
  {
    year: '1923',
    title: 'Foundation of Betar',
    description: 'Betar was founded in Riga, Latvia, as a youth movement to foster leadership, strength, and pride. Core Values: Focus on self-defense, pioneering spirit, and commitment to community building.',
    image: '/6168a07883eb7a4998f333689e0a61b9.jpeg'
  },
  {
    year: '1948',
    title: 'Historical Milestone',
    description: 'A significant year marked by important developments and progress in the organization\'s mission and goals.',
    image: '/7df5457cdfcf6e74ba3c34057c68eac8.png'
  },
  {
    year: '1950',
    title: 'New Era Begins',
    description: 'The organization enters a new phase of growth and development, expanding its reach and impact.',
    image: '/8492adf31a79aeaf6bacb0a1b6174daf.png'
  }
]

export default function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < timelineData.length - 1 ? prev + 1 : prev))
  }

  return (
    <div className="overflow-hidden pb-24 sm:pb-32 w-full">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between border-b border-foreground mb-8 pb-4">
          <h1 className="text-2xl font-bold">Timeline</h1>
          <div className="flex items-center gap-4">
            <span className="text-lg">
              {currentIndex + 1}/{timelineData.length}
            </span>
            <div className="flex gap-2">
              <Button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                size="icon"
                variant="ghost"
              >
                <ArrowLeft className="!w-6 !h-6" />
              </Button>
              <Button
                onClick={handleNext}
                disabled={currentIndex === timelineData.length - 1}
                size="icon"
                variant="ghost"
              >
                <ArrowRight className="!w-6 !h-6" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-20 flex justify-between gap-8 overflow-hidden">
          {timelineData.map((item, index) => (
            <button
              key={item.year}
              onClick={() => setCurrentIndex(index)}
              className={`text-7xl font-bold transition-colors duration-500 focus:outline-none ${index === currentIndex
                ? 'text-black'
                : index > currentIndex
                  ? 'text-gray-200'
                  : 'text-gray-300'
                }`}
            >
              {item.year}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-32"
          >
            <div className="aspect-[1/1] bg-gray-100 overflow-hidden">
              <img
                src={timelineData[currentIndex].image}
                alt={timelineData[currentIndex].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-end gap-8 max-w-80">
              <h3 className="text-5xl font-bold mb-4">{timelineData[currentIndex].title}</h3>
              <p className="leading-relaxed">
                {timelineData[currentIndex].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

