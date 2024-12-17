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

  const renderDescription = (description: string) => {
    const lines = description.trim().split('\n');

    return (
      <ul className="list-disc ml-5">
        {lines.map((line, index) => {
          const trimmedLine = line.trim();

          if (trimmedLine.startsWith('-')) {
            return (
              <li key={index} className="mb-1">
                {trimmedLine.slice(1).trim()}
              </li>
            );
          } else if (trimmedLine.length > 0) {
            return (
              <p key={index} className="mb-1">
                {trimmedLine}
              </p>
            );
          }
          return null;
        })}
      </ul>
    );
  };

  return (
    <div
      className="relative overflow-hidden cursor-pointer group bg-secondary h-full transition-colors hover:bg-primary"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="inset-0 z-30 p-4 sm:p-6 flex flex-col gap-2 sm:gap-4">
        <div className="flex flex-col">
          <h2
            className={cn(
              "text-accent text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold",
              textColor,
              isActive && "!text-accent"
            )}
          >
            {title}
          </h2>
          <span
            className={cn(
              "text-accent text-base sm:text-lg md:text-xl font-medium",
              textColor,
              isActive && "!text-accent"
            )}
          >
            {subTitle}
          </span>
        </div>
        <div
          className={`text-accent text-sm sm:text-base transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <ul>{renderDescription(description)}</ul>
        </div>
      </div>
    </div>
  )
}
