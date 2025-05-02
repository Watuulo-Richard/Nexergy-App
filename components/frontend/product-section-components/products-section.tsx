"use client"
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/generated/prisma';
import { useProductState } from '@/store/store';
import { CircleMinus, CirclePlus, ShoppingCart, Trash2 } from 'lucide-react';
import React, { useState } from 'react';

export default function ProductsSection({ product }: { product: Product }) {
  const {
    handleAddToCartNow,
    handleRemoveProductFromCart,
    productCartArray,
  } = useProductState();
  const [productCount, setProductCount] = useState(0)
  function handleCountIncrement() {
    // By Writing Prev I Mean By Product Count
    setProductCount((prev)=> prev +  1)
  }
  function handleCountDecrement() {
    if(productCount <= 0 ){
      return productCount
    }
    setProductCount((prev) => prev - 1)
  }

  const productToBeAddedToCart = productCartArray.find((item) => item.id === product.id);
  function addToCartFunction() {
    const cartObject = {
      id:product.id,
      name:product.name,
      image:product.image,
      price:product.price,
      numberOfProducts:productCount
    }
    handleAddToCartNow(cartObject)
  }
  return (
    <>
          <div
            className="relative flex flex-col my-2 bg-[#1a222c] shadow-xl rounded-lg"
          >
            <div className="relative p-2.5 h-60 overflow-hidden rounded-xl bg-clip-border">
              <img
                src={product.image}
                className="h-full w-full object-cover rounded-md"
              />
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-red-600 text-lg font-semibold">
                  {product.name}
                </p>
                <p className="text-white text-lg font-medium">
                  ${product.price.toString()}
                </p>
              </div>
              <div className="">
                <p className="text-slate-600 leading-normal font-light">
                  {product.stock} Available Products
                </p>
              </div>
              <div className="flex items-center space-x-2 py-2">
                {/* <Button onClick={()=>handleDecrementCount()} className='text-red-600 text-md'><CircleMinus /></Button> */}
                <Button onClick={()=>handleCountDecrement()} className='text-red-600 text-md'><CircleMinus /></Button>
                <p className='text-red-600'>{productCount}</p>
                {/* <Button onClick={()=>handleIncrementCount()} className='text-red-600 text-md'><CirclePlus /></Button> */}
                <Button onClick={()=>handleCountIncrement()} className='text-red-600 text-md'><CirclePlus /></Button>
              </div>
              {
                productToBeAddedToCart ? (
                  <button
                    onClick={()=>handleRemoveProductFromCart(product.id)}
                    className="flex items-center justify-center gap-2 rounded-md w-full py-2 px-4 border border-red-600 text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-gray-700 hover:bg-red-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <Trash2 className='w-6 h-6 text-lg'/>
                    <p>Remove From Cart</p>
                  </button>
                ) : (
                  (
                    <button
                      onClick={()=>addToCartFunction()}
                      className="flex items-center justify-center gap-2 rounded-md w-full py-2 px-4 border border-red-600 text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-gray-700 hover:bg-red-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      <ShoppingCart className='w-6 h-6 text-lg' />
                      Add to Cart
                    </button>
                  )
                )
              }
            </div>
          </div>
    </>
  );
}
