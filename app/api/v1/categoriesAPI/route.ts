
import { prismaClient } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// export const categorySchema = z.object({
//     name: z.string().min(3, "Minimum 3 Characters"),
//     description: z.string().min(3, "Minimum 3 Characters"),
//     image: z.string().optional()

// })

// Schema for product validation
const categoryAPISchema = z.object({

    name: z.string().min(3, "Minimum 3 Characters"),
    description: z.string().min(3, "Minimum 3 Characters"),
    image: z.string()
  
});
export async function POST (request:NextRequest) {
    // const categoryData = await request.json()
    // return NextResponse.json({
    //     data: categoryData
    // })
    try {
        const categoryData = await request.json()
        const validatedData = categoryAPISchema.parse(categoryData)
        const createCategory = await prismaClient.category.create({
            data:validatedData
        })
        return NextResponse.json({
            message: "Category Created Successfully",
            data: createCategory,
            status: 201
        }, {
            status: 201
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Create Category",
            data: null,
            status: 500
        }, {
            status: 500
        })
    }
}

export async function GET (request:NextRequest) {
    try {
        const getAllCategories = await prismaClient.category.findMany({
            orderBy: {
                name: "desc"
            }
        })
        return NextResponse.json({
            message: "Fetched All Categories Successfully",
            data: getAllCategories,
            status: 200
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Fetch All Categories",
            data: null,
            status: 500
        }, {
            status: 500
        })
    }
}