"use client"

import { Phone } from "lucide-react"
import { motion } from "framer-motion"
import { News } from "@/lib/generated/prisma"
import Image from "next/image"

export default function NewsDetails({fetchedSingleNews}:{fetchedSingleNews:News | null}) {
    // console.log(fetchedSingleNews, "am here");
  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row gap-6 lg:gap-0 max-w-7xl container mx-auto py-8 md:py-12 px-4 md:px-6"
      >
        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-[35%] space-y-4"
        >
          <motion.div
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            className="w-full md:w-[350px] shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-600 rounded-lg overflow-hidden"
          >
            <Image
              className="w-full h-full object-cover transition-all duration-300 hover:brightness-110"
              src={fetchedSingleNews?.imageUrl || "/placeholder.png"}
              alt={fetchedSingleNews?.title || "/placeholder.png"}
              width={400}
              height={400}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-[350px] border border-slate-600 bg-[#1a222c] rounded-lg shadow-md"
          >
            <div className="flex items-center justify-center py-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="border border-red-600 p-2 rounded-full shadow-md"
              >
                <Phone className="text-red-600" />
              </motion.div>
            </div>
            <div className="border-t border-slate-600 px-3 py-4">
              <p className="text-red-600 text-sm md:text-base leading-relaxed">
                For any questions, concerns, or additional information, you are welcome to reach out to our support
                team. TotalEnergies is committed to serving you with excellence. Please contact us directly at +256 759
                268 262.
              </p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-red-600 p-4 md:p-6 space-y-6 w-full md:w-[65%] shadow-md hover:shadow-lg transition-all duration-300 border border-slate-600 rounded-lg bg-[#1a222c]"
        >
          {/* Title */}
          <motion.h2
            whileHover={{ scale: 1.01 }}
            className="text-xl md:text-2xl lg:text-3xl font-bold pb-4 border-b-2 border-slate-600 uppercase tracking-wide text-red-600"
          >
            {fetchedSingleNews?.title}
          </motion.h2>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="prose prose-slate max-w-none text-base leading-relaxed"
          >
            {fetchedSingleNews?.content}
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}
