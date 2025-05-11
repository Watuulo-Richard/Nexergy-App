
import { prismaClient } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Schema for product validation
const branchAPISchema = z.object({
    name:z.string().min(1, "Minimum 1 Character"),
    regionId:z.string()
})

export async function POST (request:NextRequest) {
    // const categoryData = await request.json()
    // return NextResponse.json({
    //     data: categoryData
    // })
    try {
        const branchData = await request.json()
        const validatedData = branchAPISchema.parse(branchData)
        const createBranch = await prismaClient.branch.create({
            data:validatedData
        })
        return NextResponse.json({
            message: "Branch Created Successfully",
            data: createBranch,
            status: 201
        }, {
            status: 201
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Create Branch",
            data: null,
            status: 500
        }, {
            status: 500
        })
    }
}

export async function GET (request:NextRequest) {
    try {
        const getAllBranches = await prismaClient.branch.findMany({
            orderBy: {
                name: "desc"
            }
        })
        return NextResponse.json({
            message: "Fetched All Branches Successfully",
            data: getAllBranches,
            status: 200
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Fetch All Branches",
            data: null,
            status: 500
        }, {
            status: 500
        })
    }
}