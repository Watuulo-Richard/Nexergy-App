import CTASection from '@/components/frontend/product-section-components/cta-section'
import HeroSection from '@/components/frontend/product-section-components/hero-section'
import ProductsSection from '@/components/frontend/product-section-components/products-section'
import React from 'react'

export default function page() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <CTASection />
    </>
  )
}
