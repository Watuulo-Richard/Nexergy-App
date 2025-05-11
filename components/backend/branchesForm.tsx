"use client"

import React, { useState } from 'react'
import TextInput from './formInputs/textInput'
import { useForm } from 'react-hook-form';
import { baseUrl, BranchTypes } from '@/types/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { branchSchema } from '@/schemas/schema';
import SubmitButton from './submitButton';
import CloseButton from './formInputs/closeButton';
import { toast } from 'sonner'
import { CaseSensitive } from 'lucide-react'
import FormSelectInput from './formInputs/selectInput'
import { Branch, Region } from '@/lib/generated/prisma';

export default function BranchesForm({fetchedRegions, fetchedBranch}:{fetchedRegions:Region[], fetchedBranch:Branch | null}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<BranchTypes>({resolver: zodResolver(branchSchema), defaultValues: {
        name: fetchedBranch?.name,
        regionId: fetchedBranch?.regionId
    } });

    const [loading, setLoading] = useState(false)
    const initialRegionId = fetchedRegions.find((region)=> region.id === fetchedBranch?.regionId);
    const destructureData = {
        value: initialRegionId?.id,
        label: initialRegionId?.name
    }
    const modelOptions = fetchedRegions.map((region) => {
        return {
            value: region.id,
            label: region.name
        }
    });
    const [selectedCategory, setSelectedCategory] = useState<any>(destructureData);
    
    async function onSubmit(branchData:BranchTypes) {
        branchData.regionId = selectedCategory.value
        if(fetchedBranch) {
            try {
                const response = await fetch(`${baseUrl}/api/v1/branchesAPI/${fetchedBranch.id}`, {
                    method: "PATCH",
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify(branchData)
                })
                console.log(response);
                console.log(branchData);
                if(response.ok) {
                    setLoading(false)
                    console.log(response);
                    console.log(branchData);
                    toast.success("Branch Updated Successfully")
                } else {
                    setLoading(false)
                    console.log(response);
                    toast.error("Failed To Update Branch")
                }
            } catch (error) {
                console.log(error);
                toast.error("")
            }
        } else {
            try {
                setLoading(true)
                const response = await fetch(`${baseUrl}/api/v1/branchesAPI`, {
                    method: "POST",
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify(branchData)
                })
                console.log(response);
                // console.log(branchData);
                if(response.ok) {
                    setLoading(false)
                    console.log(response);
                    // console.log(branchData);
                    toast.success("Branch Created Successfully")
                    reset()
                } else {
                    setLoading(false)
                    console.log(response);
                    toast.error("Internet Connection Error...!!! Please Try Again")
                }
            } catch (error) {
                setLoading(false)
                console.log(error);
                toast.error("Internet Connection Error...!!! Please Try Again")
            }
        }
    }
  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="border-b border-zinc-100 dark:border-zinc-800">
                <p className="text-xl font-semibold text-green-800 dark:text-zinc-400">Here You Can Create The Total Energies Branches</p>
                {/* <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{totalBalance}</h1> */}
            </div>
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 pt-4">
                <div className="px-4 rounded-lg border border-gray-200 dark:border-[#1F1F23]">
                    <div className="space-y-1">
                        <TextInput label="Branch Name" register={register} errors={errors} type="text" name="name"  icon={CaseSensitive} placeholder="Please Enter Branch Name" isRequired={true} inFocus ={true} minLength={1} maxLength={20}/>
                    </div>
                    <div className="space-y-1">
                        <FormSelectInput
                            label="Region"
                            options={modelOptions}
                            option={selectedCategory}
                            setOption={setSelectedCategory}
                            toolTipText="Add New Region"
                            href="/dashboard/regions"
                        />
                    </div>
                    <div className="grid grid-cols-1 space-y-2 my-2">
                        <CloseButton href="" parent="analytics" />
                        <SubmitButton
                            className='w-full'
                            title={fetchedBranch ? `Update ${fetchedBranch.name}` : `Create ${"Branch"}`}
                            // title='Create Branch'
                            loading={loading}
                        />
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}
