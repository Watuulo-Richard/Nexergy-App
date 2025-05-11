import { fetchAllCategories } from '@/action/fetch'
import ProductForm from '@/components/backend/productForm'
import React from 'react'

export default async function page() {
    const fetchedCategories = await fetchAllCategories()
    // console.log(fetchedCategories, "yeah i have reached....😁😁😁😁");
  return (
    <>
      <ProductForm fetchedCategories={fetchedCategories} fetchedProduct={null}/>
    </>
  )
}
