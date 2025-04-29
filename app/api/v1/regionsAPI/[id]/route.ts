import { prismaClient } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Schema for product validation
const regionSchema = z.object({
    name:z.string().min(1, "Minimum 1 Character"),
    code:z.string().min(1, "Minimum 1 Character")
})

  
export async function PATCH (request:NextRequest, {params}:{params:Promise<{id:string}>}) {
    
    try {
        const {id} = await params
        const regionData = await request.json()
        // Validate Data
        const validatedData = regionSchema.parse(regionData)
        const updateRegion = await prismaClient.region.update({
            where: {
                id: id
            },
            data:validatedData
        })
        return NextResponse.json({
            message: "Region Updated Successfully",
            data: updateRegion,
            status: 200
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Update Region",
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
        const getSingleRegion = await prismaClient.region.findUnique({
            where: {
                id: id
            }
        })
        return NextResponse.json({
            message: "Region Fetched Successfully",
            data: getSingleRegion,
            status: 200
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Fetch Region",
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
        const getSingleRegion = await prismaClient.region.delete({
            where: {
                id: id
            }
        })
        return NextResponse.json({
            message: "Region Fetched Successfully",
            data: getSingleRegion,
            status: 200
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Fetch Region",
            data: null,
            status: 500
        }, {
            status: 500
        })
    }
}