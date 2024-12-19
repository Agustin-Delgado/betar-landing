'use client'

import { useState, useRef, useEffect } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from "next/image"

interface TimelineItem {
  year: string
  title: string
  description: string
  image: string
}

const timelineData: TimelineItem[] = [
  {
    year: '135 CE',
    title: 'Historical Inspiration',
    description: 'The name "Betar" is derived from the last Jewish fortress to fall during the Bar Kokhba revolt. This powerful historical reference symbolizes resistance, resilience, and the ultimate sacrifice for Jewish sovereignty.',
    image: '/historical-betar-fortress.webp'
  },
  {
    year: '1923',
    title: 'Foundation of Betar',
    description: 'Betar, an acronym for Brit Yosef Trumpeldor, was established in Riga, Latvia by Ze\'ev Jabotinsky as part of the Revisionist Zionist movement. Its mission was bold: to create a Jewish state encompassing all of Palestine and Jordan.',
    image: '/6168a07883eb7a4998f333689e0a61b9.webp'
  },
  {
    year: '1930s',
    title: 'Rapid Growth',
    description: 'By the 1930s, Betar had become one of the largest and most influential Jewish youth movements in Europe, with 70,000 members by 1934. The movement played a critical role in shaping the ideological foundation of right-wing Zionism.',
    image: '/betar-1930s.webp'
  },
  {
    year: '1940s',
    title: 'Resistance and Independence',
    description: 'During the 1940s, Betar merged with the Irgun, a Jewish paramilitary group, under the leadership of Menachem Begin. Together, they waged a revolt against the British Mandate and played a significant role in the fight for Israeli independence during the 1947–1948 period.',
    image: '/7df5457cdfcf6e74ba3c34057c68eac8.webp'
  },
  {
    year: '1948',
    title: 'State of Israel Established',
    description: 'With the establishment of the State of Israel, Betar\'s efforts in promoting aliyah, facilitating immigration, and fostering resilience among Jewish communities came to fruition. The movement\'s dedication to Jewish sovereignty and identity played a crucial role in this historic achievement.',
    image: '/8492adf31a79aeaf6bacb0a1b6174daf.webp'
  },
  {
    year: 'Today',
    title: 'Continuing the Legacy',
    description: 'Today, Betar continues to build on its legacy, championing the values of Zionism and resilience in the face of modern challenges. As it inspires a new generation of leaders, Betar remains a movement rooted in the ideals of strength, pride, and an unwavering dedication to the Jewish people and the State of Israel.',
    image: '/betar-today.webp'
  }
]

export default function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const yearsContainerRef = useRef<HTMLDivElement>(null)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < timelineData.length - 1 ? prev + 1 : prev))
  }

  const scrollToYear = (index: number) => {
    if (yearsContainerRef.current) {
      const container = yearsContainerRef.current
      const yearButtons = container.querySelectorAll('button')
      const selectedButton = yearButtons[index]

      if (selectedButton) {
        const containerWidth = container.offsetWidth
        const buttonLeft = selectedButton.offsetLeft
        const buttonWidth = selectedButton.offsetWidth
        const scrollLeft = buttonLeft - containerWidth / 2 + buttonWidth / 2

        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        })
      }
    }
  }

  useEffect(() => {
    scrollToYear(currentIndex)
  }, [currentIndex])

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
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </Button>
              <Button
                onClick={handleNext}
                disabled={currentIndex === timelineData.length - 1}
                size="icon"
                variant="ghost"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </Button>
            </div>
          </div>
        </div>

        <div
          ref={yearsContainerRef}
          className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 flex justify-start gap-2 sm:gap-4 md:gap-6 lg:gap-8 overflow-hidden"
        >
          {timelineData.map((item, index) => (
            <button
              key={item.year}
              onClick={() => setCurrentIndex(index)}
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold transition-colors focus:outline-none whitespace-nowrap px-2 flex-shrink-0 ${index === currentIndex
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
            <div className="aspect-[1/1] lg:aspect-square bg-gray-100 overflow-hidden">
              <Image
                src={timelineData[currentIndex].image}
                alt={timelineData[currentIndex].title}
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-end gap-4 sm:gap-6 md:gap-8 max-w-full">
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

