// "use client";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";

// import { User } from "lucide-react";
// import toast from "react-hot-toast";
// import ImageInput from "../FormInputs/ImageInput";
// import { updateUser } from "@/actions/users";

// const profileSchema = z.object({
//   firstName: z.string().min(2, "First name must be at least 2 characters"),
//   lastName: z.string().min(2, "Last name must be at least 2 characters"),
//   email: z.string().email("Invalid email address"),
//   phone: z.string().min(10, "Phone number must be at least 10 digits"),
//   jobTitle: z.string().optional(),
//   image: z.string().optional(),
// });

// type ProfileFormValues = z.infer<typeof profileSchema>;
// export type UserProfile = {
//   id: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   jobTitle?: string;
//   image?: string;
// };
// interface UserProfileFormProps {
//   currentUser: UserProfile;
// }

// export default function UserProfileForm({ currentUser }: UserProfileFormProps) {
//   const form = useForm<ProfileFormValues>({
//     resolver: zodResolver(profileSchema),
//     defaultValues: {
//       firstName: currentUser.firstName,
//       lastName: currentUser.lastName,
//       email: currentUser.email,
//       phone: currentUser.phone,
//       jobTitle: currentUser.jobTitle || "",
//     },
//   });
//   const [loading, setLoading] = useState(false);
//   const initialImage = currentUser?.image || "/placeholder.svg";
//   const [imageUrl, setImageUrl] = useState(initialImage);

//   async function onSubmit(data: ProfileFormValues) {
//     setLoading(true);
//     data.image = imageUrl;
//     try {
//       const result = await updateUser(currentUser.id, data);

//       if (result.error) {
//         toast.error(result.error);
//         return;
//       }

//       toast.success("Profile updated successfully");
//       setLoading(false);
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       toast.error("Failed to update profile");
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="space-y-6">
//       <div className="grid grid-cols-12 gap-6 py-8">
//         <div className="lg:col-span-8 col-span-full space-y-3">
//           <Card>
//             <CardHeader>
//               <CardTitle>Personal Information</CardTitle>
//               <CardDescription>
//                 Update your personal information and contact details.
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <Form {...form}>
//                 <form
//                   onSubmit={form.handleSubmit(onSubmit)}
//                   className="space-y-4"
//                 >
//                   <div className="grid gap-4 sm:grid-cols-2">
//                     <FormField
//                       control={form.control}
//                       name="firstName"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>First Name</FormLabel>
//                           <FormControl>
//                             <Input placeholder="John" {...field} />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
//                     <FormField
//                       control={form.control}
//                       name="lastName"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Last Name</FormLabel>
//                           <FormControl>
//                             <Input placeholder="Doe" {...field} />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
//                   </div>

//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Email</FormLabel>
//                         <FormControl>
//                           <Input
//                             type="email"
//                             placeholder="john@example.com"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="phone"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Phone Number</FormLabel>
//                         <FormControl>
//                           <Input
//                             type="tel"
//                             placeholder="+1234567890"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="jobTitle"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Job Title</FormLabel>
//                         <FormControl>
//                           <Input placeholder="Software Developer" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <div className="flex justify-end">
//                     <Button type="submit" size="lg" disabled={loading}>
//                       {loading ? "Updating..." : "Update Profile"}
//                     </Button>
//                   </div>
//                 </form>
//               </Form>
//             </CardContent>
//           </Card>
//         </div>
//         <div className="lg:col-span-4 col-span-full ">
//           <div className="grid auto-rows-max items-start gap-4 ">
//             <ImageInput
//               title="Profile Image"
//               imageUrl={imageUrl}
//               setImageUrl={setImageUrl}
//               endpoint="categoryImage"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
