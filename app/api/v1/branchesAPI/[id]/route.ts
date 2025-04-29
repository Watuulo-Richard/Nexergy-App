import { prismaClient } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Schema for product validation
const branchAPISchema = z.object({
    name:z.string().min(1, "Minimum 1 Character"),
    regionId:z.string()
})
  
export async function PATCH (request:NextRequest, {params}:{params:Promise<{id:string}>}) {
    // const branchData = await request.json()
    // return NextResponse.json({
    //     data: branchData
    // })
    try {
        const {id} = await params
        const branchData = await request.json()
        // Validate Data
        const validatedData = branchAPISchema.parse(branchData)
        const updateBranch = await prismaClient.branch.update({
            where: {
                id: id
            },
            data:validatedData
        })
        return NextResponse.json({
            message: "Branch Updated Successfully",
            data: updateBranch,
            status: 200
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Update Branch",
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
        const getSingleBranch = await prismaClient.branch.findUnique({
            where: {
                id: id
            }
        })
        return NextResponse.json({
            message: "Fetched Branch Successfully",
            data: getSingleBranch,
            status: 200
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Fetch Branch",
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
        const deleteBranch = await prismaClient.branch.delete({
            where: {
                id: id
            }
        })
        return NextResponse.json({
            message: "Branch Deleted Successfully",
            data: deleteBranch,
            status: 200
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Delete Branch",
            data: null,
            status: 500
        }, {
            status: 500
        })
    }
}