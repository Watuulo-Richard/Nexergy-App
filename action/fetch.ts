// import { Category } from "@/lib/generated/prisma";
import { Category, Product, Region } from "@/lib/generated/prisma";
import { baseUrl } from "@/types/types";

const categoriesAPI = `${baseUrl}/api/v1/categoriesAPI`

export async function fetchAllCategories() {
    try {
        const response = await fetch(categoriesAPI)
        const fetchedCategories = await response.json()
        // console.log(fetchedCategories.data);
        return fetchedCategories.data as Category[]
    } catch (error) {
        console.log(error);
        return []
    }
}

const productsAPI = `${baseUrl}/api/v1/productsAPI`

export async function fetchAllProducts() {
    try {
        const response = await fetch(productsAPI)
        const fetchedProducts = await response.json()
        // console.log(fetchedProducts.data);
        return fetchedProducts.data as Product[]
    } catch (error) {
        console.log(error);
        return []
    }
}

const regionAPI = `${baseUrl}/api/v1/regionsAPI`
export async function fetchAllRegions() {
    try {
        const response = await fetch(regionAPI)
        const fetchedRegions = await response.json()
        // console.log(fetchedRegions.data);
        return fetchedRegions.data as Region[]
    } catch (error) {
        console.log(error);
        return []
    }
}