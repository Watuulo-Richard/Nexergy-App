import { fetchSingleCategory } from '@/action/fetch'
import CategoryForm from '@/components/backend/categoryForm'
import React from 'react'

export default async function page({params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    const fetchedCategory = await fetchSingleCategory(id)
    // console.log(id, "Boom");
    // console.log(fetchedCategory, "I'm also here");
  return (
    <>
      <CategoryForm fetchedCategory={fetchedCategory}/> 
    </>
  )
}