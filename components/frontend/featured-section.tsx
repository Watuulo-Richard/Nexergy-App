"use client"
import { News } from "@/lib/generated/prisma"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FeaturedSection({fetchedNews}:{fetchedNews:News[]}) {
  return (
    <>
      <section id="newssection" className="bg-[#121820] mx-4 md:mx-6 py-4 md:py-16">
        <div className="flex justify-center items-center mx-4 md:mx-0 mb-6 md:mb-12">
          <h3 className="text-red-600 text-xl md:text-3xl lg:text-4xl font-semibold">Energy Insights & Project Updates</h3>
        </div>
        <div className="md:max-w-7xl md:container md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-4">
          {fetchedNews.map((NewsItem, index) => {
            return (
              <div
                key={index}
                className="bg-[#1a222c] rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-8px] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3)] relative group"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={NewsItem.imageUrl || "/placeholder.svg"}
                    alt={NewsItem.title}
                    width={400}
                    height={400}
                    
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-semibold mb-2">{NewsItem.title}</h3>
                  <p className="text-gray-300 mb-6 line-clamp-1">{NewsItem.content}</p>
                </div>
                <div className="px-6 pb-6 absolute bottom-0">
                  <Link
                    href={`/news-detailed-page/${NewsItem.id}`}
                    className="text-white flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity duration-300 group-hover:text-red-300"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
