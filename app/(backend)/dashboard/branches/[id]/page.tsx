import { fetchAllRegions, fetchSingleBranch } from '@/action/fetch'
import BranchesForm from '@/components/backend/branchesForm'
import React from 'react'

export default async function page({params}:{params:Promise<{id:string}>}) {
    const {id} = await params
  const fetchedRegions = await fetchAllRegions()
  // console.log(fetchedRegions, "Regions Fetched Successfully✅");
  const fetchedBranch = await fetchSingleBranch(id)
//   console.log(id, "Boom");
//   console.log(fetchedBranch, "Branch Fetched Successfully✅");
  return (
    <>
      <BranchesForm fetchedRegions={fetchedRegions} fetchedBranch={fetchedBranch}/>
    </>
  )
}