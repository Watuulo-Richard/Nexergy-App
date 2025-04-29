"use client"

import HeroCarousel from "./hero-carousel"
import { CardHoverEffectDemo } from "./news-cards"


export default function HeroSection() {
  // Sample array of 4 images
  const carouselImages = [
    "/placeholder.svg?height=700&width=1200",
    "/placeholder.svg?height=700&width=1200",
    "/placeholder.svg?height=700&width=1200",
    "/placeholder.svg?height=700&width=1200",
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
        <div className="max-w-full mx-auto">
          <HeroCarousel
            images={carouselImages}
            title="Capital Markets Day 2025"
            description="Shell plc outlined to investors the next steps in its strategy to deliver more value with less emissions. Discover how we're shaping the future of energy."
            buttonText="Read more"
          />
        </div>
      </section>

      {/* Rest of your page content */}
      <section className="max-w-full mx-auto">
        <div className="">
            <CardHoverEffectDemo />
        </div>
      </section>
    </main>
  )
}
