import { prismaClient } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Schema for product validation
const newsAPISchema = z.object({

    title: z.string().min(1, "Minimum One Character"),
    content: z.string(),
    image: z.string().optional(),
  
});
  
export async function POST (request:NextRequest) {
    // const newsData = await request.json()
    // return NextResponse.json({
    //     data: newsData
    // })
    try {
        const newsData = await request.json()
        // Validate Data
        const validatedData = newsAPISchema.parse(newsData)
        const createNews = await prismaClient.news.create({
            data:validatedData
        })
        return NextResponse.json({
            message: "News Created Successfully",
            data: createNews,
            status: 201
        }, {
            status: 201
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Create News",
            data: null,
            status: 500
        }, {
            status: 500
        })
    }
}

export async function GET (request:NextRequest) {
    try {
        const getAllNews = await prismaClient.news.findMany({
            orderBy: {
                title: "desc"
            }
        })
        return NextResponse.json({
            message: "Fetched All News Successfully",
            data: getAllNews,
            status: 200
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Fetch All News",
            data: null,
            status: 500
        }, {
            status: 500
        })
    }
}