import { Branch, Category, News, Product, Region } from "@/lib/generated/prisma";
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


export async function fetchSingleCategory(id:string) {
    const categoryAPI = `${baseUrl}/api/v1/categoriesAPI/${id}`
    try {
        const response = await fetch(categoryAPI)
        const fetchedCategory = await response.json()
        // console.log(fetchedCategory.data);
        return fetchedCategory.data as Category
    } catch (error) {
        console.log(error);
        return null
    }
}

export async function deleteCategory(id:string) {
    const categoriesAPI = `${baseUrl}/api/v1/categoriesAPI/${id}`
    try {
        const response = await fetch(categoriesAPI, {
            method: "DELETE",
            headers: {"Content-Type":"application/json"}
        })
        console.log(response);
        return {
            ok: true
        }
    } catch (error) {
        console.log(error);
        return {
            ok: false
        }
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

export async function fetchSingleProduct(id:string) {
    const productsAPI = `${baseUrl}/api/v1/productsAPI/${id}`
    try {
        const response = await fetch(productsAPI)
        const fetchedProduct = await response.json()
        // console.log(fetchedProduct.data);
        return fetchedProduct.data as Product
    } catch (error) {
        console.log(error);
        return null
    }
}

export async function deleteProduct(id:string) {
    const productsAPI = `${baseUrl}/api/v1/productsAPI/${id}`
    try {
        const response = await fetch(productsAPI, {
            method: "DELETE",
            headers: {"Content-Type":"application/json"}
        })
        console.log(response);
        return {
            ok: true
        }
    } catch (error) {
        console.log(error);
        return {
            ok: false
        }
    }
}

const branchAPI = `${baseUrl}/api/v1/branchesAPI`
export async function fetchAllBranches() {
    try {
        const response = await fetch(branchAPI)
        const fetchedBranches = await response.json()
        // console.log(fetchedBranches.data);
        return fetchedBranches.data as Branch[]
    } catch (error) {
        console.log(error);
        return []
    }
}

export async function fetchSingleBranch(id:string) {
    const branchAPI = `${baseUrl}/api/v1/branchesAPI/${id}`
    try {
        const response = await fetch(branchAPI)
        const fetchedBranch = await response.json()
        // console.log(fetchedBranch.data);
        return fetchedBranch.data as Branch
    } catch (error) {
        console.log(error);
        return null
    }
}

export async function deleteBranch(id:string) {
    const branchAPI = `${baseUrl}/api/v1/branchesAPI/${id}`
    try {
        const response = await fetch(branchAPI, {
            method: "DELETE",
            headers: {"Content-Type":"application/json"},
        })
        console.log(response);
        return {
            ok: true
        }
    } catch (error) {
        console.log(error);
        return {
            ok: false
        }
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

export async function fetchSingleRegion(id:string) {
    const regionAPI = `${baseUrl}/api/v1/regionsAPI/${id}`
    try {
        const response = await fetch(regionAPI)
        const fetchedRegion = await response.json()
        // console.log(fetchedRegion.data);
        return fetchedRegion.data as Region
    } catch (error) {
        console.log(error);
        return null
    }
}

export async function deleteRegion(id:string) {
    const regionAPI = `${baseUrl}/api/v1/regionsAPI/${id}`
    try {
        const response = await fetch(regionAPI, {
            method: "DELETE",
            headers: {"Content-Type":"application/json"},
        })
        console.log(response);
        return {
            ok: true
        }
    } catch (error) {
        console.log(error);
        return {
            ok: false
        }
    }
}

const newsAPI = `${baseUrl}/api/v1/newsAPI`
export async function fetchAllNews() {
    try {
        const response = await fetch(newsAPI)
        const fetchedNews = await response.json()
        // console.log(fetchedNews.data)
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
        // console.log(fetchedSingleNews.data);
        return fetchedSingleNews.data as News
    } catch (error) {
        console.log(error);
        return null
    }
}

export async function deleteNews(id:string) {
    const deleteNewsAPI = `${baseUrl}/api/v1/newsAPI/${id}`
    try {
        const response = await fetch(deleteNewsAPI, {
            method: "DELETE",
            headers: {
                "Content-Type":"application/json"
            }
        })
        console.log(response);
        return {
            ok: true
        }
    } catch (error) {
        console.log(error);
        return {
            ok: false
        }
    }
}