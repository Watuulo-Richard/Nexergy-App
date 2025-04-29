"use client"

import React, { useState } from 'react'
import TextInput from './formInputs/textInput'
import { useForm } from 'react-hook-form';
import { baseUrl, RegionTypes } from '@/types/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { regionSchema } from '@/schemas/schema';
import SubmitButton from './submitButton';
import CloseButton from './formInputs/closeButton';
import { toast } from 'sonner'
import { CaseSensitive } from 'lucide-react'

export default function RegionForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<RegionTypes>({resolver: zodResolver(regionSchema) });
    const [loading, setLoading] = useState(false)
    
    async function onSubmit(regionData:RegionTypes) {
        try {

            setLoading(true)
            const response = await fetch(`${baseUrl}/api/v1/regionsAPI`, {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(regionData)
            })
            console.log(regionData);
            if(response.ok) {
                setLoading(false)
                console.log(response);
                console.log(regionData);
                toast.success("Region Created Successfully")
                reset()
            } else {
                setLoading(false)
                toast.error("Failed To Create Region")
            }
        } catch (error) {
            console.log(error);
            toast.error("Internet Connection Error...!!! Please Try Again")
        }
    }
  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="border-b border-zinc-100 dark:border-zinc-800">
                <p className="text-xl font-semibold text-green-800 dark:text-zinc-400">Here You Can Create The Total Energies Regions In Uganda</p>
            </div>
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 pt-4">
                <div className="px-4 rounded-lg border border-gray-200 dark:border-[#1F1F23]">
                    <div className="space-y-1">
                        <TextInput label="Region Name" register={register} errors={errors} type="text" name="name"  icon={CaseSensitive} placeholder="Please Enter Region Name" isRequired={true} inFocus ={true} minLength={5} maxLength={20}/>
                    </div>
                    <div className="space-y-1">
                        <TextInput label="Region Code" register={register} errors={errors} type="text" name="code"  icon={CaseSensitive} placeholder="Please Enter Region Code" isRequired={true} inFocus ={true} minLength={1} maxLength={30}/>
                    </div>
                    <div className="grid grid-cols-1 space-y-2 my-2">
                        <CloseButton href="" parent="analytics" />
                        <SubmitButton
                            className='w-full'
                            // title={editingId ? `Update ${title}` : `Create ${title}`}
                            title='Create Region'
                            loading={loading}
                        />
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}
