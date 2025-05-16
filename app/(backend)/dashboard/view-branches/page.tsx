// import React from "react";
// import { Tabs, TabsContent } from "@/components/ui/tabs";
// import DataTable from "@/components/backend/DataTableComponents/DataTable";
// import { columns } from "./columns";
// import { fetchAllBranches } from "@/action/fetch";

// export default async function page() {
//   const fetchedBranches = await fetchAllBranches() 
//   console.log(fetchedBranches, "Finally");
//   return (
//     <div className="p-8">
//       <Tabs defaultValue="blogs" className="space-y-8">
//         <TabsContent value="blogs" className="space-y-8">
//           <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 py-3">
//             <h2 className="scroll-m-20  text-2xl text-green-800 dark:text-white font-semibold tracking-tight first:mt-0">
//               Total Energies Branches ({fetchedBranches.length})
//             </h2>
//           </div>
//           <div className="py-4">
//             <DataTable data={fetchedBranches} columns={columns} />
//           </div>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }



"use client"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import DataTable from "@/components/backend/DataTableComponents/DataTable"
// import { columns } from "../columns"
import { fetchAllBranches } from "@/action/fetch"
import { motion } from "framer-motion"
import { columns } from "./columns"

export default async function page() {
  const fetchedBranches = await fetchAllBranches()
  console.log(fetchedBranches, "Finally")

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 sm:p-6 md:p-8"
    >
      <Tabs defaultValue="blogs" className="space-y-4 sm:space-y-6 md:space-y-8">
        <TabsContent value="blogs" className="space-y-4 sm:space-y-6 md:space-y-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 dark:border-gray-600 py-3"
          >
            <h2 className="scroll-m-20 text-xl sm:text-2xl text-green-800 dark:text-white font-semibold tracking-tight first:mt-0 transition-colors duration-200 hover:text-green-700 dark:hover:text-green-400">
              Total Energies Branches ({fetchedBranches.length})
            </h2>
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="py-2 sm:py-4 overflow-x-auto"
          >
            <DataTable data={fetchedBranches} columns={columns} />
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
