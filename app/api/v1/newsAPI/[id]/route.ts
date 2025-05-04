import { prismaClient } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Schema for product validation
const newsAPISchema = z.object({

    title: z.string().min(1, "Minimum One Character"),
    content: z.string(),
    image: z.string(),
  
});
  
export async function PATCH (request:NextRequest, {params}:{params:Promise<{id:string}>}) {
    // const newsData = await request.json()
    // return NextResponse.json({
    //     data: newsData
    // })
    try {
        const newsData = await request.json()
        const {id} = await params
        // Validate Data
        const validatedData = newsAPISchema.parse(newsData)
        const updateNews = await prismaClient.news.update({
            where: {
                id: id
            },
            data:validatedData
        })
        return NextResponse.json({
            message: "News Updated Successfully",
            data: updateNews,
            status: 201
        }, {
            status: 201
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Update News",
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
        const getSingleNews = await prismaClient.news.findUnique({
            where: {
                id: id
            }
        })
        return NextResponse.json({
            message: "Fetched Single News Successfully",
            data: getSingleNews,
            status: 200
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Fetch Single News",
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
        const deleteSingleNews = await prismaClient.news.delete({
            where: {
                id: id
            }
        })
        return NextResponse.json({
            message: "News Deleted Successfully",
            data: deleteSingleNews,
            status: 200
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Delete News",
            data: null,
            status: 500
        }, {
            status: 500
        })
    }
}