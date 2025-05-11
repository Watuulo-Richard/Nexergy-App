"use client"

import React, { useState } from 'react'
import TextInput from './formInputs/textInput'
import TextArea from './formInputs/textAreaInput'
import ImageInput from './formInputs/imageInput'
import { useForm } from 'react-hook-form';
import { baseUrl, CategoryTypes } from '@/types/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { categorySchema } from '@/schemas/schema';
import SubmitButton from './submitButton';
import CloseButton from './formInputs/closeButton';
import { toast } from 'sonner'
import { CaseSensitive } from 'lucide-react'
import { Category } from '@/lib/generated/prisma'

export default function CategoryForm({fetchedCategory}:{fetchedCategory:Category | null}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<CategoryTypes>({resolver: zodResolver(categorySchema), defaultValues: {
        name: fetchedCategory?.name,
        description: fetchedCategory?.description,
        image: fetchedCategory?.image
    } });

    const [loading, setLoading] = useState(false)
    const initialImage = fetchedCategory?.image || "/Fuel-Image-Upload.svg"
    const [imageUrl, setImageUrl] = useState<string | null>(initialImage)
    async function onSubmit(categoryData:CategoryTypes) {
        categoryData.image = imageUrl ?? undefined
        if(fetchedCategory) {
            try {
                setLoading(true)
                const response = await fetch(`${baseUrl}/api/v1/categoriesAPI/${fetchedCategory.id}`, {
                    method: "PATCH",
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify(categoryData)
                })
                console.log(response);
                if(response.ok) {
                    setLoading(false)
                    console.log(categoryData);
                    console.log(response);
                    toast.success("Category Updated Successfully")
                } else {
                    setLoading(false)
                    toast.error("Failed To Update Category")
                }
            } catch (error) {
                console.log(error);
                toast.error("Internet Connection Error...!!! Please Try Again")
            }
        } else {
            try {
                if(!imageUrl) {
                    toast.error("No Image URL")
                    return
                }
                setLoading(true)
                const response = await fetch(`${baseUrl}/api/v1/categoriesAPI`, {
                    method: "POST",
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify(categoryData)
                })
                console.log(categoryData);
                if(response.ok) {
                    setLoading(false)
                    console.log(response);
                    console.log(categoryData);
                    toast.success("Category Created Successfully")
                    reset()
                } else {
                    setLoading(false)
                    toast.error("Failed To Create Category")
                }
            } catch (error) {
                console.log(error);
                toast.error("Internet Connection Error...!!! Please Try Again")
            }
        }
    }
  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="border-b border-zinc-100 dark:border-zinc-800">
                <p className="text-xl font-semibold text-green-800 dark:text-zinc-400">Here You Can Create The Total Energies Product Categories</p>
                {/* <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{totalBalance}</h1> */}
            </div>
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 pt-4">
                <div className="px-4 rounded-lg border border-gray-200 dark:border-[#1F1F23]">
                    <div className="space-y-1">
                        <TextInput label="Category Name" register={register} errors={errors} type="text" name="name"  icon={CaseSensitive} placeholder="Please Enter Category Name" isRequired={true} inFocus ={true} minLength={5} maxLength={20}/>
                    </div>
                    <div className="space-y-1">
                        <TextArea register={register} errors={errors} label="Category Description" name="description" helperText="Please Enter Category Description" />
                    </div>
                </div>
                <div className="">
                    <ImageInput
                        title = "Upload Category Image" 
                        imageUrl={imageUrl}
                        setImageUrl={setImageUrl}
                        endpoint = "imageUploader"
                    />

                    <div className="grid grid-cols-1 space-y-2 my-2">
                        <CloseButton href="" parent="analytics" />
                        <SubmitButton
                            className='w-full'
                            title={fetchedCategory ? `Update ${fetchedCategory.name}` : `Create ${"Product Category"}`}
                            // title='Create Product Category'
                            loading={loading}
                        />
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}
