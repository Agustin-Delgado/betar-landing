'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

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
    image: '/6168a07883eb7a4998f333689e0a61b9.webp'
  },
  {
    year: '1948',
    title: 'Historical Milestone',
    description: 'A significant year marked by important developments and progress in the organization\'s mission and goals.',
    image: '/7df5457cdfcf6e74ba3c34057c68eac8.webp'
  },
  {
    year: '1950',
    title: 'New Era Begins',
    description: 'The organization enters a new phase of growth and development, expanding its reach and impact.',
    image: '/8492adf31a79aeaf6bacb0a1b6174daf.webp'
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
    <div className="overflow-hidden pb-12 sm:pb-16 md:pb-24 lg:pb-32 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between border-b border-foreground mb-6 sm:mb-8 pb-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Timeline</h2>
          <div className="flex items-center gap-4">
            <span className="text-base sm:text-lg">
              {currentIndex + 1}/{timelineData.length}
            </span>
            <div className="flex gap-2">
              <Button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                size="icon"
                variant="ghost"
              >
                <ArrowLeft className="!w-4 !h-4 sm:!w-5 sm:!h-5 md:!w-6 md:!h-6" />
              </Button>
              <Button
                onClick={handleNext}
                disabled={currentIndex === timelineData.length - 1}
                size="icon"
                variant="ghost"
              >
                <ArrowRight className="!w-4 !h-4 sm:!w-5 sm:!h-5 md:!w-6 md:!h-6" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 flex justify-between gap-2 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto overflow-y-hidden">
          {timelineData.map((item, index) => (
            <button
              key={item.year}
              onClick={() => setCurrentIndex(index)}
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold transition-colors duration-500 focus:outline-none whitespace-nowrap px-2 ${index === currentIndex
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
            className="grid md:grid-cols-2 gap-8 md:gap-16 lg:gap-32"
          >
            <div className="aspect-[2/1] lg:aspect-square bg-gray-100 overflow-hidden">
              <Image
                src={timelineData[currentIndex].image}
                alt={timelineData[currentIndex].title}
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-end gap-4 sm:gap-6 md:gap-8 max-w-full md:max-w-80">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">{timelineData[currentIndex].title}</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                {timelineData[currentIndex].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

