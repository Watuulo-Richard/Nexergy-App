import Image from "next/image"
import Link from "next/link"
import { BorderBeam } from "../magicui/border-beam"

// These are the things our hero section needs
type HeroSectionProps = {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  imagePath: string
}

export default function TestingSection({ heroData }:{heroData:HeroSectionProps} ) {
  return (
    <div className="relative max-w-[1440] rounded-2xl shadow-2xl h-[600px] overflow-hidden container mx-auto">
        {/* This is our background picture */}
        <BorderBeam duration={8} size={100} className="p-12"/>
        <div className="absolute inset-0">
          <Image src={heroData.imagePath || "/placeholder.svg"} alt="City skyline" fill className="object-cover" priority />
        </div>

        {/* This is our dark overlay */}
        <div className="absolute inset-0 bg-black/40">
          {/* This is where we put our text */}
          <div className="relative h-full max-w-md p-8 bg-black/50 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{heroData.title}</h1>
            <p className="text-white mb-8">{heroData.description}</p>

            {/* This is our button with a nice hover effect */}
            <Link
              href={heroData.buttonLink}
              className="inline-block w-fit bg-yellow-500 hover:bg-yellow-400 text-black font-medium px-6 py-3 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {heroData.buttonText}
            </Link>
          </div>
        </div>
    </div>
  )
}
