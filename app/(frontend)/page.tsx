import { fetchAllCategories, fetchAllNews, fetchAllProducts } from '@/action/fetch'
import CategoriesSection from '@/components/frontend/categories-section'
import FeaturedSection from '@/components/frontend/featured-section'
import HelpSection from '@/components/frontend/help-section'
import OurLatestProducts from '@/components/frontend/our-latest-products'
import TestingSection from '@/components/frontend/test-section'
import React from 'react'

export default async function page() {
  const fetchedProducts = await fetchAllProducts()
  if(!fetchAllProducts) {
    return (
      <div className="">No Products Available...!!!</div>
    )
  }
  const fetchedNews = await fetchAllNews()
  if(!fetchedNews) {
    return (
      <div className="">No News Available...!!!</div>
    )
  }
  const fetchedCategories = await fetchAllCategories()
  if(!fetchedCategories) {
    return (
      <div className="">No Categories Available...!!!</div>
    )
  }
const heroData = {
  title: "Capital Markets Day 2025",
  description:
    "Shell plc outlined to investors the next steps in its strategy to deliver more value with less emissions.",
  buttonText: "Read more",
  buttonLink: "#",
  imagePath: "/heroImage.jpg",
}
  return (
    <>
      <TestingSection heroData={heroData}/>
      <FeaturedSection  fetchedNews={fetchedNews}/>
      <CategoriesSection fetchedCategories={fetchedCategories}/>
      <OurLatestProducts fetchedProducts={fetchedProducts}/>
      <HelpSection />
    </>
  )
}
