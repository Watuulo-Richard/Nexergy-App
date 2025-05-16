import { prismaClient } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Schema for product validation
const productAPISchema = z.object({

    name: z.string().min(1, "Minimum One Character"),
    categoryId: z.string(),
    price:z.coerce.number(),
    stock:z.coerce.number(),
    image: z.string(),
    manual:z.string().optional(),
  
});

  
export async function POST (request:NextRequest) {
    // const productData = await request.json()
    // return NextResponse.json({
    //     data: productData
    // })
    try {
        const productData = await request.json()
        // Validate Data
        const validatedData = productAPISchema.parse(productData)
        const createProduct = await prismaClient.product.create({
            data:validatedData
        })
        return NextResponse.json({
            message: "Product Created Successfully",
            data: createProduct,
            status: 201
        }, {
            status: 201
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Create Product",
            data: null,
            status: 500
        }, {
            status: 500
        })
    }
}

export async function GET (request:NextRequest) {
    try {
        const getAllProducts = await prismaClient.product.findMany({
            orderBy: {
                name: "desc"
            },
            include: {
                category: true
            }
        })
        return NextResponse.json({
            message: "Fetched All Products Successfully",
            data: getAllProducts,
            status: 200
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Fetch All Products",
            data: null,
            status: 500
        }, {
            status: 500
        })
    }
}