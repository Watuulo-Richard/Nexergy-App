"use server";

import { prismaClient } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { hashSync } from "bcrypt-ts";
export async function POST(request:NextRequest) {
  const userData = await request.json()
  const { name, email, password } = userData;
  try {
    const existingUser = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json({
        data: null,
        error: `User with this email ( ${email})  already exists in the Database`,
        status: 409,
      });
    }
    // Encrypt the Password =>bcrypt
    const hashedPassword = await hashSync(password, 10);
    //Generate Token
    const generateToken = () => {
      const min = 100000; // Minimum 6-figure number
      const max = 999999; // Maximum 6-figure number
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const userToken = generateToken();
    const newUser = await prismaClient.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        token: userToken,
      },
    });
    //Send an Email with the Token on the link as a search param
    const token = newUser.token;
    // const userId = newUser.id;
    // const userName = newUser.name.split(" ")[0];
    // const linkText = "Verify your Account ";
    // const message =
    //   "Thank you for registering with Gecko. To complete your registration and verify your email address, please enter the following 6-digit verification code on our website :";
    // const sendMail = await resend.emails.send({
    //   from: "Medical App <info@jazzafricaadventures.com>",
    //   to: email,
    //   subject: "Verify Your Email Address",
    //   react: EmailTemplate({ firstName, token, linkText, message }),
    // });
    console.log(token);
    // console.log(sendMail);
    console.log(newUser);
    // return {
    //   data: newUser,
    //   error: null,
    //   status: 200,
    // };
    return NextResponse.json({
        data: newUser,
        message: "Customer Created Successfully",
        error: null,
        status: 201,
    }, {
        status: 201
    })
  } catch (error) {
    console.log(error);
    return NextResponse.json({
        data: null,
        error: "Something went wrong",
        message: "Failed To Create Customer",
        status: 500
    }, {
        status: 500
    });
  }
}