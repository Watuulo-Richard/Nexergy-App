import { prismaClient } from '@/prisma/db';
import { NextRequest, NextResponse } from 'next/server';

// Schema for order validation
// const orderAPISchema = z.object({

//     email:z.string().email("Invalid Email"),
//     firstName:z.string().min(1, "Minimum 1 Character"),
//     lastName:z.string().min(1, "Minimum 1 Character"),
//     phone:z.string().max(10, 'Maximum 10 Characters'),
//     branchId:z.string()

// });

export async function POST(request: NextRequest) {
  // const orderDetails = await request.json()
  // return NextResponse.json({
  //     data: orderDetails
  // })
  try {
    const orderDetails = await request.json();
    console.log(orderDetails.orderItems, 'ijijijijiji.......');
    const createOrder = await prismaClient.order.create({
      data: {
        firstName: orderDetails.firstName,
        lastName: orderDetails.lastName,
        email: orderDetails.email,
        branchId: orderDetails.branchId,
        phone: orderDetails.phone,
      },
    });
    console.log(createOrder, 'hellooo....................');

    // Here Am Having Access To The Order Items Array
    for (const orderItem of orderDetails.orderItems) {
      // Here After Having Access To One Item, I send One By One To The DB
      const createOrderItemsInDB = await prismaClient.orderItem.create({
        data: {
          name: orderItem.name,
          price: orderItem.price,
          stock: orderItem.numberOfProducts,
          image: orderItem.image,
          manual: orderItem.manual,
          orderId: createOrder.id,
        },
      });
      console.log(createOrderItemsInDB, 'the items to be sent in the DB');
    }
    return NextResponse.json(
      {
        message: 'Order Saved Successfully',
        data: createOrder,
        status: 201,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: 'Failed To Save Order',
        data: null,
        status: 500,
      },
      {
        status: 500,
      },
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const getAllOrders = await prismaClient.order.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        orderItems: true
      }
    });
    return NextResponse.json(
      {
        message: 'Fetched All Orders Successfully',
        data: getAllOrders,
        status: 200,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: 'Failed To Fetch All Orders',
        data: null,
        status: 500,
      },
      {
        status: 500,
      },
    );
  }
}
