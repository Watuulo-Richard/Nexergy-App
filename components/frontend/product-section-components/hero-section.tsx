import React from 'react'
import ChildCarousel from '../carousel'
import { AnimatedTooltipPreview } from '../tooltip'

export default function HeroSection() {
    const items = [
        { image: "/placeholder.svg?height=400&width=600", word: "Apple" },
        { image: "/placeholder.svg?height=400&width=600", word: "Banana" },
        { image: "/placeholder.svg?height=400&width=600", word: "Cat" },
        { image: "/placeholder.svg?height=400&width=600", word: "Dog" },
    ]
  return (
    <>
        <section className='px-4 md:max-w-[1440] container mx-auto flex-col-reverse md:flex md:flex-row md:items-center gap-4'>
            <div className="md:border-b md:border-r md:border-l md:rounded-b-lg md:px-4 md:pb-4 w-full flex-col items-center justify-center space-y-3 md:w-1/2">
                <h3 className='text-5xl font-medium text-red-600'>Optimum Engine Protection, Performance and Endurance: TotalEnergies Lubricants</h3>
                <p className='text-white text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed soluta in ratione tempora necessitatibus odit laboriosam velit repudiandae incidunt beatae.</p>
                <div className="w-full md:flex md:flex-row md:justify-start pt-12">
                    <div className="w-full md:w-[40%] ">
                        <AnimatedTooltipPreview />
                    </div>
                    <div className="w-full md:w-[60%]">
                        <h3 className='text-white text-lg'>Join with 4600+ Developers and start getting feedbacks right now</h3>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <ChildCarousel items={items}/>
            </div>
        </section>
    </>
  )
}
