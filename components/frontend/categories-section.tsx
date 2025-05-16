import { Category } from "@/lib/generated/prisma"

export default function CategoriesSection({fetchedCategories}:{fetchedCategories:Category[]}) {
    const showCategories = fetchedCategories.slice(0, 6)
    return (
      <>
        <div className="md:max-w-7xl md:container mx-4 md:mx-6 lg:mx-auto flex justify-center pt-4">
          <h3 className="text-red-600 text-xl md:text-3xl font-semibold">Total Energies Categories</h3>
        </div>
        <section className="py-6 md:py-12 lg:max-w-7xl lg:container mx-4 md:mx-6 lg:mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {showCategories.map((category, categoryIndex) => {
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
                  <div className="border-r-2 border-red-300"></div>
                  <div className="">
                    <h3 className="text-red-300 font-semibold text-lg">{category.name}</h3>
                    <p className="text-red-300/90 font-normal text-sm">983 Available Products</p>
                  </div>
                </div>
              </div>
            )
          })}
        </section>
      </>
    )
  }
  