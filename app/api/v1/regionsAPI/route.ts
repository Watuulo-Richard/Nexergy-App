import { prismaClient } from '@/prisma/db'
import { NextRequest, NextResponse } from 'next/server'
import { z } from "zod";

// Schema for product validation
const regionSchema = z.object({
    name:z.string().min(1, "Minimum 1 Character"),
    code:z.string().min(1, "Minimum 1 Character")
})
export async function POST(request:NextRequest) {
    try {
        const regionData = await request.json()
        // Validation
        const validatedData = regionSchema.parse(regionData)
        const createRegion = await prismaClient.region.create({
            data: validatedData
        })
        return NextResponse.json({
            message: "Create Region Successfully",
            data: createRegion,
            status: 201
        }, {
            status: 201
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Create Region",
            data: null,
            status: 500
        }, {
            status: 500
        })
    }
}

export async function GET(request:NextRequest) {
    try {
        const getRegion = await prismaClient.region.findMany({
            orderBy: {
                name: "desc"
            }
        })
        return NextResponse.json({
            message: "Region Fetched Successfully",
            data: getRegion,
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
