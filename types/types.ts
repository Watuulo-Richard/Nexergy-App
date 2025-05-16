import { Category } from "@/lib/generated/prisma"

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export type userTypes = {
    name: string,
    email: string,
    password: string
}

// Define types and schema directly in the component
export type UserLoginTypes = {
  email: string
  password: string
}

export type CategoryTypes = {
  name:string;
  description:string;
  image?:string;
}

export type ProductTypes = {
  name:string;
  categoryId?:string;
  price:number;
  stock:number;
  image?:string;
  manual?:string;
}

export type ProductCategory = {
  id:string;
  name:string;
  price:number;
  stock:number;
  image:string;
  manual:string;
  categoryId:string;
  category: Category
}

export type BranchTypes = {
  name:string;
  regionId?:string;
    
}

export type RegionTypes = {

  name:string;
  code:string;
  
}

export type NewsTypes = {
  title:string;
  content:string;
  imageUrl?:string,
}
