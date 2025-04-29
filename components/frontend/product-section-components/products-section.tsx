import React from 'react';

export default function ProductsSection() {

const productsArray = [
    {
      "name": "Quartz 9000 Energy 5W-40",
      "price": 45.00,
      "stock": 150,
      "manual": "https://www.totalenergies.com/quartz-9000-energy.pdf",
      "image": "/W-1.jpg"
    },
    {
      "name": "Quartz Ineo ECS 5W-30",
      "price": 50.00,
      "stock": 200,
      "manual": "https://www.totalenergies.com/quartz-ineo-ecs.pdf",
      "image": "/W-2.jpg"
    },
    {
      "name": "Rubia TIR 7900 15W-40",
      "price": 40.00,
      "stock": 300,
      "manual": "https://www.totalenergies.com/rubia-tir-7900.pdf",
      "image": "/W-2.jpg"
    },
    {
      "name": "Preslia GT 46",
      "price": 65.00,
      "stock": 120,
      "manual": "https://www.totalenergies.com/preslia-gt.pdf",
      "image": "/W-1.jpg"
    },
    {
      "name": "Carter EP 320",
      "price": 72.00,
      "stock": 90,
      "manual": "https://www.totalenergies.com/carter-ep.pdf",
      "image": "/W-2.jpg"
    },
    {
      "name": "Dacnis SE 100",
      "price": 55.00,
      "stock": 130,
      "manual": "https://www.totalenergies.com/dacnis-se-100.pdf",
      "image": "/W-1.jpg"
    },
    {
      "name": "Aero DM 15W-50",
      "price": 95.00,
      "stock": 60,
      "manual": "https://www.totalenergies.com/aero-dm.pdf",
      "image": "/W-2.jpg"
    },
    {
      "name": "Aviation Gasoline AVGAS 100LL",
      "price": 120.00,
      "stock": 40,
      "manual": "https://www.totalenergies.com/avgas-100ll.pdf",
      "image": "/W-1.jpg"
    },
    {
      "name": "Aero D80",
      "price": 88.00,
      "stock": 75,
      "manual": "https://www.totalenergies.com/aero-d80.pdf",
      "image": "/W-2.jpg"
    },
    {
      "name": "Disola M 4015",
      "price": 78.00,
      "stock": 110,
      "manual": "https://www.totalenergies.com/disola-m.pdf",
      "image": ""
    }
]
  return (
    <>
      <section className='px-4 md:max-w-[1440] container mx-auto'>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
                productsArray.map((product, productIndex) => {
                    return (
                        <div key={productIndex} className="relative flex flex-col my-2 bg-[#1a222c] shadow-xl rounded-lg">
                        <div className="relative p-2.5 h-60 overflow-hidden rounded-xl bg-clip-border">
                            <img
                            src={product.image}
                            className="h-full w-full object-cover rounded-md"
                            />
                        </div>
                        <div className="p-4">
                            <div className="mb-2 flex items-center justify-between">
                            <p className="text-red-600 text-xl font-semibold">
                                {product.name}
                            </p>
                            <p className="text-white text-xl font-semibold">${product.price}</p>
                            </div>
                            <p className="text-slate-600 leading-normal font-light">
                            {product.stock} Available Products
                            </p>
                            <button
                            className="rounded-md w-full mt-6 py-2 px-4 border border-red-600 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-red-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            >
                            Add to Cart
                            </button>
                        </div>
                        </div>
                    )
                })
            }
        </div>
      </section>
    </>
  );
}
