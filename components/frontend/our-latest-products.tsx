import { Product } from '@/lib/generated/prisma';
import { ArrowRight, Icon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function OurLatestProducts({fetchedProducts}:{fetchedProducts:Product[]}) {
  // const totalEnergiesItems = [
  //   {
  //     title: 'Premium Fuel',
  //     image: 'https://example.com/images/premium-fuel.jpg',
  //     icon: 'fuel',
  //     link: '/services/premium-fuel',
  //   },
  //   {
  //     title: 'Engine Oils & Lubricants',
  //     image: 'https://example.com/images/lubricants.jpg',
  //     icon: 'oil',
  //     link: '/services/engine-oils-lubricants',
  //   },
  //   {
  //     title: 'Solar Energy Solutions',
  //     image: 'https://example.com/images/solar-panels.jpg',
  //     icon: 'solar-panel',
  //     link: '/services/solar-energy',
  //   },
  //   {
  //     title: 'Car Wash Services',
  //     image: 'https://example.com/images/car-wash.jpg',
  //     icon: 'car',
  //     link: '/services/car-wash',
  //   },
  //   {
  //     title: 'Vehicle Servicing',
  //     image: 'https://example.com/images/vehicle-service.jpg',
  //     icon: 'wrench',
  //     link: '/services/vehicle-servicing',
  //   },
  //   {
  //     title: 'Tyre Services',
  //     image: 'https://example.com/images/tyre-service.jpg',
  //     icon: 'circle',
  //     link: '/services/tyre-services',
  //   },
  //   {
  //     title: 'TotalEnergies Shop',
  //     image: 'https://example.com/images/shop.jpg',
  //     icon: 'shopping-bag',
  //     link: '/services/shop',
  //   },
  //   {
  //     title: 'Gas Cylinder Refill',
  //     image: 'https://example.com/images/gas-cylinder.jpg',
  //     icon: 'flame',
  //     link: '/services/gas-refill',
  //   },
  //   {
  //     title: 'Charging Stations',
  //     image: 'https://example.com/images/ev-charging.jpg',
  //     icon: 'battery-charging',
  //     link: '/services/charging-stations',
  //   },
  //   {
  //     title: 'Business Fuel Cards',
  //     image: 'https://example.com/images/fuel-card.jpg',
  //     icon: 'credit-card',
  //     link: '/services/fuel-cards',
  //   },
  //   {
  //     title: 'Lubricants Distribution',
  //     image: 'https://example.com/images/distribution.jpg',
  //     icon: 'truck',
  //     link: '/services/lubricants-distribution',
  //   },
  //   {
  //     title: 'Safety & Training Services',
  //     image: 'https://example.com/images/safety-training.jpg',
  //     icon: 'shield',
  //     link: '/services/safety-training',
  //   },
  // ];

  return (
    <>
      <section className='bg-[#121820] container py-16 max-w-7xl mx-auto'>
        <div className="flex justify-center pb-4">
          <h3 className='text-4xl font-semibold text-red-600'>Our Products And Services</h3>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {fetchedProducts.map((product, productIndex) => {
            return (
                <div key={productIndex} className="">
                <div className="bg-[#1a222c] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1">
                    <div className="w-full h-48 overflow-hidden">
                    <img
                        src={product.image || "./placeholder.png"}
                        alt={product.name}
                        className="w-full h-full object-cover"
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
                        href="#"
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
