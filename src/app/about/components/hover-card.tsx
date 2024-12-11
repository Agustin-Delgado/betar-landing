'use client'

import { cn } from '@/lib/utils'
import React, { useState } from 'react'

interface CardProps {
  title: string
  description: string
  imageUrl: string
  textColor?: string
  subTitle?: string
}

export const HoverCard: React.FC<CardProps> = ({ title, subTitle, description, imageUrl, textColor }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div
      className="aspect-[5/6] relative overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="absolute inset-0 z-30 p-4 sm:p-6 flex flex-col gap-2 sm:gap-4">
        <div className='flex flex-col'>
          <h2 className={cn("text-accent text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold", textColor, isActive && "!text-accent")}>
            {title}
          </h2>
          <span className={cn("text-accent text-base sm:text-lg md:text-xl font-medium", textColor, isActive && "!text-accent")}>
            {subTitle}
          </span>
        </div>
        <p className={`text-accent text-sm sm:text-base transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
          {description}
        </p>
      </div>

      <div
        className={`absolute inset-0 bg-blue-600 z-20 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}
      ></div>

      <div className={cn("absolute inset-0 z-10", imageUrl ? "bg-foreground opacity-50" : "bg-secondary")}></div>

      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
      )}
    </div>
  )
}