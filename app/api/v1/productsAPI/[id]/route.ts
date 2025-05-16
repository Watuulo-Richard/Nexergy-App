import { prismaClient } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Schema for product validation
const productAPISchema = z.object({

    name: z.string().min(1, "Minimum 3 Characters"),
    categoryId: z.string(),
    price:z.coerce.number(),
    stock:z.coerce.number(),
    image: z.string(),
    manual:z.string().optional(),
  
});
  
export async function PATCH (request:NextRequest, {params}:{params:Promise<{id:string}>}) {
    // const productData = await request.json()
    // return NextResponse.json({
    //     data: productData
    // })
    try {
        const {id} = await params
        const productData = await request.json()
        // Validate Data
        const validatedData = productAPISchema.parse(productData)
        const updateProduct = await prismaClient.product.update({
            where: {
                id: id
            },
            include: {
                category: true
            },
            data:validatedData
        })
        return NextResponse.json({
            message: "Product Updated Successfully",
            data: updateProduct,
            status: 200
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Update Product",
            data: null,
            status: 500
        }, {
            status: 500
        })
    }
}

export async function GET (request:NextRequest, {params}:{params:Promise<{id:string}>}) {
    try {
        const {id} = await params
        const getSingleProduct = await prismaClient.product.findUnique({
            where: {
                id: id
            },
            include: {
                category: true
            }
        })
        return NextResponse.json({
            message: "Fetched Product Successfully",
            data: getSingleProduct,
            status: 200
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Fetch Product",
            data: null,
            status: 500
        }, {
            status: 500
        })
    }
}
export async function DELETE (request:NextRequest, {params}:{params:Promise<{id:string}>}) {
    try {
        const {id} = await params
        const deleteProduct = await prismaClient.product.delete({
            where: {
                id: id
            }
        })
        return NextResponse.json({
            message: "Product Deleted Successfully",
            data: deleteProduct,
            status: 200
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Delete Product",
            data: null,
            status: 500
        }, {
            status: 500
        })
    }
}