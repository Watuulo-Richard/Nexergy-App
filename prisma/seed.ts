import { prismaClient } from "./db";

async function main() {
    try {
        // Clean Existing Data
        console.log("🗑️ Cleaning existing data...");
        await prismaClient.product.deleteMany()
        await prismaClient.category.deleteMany()

        const productCategoriesArray = [
            {
              "name": "Automotive Lubricants",
              "description": "High-performance engine oils and fluids designed for cars, motorcycles, and light trucks to ensure efficiency, protection, and longevity.",
              "image": "https://www.totalenergies.com/sites/g/files/nytnzq121/files/styles/media_asset/public/atoms/image/lubricants-car-engine-oil.jpg"
            },
            {
              "name": "Industrial Lubricants",
              "description": "Specialized lubricants and greases tailored for machinery in manufacturing, construction, mining, and other heavy industries.",
              "image": "https://www.totalenergies.com/sites/g/files/nytnzq121/files/styles/media_asset/public/atoms/image/industrial-lubricants.jpg"
            },
            {
              "name": "Aviation Fuels & Lubricants",
              "description": "Jet fuels and aviation oils developed to meet the strict standards of both commercial and military aircraft engines.",
              "image": "https://www.totalenergies.com/sites/g/files/nytnzq121/files/styles/media_asset/public/atoms/image/aviation-fuel.jpg"
            },
            {
              "name": "Marine Lubricants",
              "description": "Marine-grade oils and greases that ensure smooth operation and engine protection in both inland and ocean-going vessels.",
              "image": "https://www.totalenergies.com/sites/g/files/nytnzq121/files/styles/media_asset/public/atoms/image/marine-lubricants.jpg"
            },
            {
              "name": "Bitumen",
              "description": "High-quality bitumen products for use in road construction, waterproofing, and industrial applications.",
              "image": "https://www.totalenergies.com/sites/g/files/nytnzq121/files/styles/media_asset/public/atoms/image/bitumen-road-construction.jpg"
            },
            {
              "name": "Solar Energy Solutions",
              "description": "Photovoltaic systems and solar panels for residential, commercial, and industrial energy needs.",
              "image": "https://www.totalenergies.com/sites/g/files/nytnzq121/files/styles/media_asset/public/atoms/image/solar-energy-solutions.jpg"
            },
            {
              "name": "Natural Gas & LNG",
              "description": "Liquefied natural gas and other gas solutions for cleaner, efficient energy in homes, industries, and power generation.",
              "image": "https://www.totalenergies.com/sites/g/files/nytnzq121/files/styles/media_asset/public/atoms/image/natural-gas.jpg"
            },
            {
              "name": "Electric Mobility Solutions",
              "description": "Charging infrastructure and EV solutions supporting the shift toward cleaner transportation and electric vehicles.",
              "image": "https://www.totalenergies.com/sites/g/files/nytnzq121/files/styles/media_asset/public/atoms/image/electric-vehicle-charging.jpg"
            },
            {
              "name": "Special Fluids",
              "description": "Custom-engineered fluids for industrial processes such as metalworking, electronics, and agricultural applications.",
              "image": "https://www.totalenergies.com/sites/g/files/nytnzq121/files/styles/media_asset/public/atoms/image/special-fluids.jpg"
            },
            {
              "name": "Greases",
              "description": "Wide range of greases designed to protect equipment under high loads, extreme temperatures, and harsh environments.",
              "image": "https://www.totalenergies.com/sites/g/files/nytnzq121/files/styles/media_asset/public/atoms/image/grease-products.jpg"
            }
        ]

        const Category = []
        for (const productCategory of productCategoriesArray) {
            const categoryCat = await prismaClient.category.create({
                data: productCategory
            })
            Category.push(categoryCat)
        }
        console.log("✅ Category Seed data created successfully");
        
        const productsArray = [
          {
            "categoryId": Category[0].id,
            "name": "Quartz 9000 Energy 5W-40",
            "price": 45.00,
            "stock": 150,
            "manual": "https://www.totalenergies.com/quartz-9000-energy.pdf",
            "image": "https://example.com/images/quartz-9000-energy.jpg"
          },
          {
            "categoryId": Category[1].id,
            "name": "Quartz Ineo ECS 5W-30",
            "price": 50.00,
            "stock": 200,
            "manual": "https://www.totalenergies.com/quartz-ineo-ecs.pdf",
            "image": "https://example.com/images/quartz-ineo-ecs.jpg"
          },
          {
            "categoryId": Category[2].id,
            "name": "Rubia TIR 7900 15W-40",
            "price": 40.00,
            "stock": 300,
            "manual": "https://www.totalenergies.com/rubia-tir-7900.pdf",
            "image": "https://example.com/images/rubia-tir-7900.jpg"
          },
          {
            "categoryId": Category[3].id,
            "name": "Preslia GT 46",
            "price": 65.00,
            "stock": 120,
            "manual": "https://www.totalenergies.com/preslia-gt.pdf",
            "image": "https://example.com/images/preslia-gt-46.jpg"
          },
          {
            "categoryId": Category[4].id,
            "name": "Carter EP 320",
            "price": 72.00,
            "stock": 90,
            "manual": "https://www.totalenergies.com/carter-ep.pdf",
            "image": "https://example.com/images/carter-ep-320.jpg"
          },
          {
            "categoryId": Category[5].id,
            "name": "Dacnis SE 100",
            "price": 55.00,
            "stock": 130,
            "manual": "https://www.totalenergies.com/dacnis-se-100.pdf",
            "image": "https://example.com/images/dacnis-se-100.jpg"
          },
          {
            "categoryId": Category[6].id,
            "name": "Aero DM 15W-50",
            "price": 95.00,
            "stock": 60,
            "manual": "https://www.totalenergies.com/aero-dm.pdf",
            "image": "https://example.com/images/aero-dm-15w50.jpg"
          },
          {
            "categoryId": Category[7].id,
            "name": "Aviation Gasoline AVGAS 100LL",
            "price": 120.00,
            "stock": 40,
            "manual": "https://www.totalenergies.com/avgas-100ll.pdf",
            "image": "https://example.com/images/avgas-100ll.jpg"
          },
          {
            "categoryId": Category[8].id,
            "name": "Aero D80",
            "price": 88.00,
            "stock": 75,
            "manual": "https://www.totalenergies.com/aero-d80.pdf",
            "image": "https://example.com/images/aero-d80.jpg"
          },
          {
            "categoryId": Category[9].id,
            "name": "Disola M 4015",
            "price": 78.00,
            "stock": 110,
            "manual": "https://www.totalenergies.com/disola-m.pdf",
            "image": "https://example.com/images/disola-m-4015.jpg"
          }
        ];        

        const newProductArray = []
        for (const product of productsArray) {
            const productCat = await prismaClient.product.create({
                data: product
            })
            newProductArray.push(productCat)
        }
        console.log("✅ Product Seed data created successfully");
          
    } catch (error) {
        console.log("Error Seeding Data:", error);
        throw error
    } finally {
        await prismaClient.$disconnect()
    }
}

main().catch((error) => {
    console.error(error)
    process.exit(1)
})