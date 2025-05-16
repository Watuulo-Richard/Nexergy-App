"use client"
import { Product } from '@/lib/generated/prisma';
import { ArrowRight, Icon } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function OurLatestProducts({fetchedProducts}:{fetchedProducts:Product[]}) {
  const [numberOfProducts, setNumberOfProducts] = useState(8)
  const showProducts = fetchedProducts.slice(0, numberOfProducts)
  return (
    <>
      <section className='bg-[#121820] md:container py-4 md:py-16 md:max-w-7xl md:mx-auto'>
        <div className="flex justify-center pb-4">
          <h3 className='text-xl md:text-3xl font-semibold text-red-600'>Our Products And Services</h3>
        </div>

        <div className="mx-4 md:mx-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {showProducts.map((product, productIndex) => {
            return (
                <div key={productIndex} className="">
                <div className="bg-[#1a222c] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1">
                    <div className="w-full h-48 overflow-hidden">
                      <img
                        src={product.image || "./placeholder.png"}
                        alt={product.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="p-5">
                    <div className="mb-3">
                        <h3 className="text-sm font-semibold text-gray-600">
                        {product.name}
                        </h3>
                    </div>
                    <div className="flex items-center justify-between">
                        <Link
                        href={`/product-detail-page/${product.id}`}
                        className="inline-flex items-center text-red-600 hover:text-red-800 font-medium"
                        >
                        View Product Details
                        <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            );
            })}
        </div>
      </section>
    </>
  );
}
