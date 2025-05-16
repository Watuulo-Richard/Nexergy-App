import { fetchAllCategories, fetchAllNews, fetchAllProducts } from '@/action/fetch'
import CategoriesSection from '@/components/frontend/categories-section'
import FeaturedSection from '@/components/frontend/featured-section'
import HelpSection from '@/components/frontend/help-section'
import OurLatestProducts from '@/components/frontend/our-latest-products'
import TestingSection from '@/components/frontend/test-section'
import React from 'react'

export default async function page() {
  const fetchedProducts = await fetchAllProducts()
  // console.log(fetchedProducts, "Products Have Arrived😒😒😒");
  const fetchedNews = await fetchAllNews()
  // This is our simple object with all the information
  const fetchedCategories = await fetchAllCategories()
  // console.log(fetchedCategories, "Categories Have Arrived😒😒😒");
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
