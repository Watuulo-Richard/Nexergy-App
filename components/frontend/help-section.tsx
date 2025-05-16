import React from 'react'
import { Button } from '../ui/button'
import { CreditCard, MapPin, Milestone } from 'lucide-react'

export default function HelpSection() {
  return (
    <>
        <section className='bg-[#1a222c] rounded-xl py-4 md:py-16 mx-4 md:mx-6 mb-4 md:mb-16 lg:max-w-7xl lg:container lg:mx-auto'>
            <div className="flex justify-start">
              <h3 className="px-6 font-semibold text-2xl text-red-600">How Can We Help ?</h3>
            </div>
            <div className="max-w-7xl container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-6">
                <Button className='text-red-600 font-semibold border border-slate-600 py-4'><Milestone /> Job Search</Button>
                <Button className='text-red-600 font-semibold border border-slate-600 py-4'><MapPin /> Total Station Locator</Button>
                <Button className='text-red-600 font-semibold border border-slate-600 py-4'><CreditCard /> Total Card</Button>
            </div>
        </section>
    </>
  )
}
