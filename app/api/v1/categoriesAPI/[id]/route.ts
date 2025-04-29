
import { prismaClient } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Schema for product validation
const categoryAPISchema = z.object({

    name: z.string().min(3, "Minimum 3 Characters"),
    description: z.string().min(3, "Minimum 3 Characters"),
    image: z.string()
  
});
export async function PATCH (request:NextRequest, {params}:{params:Promise<{id:string}>}) {
    // const categoryData = await request.json()
    // return NextResponse.json({
    //     data: categoryData
    // })

    try {
        const {id} = await params
        const categoryData = await request.json()
        const validatedData = categoryAPISchema.parse(categoryData)
        const updateCategory = await prismaClient.category.update({
            where: {
                id: id
            },
            data:validatedData
        })
        return NextResponse.json({
            message: "Category Updated Successfully",
            data: updateCategory,
            status: 200
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Update Category",
            data: null,
            status: 500
        }, {
            status: 500
        })
    }
}

export async function GET(request:NextRequest, {params}:{params:Promise<{id:string}>}) {
    try {
        const {id} = await params
        const getSingleCategory = await prismaClient.category.findUnique({
            where: {
                id: id
            }
        })
        return NextResponse.json({
            message: "Fetched Single Category Successfully",
            data: getSingleCategory,
            status: 200
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Fetch Single Category",
            data: null,
            status: 500
        }, {
            status: 500
        })
    }
}

export async function DELETE(request:NextRequest, {params}:{params:Promise<{id:string}>}) {
    try {
        const {id} = await params
        const deleteCategory = await prismaClient.category.delete({
            where: {
                id: id
            }
        })
        return NextResponse.json({
            message: "Category Deleted Successfully",
            data: deleteCategory,
            status: 200
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Delete Category",
            data: null,
            status: 500
        }, {
            status: 500
        })
    }
}