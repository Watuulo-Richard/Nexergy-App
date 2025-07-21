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
export type OrderItemTypes = {
  name:string;
  price:number;
  stock:number;
  image:string;
  manual?:string;
}

export type OrderTypes = {
  email:string;
  firstName:string;
  lastName:string;
  phone:string;
  branchId?:string;
  orderItems?:OrderItemTypes[];
}

// https://lh3.googleusercontent.com/a/ACg8ocLZ8Prhe4G9JYaLbD2NdEU4QCvF0c0Snd3VgS94-twHECPVa3CW=s96-c