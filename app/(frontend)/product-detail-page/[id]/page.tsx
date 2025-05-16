import { fetchSingleProduct } from '@/action/fetch'
import ProductDetail from '@/components/frontend/product-detail'
import React from 'react'

export default async function page({params}:{params:Promise<{id:string}>}) {
  const {id} = await params
  const fetchedProduct = await fetchSingleProduct(id)
  // console.log(fetchedProduct, "Done");
  return (
    <>
      <ProductDetail fetchedProduct={fetchedProduct}/>
    </>
  )
}
