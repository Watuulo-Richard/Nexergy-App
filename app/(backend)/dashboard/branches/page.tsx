import { fetchAllRegions } from '@/action/fetch'
import BranchesForm from '@/components/backend/branchesForm'
import React from 'react'

export default async function page() {
  const fetchedRegions = await fetchAllRegions()
  console.log(fetchedRegions, "Regions Fetched Successfully✅");
  return (
    <>
      <BranchesForm fetchedRegions={fetchedRegions}/>
    </>
  )
}
