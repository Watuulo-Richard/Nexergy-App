import { toast } from 'sonner';
import { create } from 'zustand'
import { persist } from "zustand/middleware";

export type ProductCartType = {
    id:string;
    name:string;
    price:number;
    image:string;
    numberOfProducts: number;
}

type ProductState = {
    productCartArray: ProductCartType[],
    handleAddToCartNow: (product:ProductCartType)=>void,
    handleRemoveProductFromCart: (id:string)=>void,
    handleQuantityIncrement: (id:string)=>void,
    handleQuantityDecrement: (id:string)=>void,
    handleClear: ()=>void
}

export const useProductState = create<ProductState>()(
    persist(
    (set, get) => ({
        productCartArray:[],

        handleAddToCartNow(product){
            const myProductArray = get().productCartArray
            
            const existingProductInCart = myProductArray.find((item)=>item.id === product.id)
            if(existingProductInCart){
                toast.error('Product Already Exists')
            }
            else {
                const myProductArray = get().productCartArray
                set({productCartArray:[...myProductArray, product]})
                toast.success('Product Added In Cart Successfully...!!!')
                console.log(myProductArray);                     

            }
        },

        handleRemoveProductFromCart:(id)=>{
            const myProductArray = get().productCartArray
            const filteredProducts = myProductArray.filter((product)=>product.id !== id)
            set({productCartArray:filteredProducts})
            toast.error('Product Removed From Cart...🥺🥺🥺')
        },

        handleClear(){
            console.log("button clicked");
            set({productCartArray:[]})
        },

        handleQuantityIncrement:(id)=>{
            const myProductArray = get().productCartArray
            const productInCartArray = myProductArray.find((itemInThatVeryArray) => itemInThatVeryArray.id === id)
            if(productInCartArray){
                // console.log(productInCartArray.id)
                productInCartArray.numberOfProducts += 1
                // console.log(productInCartArray.numberOfProducts);
                const myProductArray = get().productCartArray
                set({productCartArray:myProductArray})
            }
            else {
                toast.error("First Add The Product To Cart")
            }
        },

        handleQuantityDecrement:(id)=> {
            const myProductArray = get().productCartArray
            const productInCartArray = myProductArray.find((itemInThatVeryArray) => itemInThatVeryArray.id === id)
            if(productInCartArray){
                console.log(productInCartArray.id);
                productInCartArray.numberOfProducts -= 1
                console.log(productInCartArray.numberOfProducts);
                const myProductArray  = get().productCartArray
                set({productCartArray: myProductArray})
            }
            else {
                toast.error("First Add The Product To Cart")
            }
        }
         
    }),
    {
        name: "local-storage",
      }
    )
)
