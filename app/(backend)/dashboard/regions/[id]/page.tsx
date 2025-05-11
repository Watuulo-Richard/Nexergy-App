import { fetchSingleRegion } from '@/action/fetch'
import RegionForm from '@/components/backend/regionForm'
import React from 'react'

export default async function page({params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    const fetchedRegion = await fetchSingleRegion(id)
    console.log(id, "Boom");
    console.log(fetchedRegion, "I'm also here");
  return (
    <>
        <RegionForm fetchedRegion={fetchedRegion}/>
    </>
  )
}
