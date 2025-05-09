// import { Category } from "@/lib/generated/prisma";
import { Category, News, Product, Region } from "@/lib/generated/prisma";
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

const newsAPI = `${baseUrl}/api/v1/newsAPI`
export async function fetchAllNews() {
    try {
        const response = await fetch(newsAPI)
        const fetchedNews = await response.json()
        console.log(fetchedNews.data)
        return fetchedNews.data as News[]
    } catch (error) {
        console.log(error);
        return []
    }
}

export async function fetchSingleNews(id:string) {
    const singleNewsAPI = `${baseUrl}/api/v1/newsAPI/${id}`
    try {
        const response = await fetch(singleNewsAPI)
        const fetchedSingleNews = await response.json()
        console.log(fetchedSingleNews.data);
        return fetchedSingleNews.data as News
    } catch (error) {
        console.log(error);
        return null
    }
}