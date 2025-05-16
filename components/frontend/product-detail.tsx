import React from 'react' // Ensure React is imported for JSX
import { ManualPreview } from './manual-preview'
import { ProductCategory } from '@/types/types'
import { BookOpen } from 'lucide-react'

export default function ProductDetail({fetchedProduct}:{fetchedProduct:ProductCategory | null}) {
    // console.log(fetchedProduct, "Oh My God....🫢🫢");
    // console.log(fetchedProduct, "hahahhaha..........😁😁");
  return (
    <>
        <section className='text-white px-4 md:px-0 md:py-16 max-w-7xl container mx-auto'>
            <div className="flex-col space-y-4 md:space-y-0 md:flex md:flex-row gap-4">
                <div className="shadow-inner rounded-lg overflow-hidden w-full md:w-1/3 md:h-1/3">
                    <img src={fetchedProduct?.image || "/placeholder.svg"} alt={fetchedProduct?.name} className='w-full h-full object-fit-contain' />
                </div>
                <div className="shadow-inner rounded-lg overflow-hidden w-full md:w-2/3 md:h-1/3">
                    <img src="./W-2.jpg" alt="" className='w-full h-full object-fit-cover' />
                </div>
            </div>
            <div className="py-6 md:py-12 flex flex-col md:flex md:flex-row gap-4">
                <div className="w-full md:w-[70%]">
                    <h3 className='text-3xl font-semibold text-red-600 py-2'>{fetchedProduct?.name}</h3>
                    <div className="py-3 md:py-6">
                        {fetchedProduct?.category?.description}
                    </div>
                    <div className="space-y-4">
                        <h3 className='text-lg text-red-600 font-semibold'>{fetchedProduct?.price}.UGX</h3>
                        <h3>Available Stock {fetchedProduct?.stock || "0"}</h3>
                        <div className="">
                            TotalEnergies offers a wide range of energy solutions, designed to meet both industrial and everyday needs. From high-performance fuels to premium lubricants, each product reflects innovation, safety, and environmental care. Their solar energy kits and gas solutions support sustainable living and efficient power use.

                            TotalEnergies provides innovative and reliable energy solutions across multiple sectors. Whether it's high-quality fuels for transport, advanced lubricants for machinery, or clean energy like solar and gas, each product is engineered for performance and sustainability. The company is committed to reducing carbon emissions while meeting the growing global demand for energy.

                            Fuel cards and car care products are also part of their offering, ensuring smooth transportation and reliable service. TotalEnergies’ commitment to cleaner energy is seen in their biofuels, electric mobility tools, and renewable power systems. These solutions empower industries and communities globally.
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[30%] md:px-12 md:border-l-2 md:border-slate-600 space-y-4">
                    <div className="flex items-center space-x-2 border-b border-slate-600">
                        <h3 className='text-3xl font-semibold text-red-600'>Product Guide</h3>
                        <BookOpen className='w-8 h-8 text-red-600'/>
                    </div>
                    <div className="">
                        {/* <ul className='list-inside'>
                            <li>90+ Coded Blocks</li>
                            <li>Made With Tailwind CSS</li>
                            <li>Fully Responsive on Every Device</li>
                        </ul> */}
                        <p className='font-semibold'>Click the button below to view the product manual online or download it for offline access.</p>
                    </div>
                    <div className="">
                        <ManualPreview fetchedProduct={fetchedProduct}/>
                    </div>
                    <div className="">
                        <img src="/V-D-Three.svg" className='w-full h-full object-fit-contain' alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
