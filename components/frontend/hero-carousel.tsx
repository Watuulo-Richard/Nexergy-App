"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface CarouselProps {
  images: string[]
  interval?: number
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
}

export default function HeroCarousel({
  images = [
    '/1.png',
    '2.png',
    '3.jpg'
  ],
  interval = 5000,
  title = "Welcome to Our Platform",
  description = "Discover amazing content and features designed to enhance your experience. Our platform offers the best solutions for your needs.",
  buttonText = "Learn More",
  buttonLink = "#",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  // Auto-advance the carousel
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovering) {
        goToNext()
      }
    }, interval)

    return () => clearInterval(timer)
  }, [currentIndex, interval, isHovering])

  // Go to next slide with animation
  const goToNext = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      setIsAnimating(false)
    }, 500) // Match this with the CSS transition time
  }

  // Go to previous slide with animation
  const goToPrevious = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
      setIsAnimating(false)
    }, 500) // Match this with the CSS transition time
  }

  // Go to specific slide
  const goToSlide = (index: number) => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsAnimating(false)
    }, 500)
  }

  return (
    <div className="relative w-full flex flex-col lg:flex-row gap-4 lg:gap-8 p-4 md:p-6 lg:p-8">
      {/* Fixed Card on the left */}
      <div className="w-full lg:w-1/3 flex items-center">
        <Card className="w-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] bg-white">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <a href={buttonLink}>{buttonText}</a>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Carousel on the right */}
      <div
        className="relative w-full lg:w-2/3 h-[400px] md:h-[300px] overflow-hidden rounded-md"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Main carousel image */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="relative w-full h-full shadow-xl rounded-lg overflow-hidden">
            {images.length > 0 && (
              <Image
                src={images[currentIndex] || "/placeholder.svg"}
                alt={`Carousel image ${currentIndex + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="object-cover"
              />
            )}
          </div>
        </div>

        {/* Navigation buttons - only visible on hover */}
        <div className={`transition-opacity duration-300 ${isHovering ? "opacity-100" : "opacity-0"}`}>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-transform hover:scale-110"
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
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-transform hover:scale-110"
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

        {/* Indicator dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index ? "bg-white w-5" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
