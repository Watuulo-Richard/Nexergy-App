"use client"
import Link from "next/link"
import { useForm } from "react-hook-form"
// import { baseUrl, type userTypes } from "./types/types"
// import { signInSchema } from "./schemas/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { useState } from "react"
import { motion } from "framer-motion"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { baseUrl, userTypes } from "@/types/types"
import { signInSchema } from "@/schemas/schema"
import SubmitButton from "./submitButton"

// Simple submit button component since the original is missing
// const SubmitButton = ({ className = "", size = "sm", title = "Submit", loading = false }) => {
//   return (
//     <button
//       type="submit"
//       disabled={loading}
//       className={`bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg ${
//         size === "sm" ? "py-2 px-4 text-sm" : "py-3 px-5"
//       } transition-colors ${className}`}
//     >
//       {loading ? (
//         <span className="flex items-center justify-center">
//           <svg
//             className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//           >
//             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//             <path
//               className="opacity-75"
//               fill="currentColor"
//               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//             ></path>
//           </svg>
//           Loading...
//         </span>
//       ) : (
//         title
//       )}
//     </button>
//   )
// }

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<userTypes>({ resolver: zodResolver(signInSchema) })
  const [loading, setLoading] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(userData: userTypes) {
    try {
      setLoading(true)
      const response = await fetch(`${baseUrl}/api/v1/signUpAPI`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      })
      console.log(response)
      if (response.ok) {
        setLoading(false)
        toast.success("Customer Created Successfully")
        console.log(response)
        console.log(userData)
        reset()
      } else {
        setLoading(false)
        toast.error("Failed To Create Customer")
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  const router = useRouter()
  function handleGoogleSignIn() {
    setIsLoading(true)
    signIn("google", { callbackUrl: "/dashboard" })

    // Pretend we're signing in (wait 1.5 seconds)
    setTimeout(() => {
      router.push("/login")
    }, 1500)
  }
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/W-1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark backdrop-blur-sm"></div>

      {/* Form Card */}
      <div className="relative z-10 bg-white rounded-xl shadow-lg max-w-sm w-full p-6 transition-all duration-300 hover:shadow-2xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Sign in to your account</h1>
          <p className="text-gray-600">
            Clarity gives you the blocks and components you need to create a truly professional website.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* UserName Input */}
          <div>
            <input
              {...register("name")}
              type="text"
              placeholder="Enter Full Name"
              className="w-full p-2.5 border rounded-lg text-center"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>

          {/* Email Input */}
          <div>
            <input
              {...register("email")}
              type="email"
              placeholder="Email Address"
              className="w-full p-2.5 border rounded-lg text-center"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          {/* Password Input */}
          <div>
            <input
              {...register("password")}
              type="password"
              placeholder="Create Password"
              className="w-full p-2.5 border rounded-lg text-center"
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>

          {/* Sign In Button */}
          <SubmitButton className="w-full" size="sm" title="Sign in" loading={loading} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            {isLoading ? (
              <button
                disabled
                className="flex w-full items-center justify-center rounded-md bg-gray-100 px-4 py-2.5 text-gray-700 shadow transition-all"
              >
                <svg
                  className="mr-2 h-5 w-5 animate-spin text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Signing in...
              </button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex w-full items-center justify-center rounded-md bg-white px-4 py-2.5 text-gray-700 shadow transition-all hover:shadow-md"
                onClick={handleGoogleSignIn}
              >
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                  <path fill="none" d="M1 1h22v22H1z" />
                </svg>
                Sign in with Google
              </motion.button>
            )}
          </motion.div>
        </form>

        {/* Sign Up Link */}
        <div className="text-center mt-4">
          <span className="text-gray-600">Don't have an account? </span>
          <Link href="/signUp" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
