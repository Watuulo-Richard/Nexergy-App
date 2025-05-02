"use client"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FeaturedSection() {
  const featuredContent = [
    {
      featuredImage: "https://www.freepik.com/premium-vector/woman-charging-electric-car-charging-station_5227186.htm#fromView=search&page=1&position=12&uuid=42ab9547-6ac3-4dd9-a841-fc0aca737469&query=fuel+station+people",
      featuredTitle: "Our strategy",
      featuredDescription: "Our strategy is to deliver more value with less emissions.",
      featuredLink: "#",
    },
    {
      featuredImage: "https://www.freepik.com/premium-vector/woman-charging-electric-car-charging-station_5227186.htm#fromView=search&page=1&position=12&uuid=42ab9547-6ac3-4dd9-a841-fc0aca737469&query=fuel+station+people",
      featuredTitle: "Climate",
      featuredDescription: "Shell's target is to become a net-zero emissions energy business by 2050.",
      featuredLink: "#",
    },
    {
      featuredImage: "https://www.freepik.com/premium-vector/woman-charging-electric-car-charging-station_5227186.htm#fromView=search&page=1&position=12&uuid=42ab9547-6ac3-4dd9-a841-fc0aca737469&query=fuel+station+people",
      featuredTitle: "Careers at Shell",
      featuredDescription: "Explore career opportunities at Shell.",
      featuredLink: "#",
    },
    {
      featuredImage: "https://www.freepik.com/premium-vector/woman-charging-electric-car-charging-station_5227186.htm#fromView=search&page=1&position=12&uuid=42ab9547-6ac3-4dd9-a841-fc0aca737469&query=fuel+station+people",
      featuredTitle: "Our stories",
      featuredDescription: "The people, ideas, and innovations powering progress at Shell.",
      featuredLink: "#",
    },
  ]
  return (
    <>
      <section className="bg-[#121820] max-w-7xl container mx-auto py-16">
        <div className="flex justify-center items-center mb-12">
          <h3 className="text-white text-3xl font-semibold">Featured Content</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1440] mx-auto">
          {featuredContent.map((featuredItem, index) => {
            return (
              <div
                key={index}
                className="bg-[#1a222c] rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-8px] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3)] relative group"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={featuredItem.featuredImage || "/placeholder.svg"}
                    alt={featuredItem.featuredTitle}
                    width={400}
                    height={400}
                    
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">{featuredItem.featuredTitle}</h3>
                  <p className="text-gray-300 mb-6">{featuredItem.featuredDescription}</p>
                </div>
                <div className="px-6 pb-6 absolute bottom-0">
                  <Link
                    href={featuredItem.featuredLink}
                    className="text-white flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity duration-300 group-hover:text-blue-300"
                  >
                    Read more{" "}
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
