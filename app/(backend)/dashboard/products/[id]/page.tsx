import { fetchAllCategories, fetchSingleProduct } from '@/action/fetch'
import ProductForm from '@/components/backend/productForm'
import React from 'react'

export default async function page({params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    const fetchedProduct = await fetchSingleProduct(id)
    const fetchedCategories = await fetchAllCategories();
    // console.log(fetchedProduct, "yeah i have reached....😁😁😁😁");
    // console.log(id, "yeah i have reached");
  return (
    <>
      <ProductForm fetchedProduct={fetchedProduct} fetchedCategories={fetchedCategories}/>
    </>
  )
}