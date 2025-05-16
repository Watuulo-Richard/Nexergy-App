import React from 'react'
import ChildCarousel from '../carousel'
import { AnimatedTooltipPreview } from '../tooltip'

export default function HeroSection() {
    const items = [
        { image: "/totalenergies-one.jpg", word: "Apple" },
        { image: "/totalenergies-two.jpg", word: "Banana" },
        { image: "/totalenergies-three.jpg", word: "Cat" },
        { image: "/totalenergies-four.jpg", word: "Dog" },
    ]
  return (
    <>
        <section className='max-w-7xl container mx-auto flex flex-col-reverse items-center md:flex lg:flex-row lg:items-center gap-4'>
            <div className="mx-4 lg:mx-0 md:border-slate-600 md:border-b md:border-r md:border-l md:rounded-b-lg md:px-4 md:pb-4 w-full flex-col items-center justify-center space-y-2 lg:w-1/2">
                <h3 className='text-4xl font-medium text-red-600'>Optimum Engine Protection, Performance and Endurance: TotalEnergies Lubricants</h3>
                <p className='text-white text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed soluta in ratione tempora necessitatibus odit laboriosam velit repudiandae incidunt beatae.</p>
                <div className="w-full flex flex-col md:flex md:flex-row md:justify-start py-4 md:pt-12 gap-y-4">
                    <div className="w-full md:w-[60%] ">
                        <AnimatedTooltipPreview />
                    </div>
                    <div className="w-full flex justify-start items-start md:w-[40%]">
                        <h3 className='text-white text-md'>Join with 4600+ Developers and start getting feedbacks right now</h3>
                    </div>
                </div>
            </div>
            <div className="mx-4 container md:mx-auto lg:mx-0 w-full lg:w-1/2">
                <ChildCarousel items={items}/>
            </div>
        </section>
    </>
  )
}
