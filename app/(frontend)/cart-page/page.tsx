import { fetchAllBranches } from '@/action/fetch'
import ProductCart from '@/components/frontend/product-cart'
import React from 'react'

export default async function page() {
  const fetchedBranches = await fetchAllBranches()
  console.log(fetchedBranches);
  // const num1=5;
  // const num2="5"

  // const result= num1 === num2;
  // console.log(result);
  return (
    <>
      <ProductCart fetchedBranches={fetchedBranches}/>
    </>
  )
}
