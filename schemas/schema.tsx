import { z } from "zod";

export const signInSchema = z.object({
    // Validation Rules Form Each Form Field
    name: z.string({
        required_error: "Username is required"
    })
    .min(3, {
        message: "Username must be atleast 3 characters and above"
    })
    .max(20, {
        message: "Username cannot exceed 20 characters"
    }),

    email: z.string({
        required_error: "Email is required"
    })
    .email({
        message: "Not a valid email",
    }),

    password: z.string({
        required_error: "Password is required",
    })
    .min(6, {
        message: "Password too short - should be 6 chars minimum",
    }),
})

export const loginInSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Min 6 characters"),
})

export const categorySchema = z.object({
    name: z.string().min(3, "Minimum 3 Characters"),
    description: z.string().min(3, "Minimum 3 Characters"),
    image: z.string().optional()

})

export const productSchema = z.object({
    name: z.string().min(3, "Minimum 3 Characters"),
    // categoryId: z.string(),-> we don't include this because zod only works for registered fields that are registered by react hook forms. and categoryId is not a registered field we just add it in the form which is different. hope you get what am saying
    price:z.coerce.number(),
    stock:z.coerce.number(),
    // image: z.string().optional(),
    manual:z.string().optional()
})

export const branchSchema = z.object({
    name:z.string().min(1, "Minimum 1 Character"),
})

export const regionSchema = z.object({
    name:z.string().min(1, "Minimum 1 Character"),
    code:z.string().min(1, "Minimum 1 Character")
})

export const newsSchema = z.object({
    title:z.string().min(1, "Minimum 1 Character"),
    content:z.string().min(1, "Minimum 1 Character"),
    imageUrl:z.string().optional()
  })