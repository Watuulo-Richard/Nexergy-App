import { z } from 'zod';

export const signUpSchema = z.object({
  // Validation Rules Form Each Form Field
  firstName: z
    .string()
    .min(1, 'First Name is required')
    .max(100, 'First Name must be less than 100 characters'),
  lastName: z
    .string()
    .min(1, 'Last Name is required')
    .max(100, 'Last Name must be less than 100 characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .transform((email) => email.toLowerCase().trim()),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(128, 'Password must be less than 128 characters')
    .refine(
      (password) => /[a-z]/.test(password),
      'Password must contain at least one lowercase letter',
    )
    .refine(
      (password) => /[A-Z]/.test(password),
      'Password must contain at least one uppercase letter',
    )
    .refine(
      (password) => /\d/.test(password),
      'Password must contain at least one number',
    )
    .refine(
      (password) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
      'Password must contain at least one special character',
    )
    .refine(
      (password) => !/\s/.test(password),
      'Password cannot contain spaces',
    ),
  // role: z.enum(['CUSTOMER', 'ADMIN', 'SERVICE_PROVIDER']),
});

export type SignUpFormTypes = z.infer<typeof signUpSchema>;

export const loginInSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .transform((email) => email.toLowerCase().trim()),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(128, 'Password must be less than 128 characters')
    .refine(
      (password) => /[a-z]/.test(password),
      'Password must contain at least one lowercase letter',
    )
    .refine(
      (password) => /[A-Z]/.test(password),
      'Password must contain at least one uppercase letter',
    )
    .refine(
      (password) => /\d/.test(password),
      'Password must contain at least one number',
    )
    .refine(
      (password) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
      'Password must contain at least one special character',
    )
    .refine(
      (password) => !/\s/.test(password),
      'Password cannot contain spaces',
    ),
});

export type UserFormLoginTypes = z.infer<typeof loginInSchema>;

// Zod schema for verification validation
export const verifyUserSchema = z.object({
  token: z.string().min(6, 'Your one-time token must be 6 characters...!!!'),
});

export type UserVerificationTypes = z.infer<typeof verifyUserSchema>;

export const categorySchema = z.object({
  name: z.string().min(3, 'Minimum 3 Characters'),
  description: z.string().min(3, 'Minimum 3 Characters'),
  image: z.string().optional(),
});

export type CategoryFormTypes = z.infer<typeof categorySchema>;

export const productSchema = z.object({
  name: z.string().min(3, 'Minimum 3 Characters'),
  // categoryId: z.string(),-> we don't include this because zod only works for registered fields that are registered by react hook forms. and categoryId is not a registered field we just add it in the form which is different. hope you get what am saying
  categoryId: z.string().optional(),
  price: z.coerce.number(),
  stock: z.coerce.number(),
  image: z.string().optional(),
  manual: z.string().optional(),
});
export type ProductFormTypes = z.infer<typeof productSchema>;

export type ProductTypes = {
  name:string;
  categoryId?:string;
  price:number;
  stock:number;
  image?:string;
  manual?:string;
}

export const branchSchema = z.object({
  name: z.string().min(1, 'Minimum 1 Character'),
});

export const regionSchema = z.object({
  name: z.string().min(1, 'Minimum 1 Character'),
  code: z.string().min(1, 'Minimum 1 Character'),
});

export const newsSchema = z.object({
  title: z.string().min(1, 'Minimum 1 Character'),
  content: z.string().min(1, 'Minimum 1 Character'),
  imageUrl: z.string().optional(),
});

// export const orderSchema = z.object({
//   email: z
//     .string()
//     .min(1, 'Email is required')
//     .email('Please enter a valid email address')
//     .transform((email) => email.toLowerCase().trim()),
//     firstName: z.string(),
//     lastName: z.string(),
//     phone: z.string(),
//     branchId: z
//     .string()
//     .optional(),
//     orderItems:OrderItemTypes[];
// });

// export type orderFormTypes = z.infer<typeof orderSchema>;
