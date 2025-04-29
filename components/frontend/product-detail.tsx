import React from 'react'
import { ManualPreview } from './manual-preview'

export default function ProductDetail() {
  return (
    <>
        <section className='text-white py-16 max-w-[1440] container mx-auto'>
            <div className="flex-col md:flex md:flex-row gap-4">
                <div className="shadow-inner rounded-lg overflow-hidden w-full md:w-1/2 md:h-1/2">
                    <img src="./W-1.jpg" alt="" className='w-full h-full object-fit-cover' />
                </div>
                <div className="shadow-inner rounded-lg overflow-hidden w-full md:w-1/2 md:h-1/2">
                    <img src="./W-1.jpg" alt="" className='w-full h-full object-fit-cover' />
                </div>
            </div>
            <div className="py-12 flex flex-col md:flex md:flex-row gap-4">
                <div className="w-full md:w-[70%]">
                    <h3 className='text-3xl font-semibold text-red-600 py-2'>Product Name</h3>
                    <p className='text-lg text-gray-400 font-medium'>Updated on April 18, 2021</p>
                    <div className="py-6">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto modi aspernatur optio molestias veritatis dolores, earum repellendus, voluptatibus, sed ratione reiciendis facere nisi esse assumenda? Maiores voluptate eius illo eligendi inventore doloremque quaerat hic? Quibusdam dignissimos molestiae esse temporibus iusto!
                    </div>
                    <div className="space-y-4">
                        <h3 className='text-lg text-red-600 font-semibold'>Features</h3>
                        <div className="">
                            <ul className='list-inside'>
                                <li>90+ Coded Blocks</li>
                                <li>Made With Tailwind CSS</li>
                                <li>Fully Responsive on Every Device</li>
                            </ul>
                        </div>
                        <h3>Make landing page fast</h3>
                        <div className="">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut amet a a blandit id non viverra massa semper. Varius bibendum suscipit sed mattis turpis enim in ornare. In orci condimentum id in. Sit sodales tempor, sed feugiat sit at fames a tellus.

                            Nullam iaculis dui donec ullamcorper congue in venenatis. Nunc suspendisse nec phasellus sit mauris. Varius magna phasellus lacus diam. Convallis facilisis turpis nulla pellentesque viverra porttitor. Sit et, magna interdum vitae purus elementum gravida leo.

                            Neque, dignissim vulputate molestie tristique ipsum scelerisque arcu eu eget. Lectus in interdum viverra faucibus lorem adipiscing fames. Nisl, vitae euismod mi nibh et lectus viverra cursus eget. Lobortis ipsum, nulla sodales dignissim. Venenatis, convallis aliquam rhoncus integer auctor.
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[30%] pl-24 border-l-2 border-red-600">
                    <h3>Features</h3>
                    <div className="">
                        <ul className='list-inside'>
                            <li>90+ Coded Blocks</li>
                            <li>Made With Tailwind CSS</li>
                            <li>Fully Responsive on Every Device</li>
                        </ul>
                    </div>
                    <div className="">
                        <ManualPreview />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
