export default function CategoriesSection() {
    const productCategoriesArray = [
      {
        name: "Automotive Lubricants",
        description:
          "High-performance engine oils and fluids designed for cars, motorcycles, and light trucks to ensure efficiency, protection, and longevity.",
        image:
          "https://www.totalenergies.com/sites/g/files/nytnzq121/files/styles/media_asset/public/atoms/image/lubricants-car-engine-oil.jpg",
      },
      {
        name: "Industrial Lubricants",
        description:
          "Specialized lubricants and greases tailored for machinery in manufacturing, construction, mining, and other heavy industries.",
        image:
          "https://www.totalenergies.com/sites/g/files/nytnzq121/files/styles/media_asset/public/atoms/image/industrial-lubricants.jpg",
      },
      {
        name: "Aviation Fuels & Lubricants",
        description:
          "Jet fuels and aviation oils developed to meet the strict standards of both commercial and military aircraft engines.",
        image:
          "https://www.totalenergies.com/sites/g/files/nytnzq121/files/styles/media_asset/public/atoms/image/aviation-fuel.jpg",
      },
      {
        name: "Marine Lubricants",
        description:
          "Marine-grade oils and greases that ensure smooth operation and engine protection in both inland and ocean-going vessels.",
        image:
          "https://www.totalenergies.com/sites/g/files/nytnzq121/files/styles/media_asset/public/atoms/image/marine-lubricants.jpg",
      },
      {
        name: "Bitumen",
        description:
          "High-quality bitumen products for use in road construction, waterproofing, and industrial applications.",
        image:
          "https://www.totalenergies.com/sites/g/files/nytnzq121/files/styles/media_asset/public/atoms/image/bitumen-road-construction.jpg",
      },
      {
        name: "Solar Energy Solutions",
        description: "Photovoltaic systems and solar panels for residential, commercial, and industrial energy needs.",
        image:
          "https://www.totalenergies.com/sites/g/files/nytnzq121/files/styles/media_asset/public/atoms/image/solar-energy-solutions.jpg",
      },
      {
        name: "Natural Gas & LNG",
        description:
          "Liquefied natural gas and other gas solutions for cleaner, efficient energy in homes, industries, and power generation.",
        image:
          "https://www.totalenergies.com/sites/g/files/nytnzq121/files/styles/media_asset/public/atoms/image/natural-gas.jpg",
      },
      {
        name: "Electric Mobility Solutions",
        description:
          "Charging infrastructure and EV solutions supporting the shift toward cleaner transportation and electric vehicles.",
        image:
          "https://www.totalenergies.com/sites/g/files/nytnzq121/files/styles/media_asset/public/atoms/image/electric-vehicle-charging.jpg",
      },
      {
        name: "Special Fluids",
        description:
          "Custom-engineered fluids for industrial processes such as metalworking, electronics, and agricultural applications.",
        image:
          "https://www.totalenergies.com/sites/g/files/nytnzq121/files/styles/media_asset/public/atoms/image/special-fluids.jpg",
      },
      {
        name: "Greases",
        description:
          "Wide range of greases designed to protect equipment under high loads, extreme temperatures, and harsh environments.",
        image:
          "https://www.totalenergies.com/sites/g/files/nytnzq121/files/styles/media_asset/public/atoms/image/grease-products.jpg",
      },
    ]
    return (
      <>
        <div className="max-w-7xl container mx-auto flex justify-center pt-4">
          <h3 className="text-red-600 text-3xl font-semibold">Total Energies Categories</h3>
        </div>
        <section className="py-12 max-w-7xl container mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {productCategoriesArray.map((category, categoryIndex) => {
            return (
              <div
                key={categoryIndex}
                className="bg-[#1a222c] border-b border-slate-600 w-full rounded-lg p-6 shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl group"
                style={{
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                {/* Background image with overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${category.image})`,
                  }}
                ></div>
                {/* Dark overlay for text visibility */}
                <div className="absolute inset-0 bg-black opacity-35"></div>
  
                {/* Content - keeping the original structure */}
                <div className="flex space-x-4 relative z-10">
                  <div className="border-r-2 border-slate-600"></div>
                  <div className="">
                    <h3 className="text-red-700 font-semibold text-lg">{category.name}</h3>
                    <p className="text-slate-600/90 font-normal text-sm">983 Available Products</p>
                  </div>
                </div>
              </div>
            )
          })}
        </section>
      </>
    )
  }
  