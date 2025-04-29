"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface CarouselItem {
  image: string
  word: string
}

interface ChildCarouselProps {
  items: CarouselItem[]
  interval?: number
}

export default function ChildCarousel({items,interval = 4000}: ChildCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
        setIsTransitioning(false)
      }, 500) // Fade duration
    }, interval)

    return () => clearInterval(timer)
  }, [items.length, interval])

  return (
    <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg" style={{ height: "400px" }}>
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-500 ease-in-out",
          isTransitioning ? "opacity-0" : "opacity-100",
        )}
      >
        <Image
          src={items[currentIndex].image || "/placeholder.svg"}
          alt={items[currentIndex].word}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-red-600/70 via-red-500/50 to-transparent" />
        <div className="absolute bottom-0 w-full p-6 text-center">
          <h2 className="text-5xl font-bold text-white tracking-wide">{items[currentIndex].word}</h2>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true)
              setTimeout(() => {
                setCurrentIndex(index)
                setIsTransitioning(false)
              }, 500)
            }}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300 border-2 border-white",
              currentIndex === index ? "bg-white scale-125 shadow-md" : "bg-transparent hover:bg-white/30",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between opacity-0 hover:opacity-100 transition-opacity duration-300 px-4">
        <button
          onClick={(e) => {
            e.preventDefault()
            setIsTransitioning(true)
            setTimeout(() => {
              setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
              setIsTransitioning(false)
            }, 500)
          }}
          className="bg-white/80 hover:bg-white text-red-600 rounded-full p-2 shadow-lg transform transition-transform hover:scale-110"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            setIsTransitioning(true)
            setTimeout(() => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
              setIsTransitioning(false)
            }, 500)
          }}
          className="bg-white/80 hover:bg-white text-red-600 rounded-full p-2 shadow-lg transform transition-transform hover:scale-110"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
