"use client"

import React, { useState } from 'react'
import TextInput from './formInputs/textInput'
import ImageInput from './formInputs/imageInput'
import { useForm } from 'react-hook-form';
import { baseUrl, ProductTypes } from '@/types/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { productSchema } from '@/schemas/schema';
import SubmitButton from './submitButton';
import CloseButton from './formInputs/closeButton';
import { toast } from 'sonner'
import { CaseSensitive } from 'lucide-react'
import FormSelectInput from './formInputs/selectInput'
import MultipleFileUpload from './pdfUploader';
import { Category } from '@/lib/generated/prisma';

export type FileProps = {
    title: string;
    type: string;
    size: number;
    url: string;
};

export default function ProductForm({fetchedCategories}:{fetchedCategories:Category[]}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ProductTypes>({resolver: zodResolver(productSchema) });
    const [loading, setLoading] = useState(false)
    const [imageUrl, setImageUrl] = useState<string | null>()

    // const initialMainCategoryId = initialData?.mainCategoryId;
    const modelOptions = fetchedCategories.map((category) => {
        // why??
        return {
            value: category.id,
            label: category.name
        }
    });
    const [selectedCategory, setSelectedCategory] = useState<any>("");
    const [files, setFiles] = useState<FileProps[]>([]);
    
    async function onSubmit(productData:ProductTypes) {
        productData.image = imageUrl ?? undefined
        productData.manual = files[0].url
        productData.price = Number(productData.price)
        productData.stock = Number(productData.stock)
        productData.categoryId = selectedCategory.value
        try {
            if(!imageUrl) {
                toast.error("No Image URL")
                return
            }
            if(!files[0].url) {
                toast.error("No File Uploaded Yet...!!! Please Upload A File")
                return
            }
            setLoading(true)
            const response = await fetch(`${baseUrl}/api/v1/productsAPI`, {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(productData)
            })
            console.log(productData);
            if(response.ok) {
                setLoading(false)
                console.log(response);
                console.log(productData);
                toast.success("Product Created Successfully")
                reset()
            } else {
                setLoading(false)
                toast.error("Failed To Create Product")
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
                <p className="text-xl font-semibold text-green-800 dark:text-zinc-400">Here You Can Create The Total Energies Product</p>
                {/* <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{totalBalance}</h1> */}
            </div>
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 pt-4">
                <div className="px-4 rounded-lg border border-gray-200 dark:border-[#1F1F23]">
                    <div className="space-y-1">
                        <TextInput label="Product Name" register={register} errors={errors} type="text" name="name"  icon={CaseSensitive} placeholder="Please Enter Product Name" isRequired={true} inFocus ={true} minLength={5} maxLength={20}/>
                    </div>
                    <div className="space-y-1">
                        <FormSelectInput
                            label="Categories"
                            options={modelOptions}
                            option={selectedCategory}
                            setOption={setSelectedCategory}
                            toolTipText="Add New Category"
                            href="/dashboard/categories"
                        />
                    </div>
                    <div className="space-y-1">
                        {/* Change Text To Number Recall💡💡💡 */}
                        <TextInput label="Product Price" register={register} errors={errors} type="text" name="price"  icon={CaseSensitive} placeholder="Please Enter Product Price" isRequired={true} inFocus ={true} minLength={1} maxLength={30}/>
                    </div>
                    <div className="space-y-1">
                        {/* Change Text To Number Recall💡💡💡 */}
                        <TextInput label="Product Stock" register={register} errors={errors} type="text" name="stock"  icon={CaseSensitive} placeholder="Please Enter Product Stock" isRequired={true} inFocus ={true} minLength={1} maxLength={30}/>
                    </div>
                    <div className="space-y-1">
                        <MultipleFileUpload
                            className='my-4'
                            label="Add Product Manual Files"
                            files={files}
                            setFiles={setFiles}
                            endpoint="fileUploads"
                        />
                    </div>
                </div>
                <div className="">
                    <ImageInput
                        title = "Upload Product Image" 
                        imageUrl={imageUrl}
                        setImageUrl={setImageUrl}
                        endpoint = "imageUploader"
                    />

                    <div className="grid grid-cols-1 space-y-2 my-2">
                        <CloseButton href="" parent="analytics" />
                        <SubmitButton
                            className='w-full'
                            // title={editingId ? `Update ${title}` : `Create ${title}`}
                            title='Create Product Category'
                            loading={loading}
                        />
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}
