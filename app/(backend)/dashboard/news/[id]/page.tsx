import { fetchSingleNews } from '@/action/fetch'
import NewsForm from '@/components/backend/newsForm'
import React from 'react'

export default async function page({params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    const fetchedSingleNews = await fetchSingleNews(id)
    // console.log(id, "Boom");
    // console.log(fetchedSingleNews, "News Fetched Successfully✅");
  return (
    <>
      <NewsForm fetchedSingleNews={fetchedSingleNews}/>
    </>
  )
}