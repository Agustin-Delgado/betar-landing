'use client'

import { useState, useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { HoverCard } from './hover-card'
import { Button } from '@/components/ui/button'

export default function CardCarousel({ carouselData }: { carouselData: { id: number, title: string, description: string, imageUrl: string, textColor?: string, subTitle?: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const constraintsRef = useRef(null)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < carouselData.length - 3 ? prev + 1 : prev))
  }

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50
    if (info.offset.x > threshold && currentIndex > 0) {
      handlePrevious()
    } else if (info.offset.x < -threshold && currentIndex < carouselData.length - 3) {
      handleNext()
    }
  }

  return (
    <div className="overflow-hidden pb-24 sm:pb-32 w-full">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-end mb-8 border-t border-foreground">
          <div className="flex items-center gap-4 mt-4 ">
            <span className="text-lg">
              {currentIndex + 1}-{Math.min(currentIndex + 3, carouselData.length)}/{carouselData.length}
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
                disabled={currentIndex === carouselData.length - 3}
                size="icon"
                variant="ghost"
              >
                <ArrowRight className="!w-6 !h-6" />
              </Button>
            </div>
          </div>
        </div>

        <div ref={constraintsRef} className="overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0}
            onDragEnd={handleDragEnd}
            animate={{ x: -currentIndex * (100 / 3) + '%' }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
            className="flex"
          >
            {carouselData.map((card) => (
              <motion.div
                key={card.id}
                className="w-1/3 flex-shrink-0 p-2"
              >
                <HoverCard
                  {...card}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}