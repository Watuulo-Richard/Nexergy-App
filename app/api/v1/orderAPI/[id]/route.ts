import { prismaClient } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
  
// export async function PATCH (request:NextRequest, {params}:{params:Promise<{id:string}>}) {
//     // const newsData = await request.json()
//     // return NextResponse.json({
//     //     data: newsData
//     // })
//     try {
//         const newsData = await request.json()
//         const {id} = await params
//         // Validate Data
//         const validatedData = newsAPISchema.parse(newsData)
//         const updateNews = await prismaClient.news.update({
//             where: {
//                 id: id
//             },
//             data:validatedData
//         })
//         return NextResponse.json({
//             message: "News Updated Successfully",
//             data: updateNews,
//             status: 201
//         }, {
//             status: 201
//         })
//     } catch (error) {
//         console.log(error);
//         return NextResponse.json({
//             message: "Failed To Update News",
//             data: null,
//             status: 500
//         }, {
//             status: 500
//         })
//     }
// }

export async function GET (request:NextRequest, {params}:{params:Promise<{id:string}>}) {
    try {
        const {id} = await params
        const getSingleOrder = await prismaClient.order.findUnique({
            where: {
                id: id
            }
        })
        return NextResponse.json({
            message: "Order Fetched Successfully...✅",
            data: getSingleOrder,
            status: 200
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Fetch Order...!!!🥺",
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
        const deleteOrder = await prismaClient.order.delete({
            where: {
                id: id
            }
        })
        return NextResponse.json({
            message: "Order Deleted Successfully...✅",
            data: deleteOrder,
            status: 200
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Delete Order...!!!🥺",
            data: null,
            status: 500
        }, {
            status: 500
        })
    }
}