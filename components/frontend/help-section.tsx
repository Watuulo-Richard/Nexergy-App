import React from 'react'
import { Button } from '../ui/button'
import { CreditCard, MapPin, Milestone } from 'lucide-react'

export default function HelpSection() {
  return (
    <>
        <section className='bg-[#1a222c] rounded-xl py-16 max-w-[1440] mx-auto'>
            <div className="flex justify-start">
              <h3 className="px-6 font-semibold text-2xl text-white">How Can We Help ?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-6">
                <Button className='border-2 font-semibold border-white py-4'><Milestone /> Job Search</Button>
                <Button className='border-2 font-semibold border-white py-4'><MapPin /> Total Station Locator</Button>
                <Button className='border-2 font-semibold border-white py-4'><CreditCard /> Total Card</Button>
            </div>
        </section>
    </>
  )
}
