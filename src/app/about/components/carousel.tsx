'use client'

import { useState, useRef, useEffect } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import { HoverCard } from './hover-card'
import { Button } from '@/components/ui/button'

export default function CardCarousel({ carouselData, CustomHoverCard }: { carouselData: { id: number, title: string, description: string, imageUrl: string, textColor?: string, subTitle?: string }[], CustomHoverCard?: React.FC<any> }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)
  const constraintsRef = useRef(null)
  const controls = useAnimation()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1)
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2)
      } else {
        setCardsPerView(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < carouselData.length - cardsPerView ? prev + 1 : prev))
  }

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50
    if (info.offset.x > threshold && currentIndex > 0) {
      handlePrevious()
    } else if (info.offset.x < -threshold && currentIndex < carouselData.length - cardsPerView) {
      handleNext()
    }
  }

  useEffect(() => {
    controls.start({ x: -currentIndex * (100 / cardsPerView) + '%' })
  }, [currentIndex, cardsPerView, controls])

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex items-center justify-end mb-4 sm:mb-6 border-t border-foreground pt-4 gap-4">
        <span className="text-sm sm:text-lg">
          {currentIndex + 1}-{Math.min(currentIndex + cardsPerView, carouselData.length)}/{carouselData.length}
        </span>
        <div className="flex gap-2">
          <Button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            size="icon"
            variant="ghost"
          >
            <ArrowLeft className="!w-4 !h-4 sm:!w-6 sm:!h-6" />
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentIndex === carouselData.length - cardsPerView}
            size="icon"
            variant="ghost"
          >
            <ArrowRight className="!w-4 !h-4 sm:!w-6 sm:!h-6" />
          </Button>
        </div>
      </div>

      <div ref={constraintsRef} className="overflow-hidden relative z-0">
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0}
          onDragEnd={handleDragEnd}
          animate={controls}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
          className="flex"
        >
          {carouselData.map((card) => (
            <motion.div
              key={card.id}
              className={`flex-shrink-0 p-2 w-full ${cardsPerView === 1 ? 'sm:w-full' :
                cardsPerView === 2 ? 'sm:w-1/2' :
                  'sm:w-1/2 lg:w-1/3'
                }`}
            >
              {
                CustomHoverCard ?
                  <CustomHoverCard
                    {...card}
                  /> :
                  <HoverCard
                    {...card}
                  />
              }
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}