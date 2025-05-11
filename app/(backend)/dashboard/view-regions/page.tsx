import React from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import DataTable from "@/components/backend/DataTableComponents/DataTable";
import { columns } from "./columns";
import { fetchAllRegions } from "@/action/fetch";

export default async function page() {
  const fetchedRegions = await fetchAllRegions()
//   console.log(fetchedRegions, "Finally");
  return (
    <div className="p-8">
      <Tabs defaultValue="blogs" className="space-y-8">
        <TabsContent value="blogs" className="space-y-8">
          <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 py-3">
            <h2 className="scroll-m-20  text-2xl text-green-800 dark:text-white font-semibold tracking-tight first:mt-0">
              Regions ({fetchedRegions.length})
            </h2>
            {/* <div className="ml-auto flex items-center gap-2">
              <BlogCreateForm
                author={author}
                categories={categories.map((item) => {
                  return {
                    label: item.name,
                    value: item.id,
                  };
                })}
              />
            </div> */}
          </div>
          <div className="py-4">
            <DataTable data={fetchedRegions} columns={columns} />
          </div>
        </TabsContent>
        {/* <TabsContent value="blog-categories" className="space-y-8">
          <div className="max-w-2xl py-6">
            <BlogCategoryList fetchedCategories={categories} />
          </div>
        </TabsContent> */}
      </Tabs>
    </div>
  );
}
