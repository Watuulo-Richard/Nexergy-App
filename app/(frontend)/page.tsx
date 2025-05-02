import { fetchAllProducts } from '@/action/fetch'
import CategoriesSection from '@/components/frontend/categories-section'
import FeaturedSection from '@/components/frontend/featured-section'
import Footer from '@/components/frontend/footer-section'
import HelpSection from '@/components/frontend/help-section'
import HeroSection from '@/components/frontend/hero-section'
import NavigationBar from '@/components/frontend/navigation-bar'
import OurLatestProducts from '@/components/frontend/our-latest-products'
import TestingSection from '@/components/frontend/test-section'
import React from 'react'

export default async function page() {
  const fetchedProducts = await fetchAllProducts()
  console.log(fetchedProducts, "Products Have Arrived😒😒😒");
  // This is our simple object with all the information
const heroData = {
  title: "Capital Markets Day 2025",
  description:
    "Shell plc outlined to investors the next steps in its strategy to deliver more value with less emissions.",
  buttonText: "Read more",
  buttonLink: "#",
  imagePath: "/factory-producing-co2-pollution.jpg",
}
  return (
    <>
      <TestingSection heroData = {heroData}/>
      <FeaturedSection />
      <CategoriesSection />
      <OurLatestProducts fetchedProducts={fetchedProducts}/>
      <HelpSection />
    </>
  )
}
