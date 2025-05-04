"use client"

import React, { useState } from 'react'
import TextInput from './formInputs/textInput'
import TextArea from './formInputs/textAreaInput'
import ImageInput from './formInputs/imageInput'
import { useForm } from 'react-hook-form';
import { baseUrl, NewsTypes } from '@/types/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { newsSchema } from '@/schemas/schema';
import SubmitButton from './submitButton';
import CloseButton from './formInputs/closeButton';
import { toast } from 'sonner'
import { CaseSensitive } from 'lucide-react'

export default function NewsForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<NewsTypes>({resolver: zodResolver(newsSchema) });
    const [loading, setLoading] = useState(false)
    const [imageUrl, setImageUrl] = useState<string | null>()
    async function onSubmit(newsData:NewsTypes) {
        newsData.imageUrl = imageUrl ?? undefined
        try {
            if(!imageUrl) {
                toast.error("No Image Uploaded Yet...!!!🥺")
                return
            }
            setLoading(true)
            const response = await fetch(`${baseUrl}/api/v1/newsAPI`, {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(newsData)
            })
            console.log(newsData);
            if(response.ok) {
                setLoading(false)
                console.log(response);
                console.log(newsData);
                toast.success("News Headline Created Successfully")
                reset()
            } else {
                setLoading(false)
                toast.error("Failed To Create News Headline")
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
                <p className="text-xl font-semibold text-green-800 dark:text-zinc-400">Here You Can Create The Total Energies News</p>
                {/* <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{totalBalance}</h1> */}
            </div>
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 pt-4">
                <div className="px-4 rounded-lg border border-gray-200 dark:border-[#1F1F23]">
                    <div className="space-y-1">
                        <TextInput label="News Headline" register={register} errors={errors} type="text" name="title"  icon={CaseSensitive} placeholder="Please Enter News Headline" isRequired={true} inFocus ={true} minLength={5} maxLength={20}/>
                    </div>
                    <div className="space-y-1">
                        <TextArea register={register} errors={errors} label="News Content" name="content" helperText="Please Enter News Content" />
                    </div>
                </div>
                <div className="">
                    <ImageInput
                        title = "Upload News Headline Image" 
                        imageUrl={imageUrl}
                        setImageUrl={setImageUrl}
                        endpoint = "imageUploader"
                    />

                    <div className="grid grid-cols-1 space-y-2 my-2">
                        <CloseButton href="" parent="analytics" />
                        <SubmitButton
                            className='w-full'
                            // title={editingId ? `Update ${title}` : `Create ${title}`}
                            title='Create News Headline'
                            loading={loading}
                        />
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}

