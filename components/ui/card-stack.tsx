"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ProductCartType } from "@/store/store";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  productsInCart,
  offset,
  scaleFactor,
}: {
  productsInCart: ProductCartType[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<ProductCartType[]>(productsInCart);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: ProductCartType[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 2000);
  };

  return (
    <div className="relative h-30 w-full md:h-30">
      {cards.map((product, index) => {
        return (
          <motion.div
            key={product.id}
            className="absolute dark:bg-black bg-white h-30 w-30 md:h-30 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="flex items-center space-x-4">
                <div className="font-normal text-neutral-700 dark:text-neutral-200 h-12 w-12">
                    <img className="h-full w-full object-fit-contain object-center" src={product.image} alt={product.name} height={400} width={400} />
                </div>
                <div>
                <p className="text-neutral-500 font-medium dark:text-white">
                    {product.name}
                </p>
                <p className="text-neutral-400 font-normal dark:text-neutral-200">
                    {product.numberOfProducts} Items
                </p>
                </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
