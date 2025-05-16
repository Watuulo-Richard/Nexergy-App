import { fetchAllProducts } from '@/action/fetch';
import CTASection from '@/components/frontend/product-section-components/cta-section';
import HeroSection from '@/components/frontend/product-section-components/hero-section';
import ProductsSection from '@/components/frontend/product-section-components/products-section';
import React from 'react';

export default async function page() {
  const fetchedProducts = await fetchAllProducts();
  // console.log(fetchedProducts, "just dropped by");
  return (
    <>
      <HeroSection />
      <section className="py-6 md:py-12 md:max-w-7xl container mx-auto">
        <div className="mx-4 md:mx-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {fetchedProducts.map((product) => {
            return (
              <div key={product.id} className="">
                <ProductsSection product={product} />
              </div>
            );
          })}
        </div>
      </section>
      <CTASection />
    </>
  );
}
