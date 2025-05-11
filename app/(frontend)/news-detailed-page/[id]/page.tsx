import { fetchSingleNews } from '@/action/fetch'
import NewsDetails from '@/components/frontend/news-details'
import React from 'react'

export default async function page({params}:{params:Promise<{id:string}>}) {
  const {id} = await params
  const fetchedSingleNews = await fetchSingleNews(id)
  // console.log(id);
  // console.log(fetchedSingleNews, "News Available in System");
  return (
    <>
      <NewsDetails fetchedSingleNews={fetchedSingleNews}/>
    </>
  )
}
