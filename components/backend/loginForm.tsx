"use client"

import Link from "next/link"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { motion } from "framer-motion"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { UserLoginTypes } from "@/types/types"
import { loginInSchema, signInSchema } from "@/schemas/schema"
import SubmitButton from "./submitButton"

// Simple submit button component
// function SubmitButton({
//   className = "",
//   loading,
// }: {
//   className?: string
//   loading: boolean
// }) {
//   return (
//     <button
//       type="submit"
//       disabled={loading}
//       className={`${className} bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md text-sm transition-colors ${loading ? "opacity-70" : ""}`}
//     >
//       {loading ? "Loading..." : "Sign in"}
//     </button>
//   )
// }

export default function LoginInForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserLoginTypes>({ resolver: zodResolver(loginInSchema) })
  const [loading, setLoading] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function onSubmit(userLoginData: UserLoginTypes) {
    try {
      setLoading(true)
    const loginData = await signIn("credentials", {
        ...userLoginData,
        redirect: false
    })
    console.log("SignIn Response", loginData)
      if (loginData?.ok) {
        setLoading(false)
        toast.success("Signed in successfully")
        router.push("/dashboard")
        reset()
      } else {
        setLoading(false)
        toast.error("Sign-in error: Check your credentials")
        router.push("/signUp")
      }
    } catch (error) {
      setLoading(false)
      console.log("Network Error:", error)
      toast.error("Its seems something is wrong with your Network")
    }
  }

  function handleGoogleSignIn() {
    setIsLoading(true)
    signIn("google", { callbackUrl: "/dashboard" })
    setTimeout(() => {
      router.push("/dashboard")
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
      <div className="relative z-10 bg-white rounded-lg shadow-lg max-w-xs w-full p-5 transition-all duration-300 hover:shadow-xl sm:max-w-sm">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">LogIn To The Dashboard</h1>
          <p className="text-gray-600 text-xs">Enter your credentials</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* Email Input */}
          <div>
            <input
              {...register("email")}
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border rounded-md text-center text-sm"
            />
            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
          </div>

          {/* Password Input */}
          <div>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded-md text-center text-sm"
            />
            {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
          </div>

          {/* LogIn Button */}
          <SubmitButton className="w-full" title = "Login"loading={loading} />

          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-2 text-xs text-gray-500">or</span>
            </div>
          </div>

          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex w-full items-center justify-center rounded-md bg-white p-2 text-sm text-gray-700 shadow transition-all hover:shadow-md border border-gray-200"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg
                  className="mr-2 h-4 w-4 animate-spin text-gray-700"
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
                Logging in...
              </>
            ) : (
              <>
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
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
                Google
              </>
            )}
          </motion.button>

          {/* Sign Up Link */}
          <div className="text-center mt-3 text-xs">
            <span className="text-gray-600">No account? </span>
            <Link href="/signUp" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
