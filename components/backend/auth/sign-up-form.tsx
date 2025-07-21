'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Globe,
  Loader2,
  Lock,
  Map,
  Plane,
  Sunrise,
  User,
} from 'lucide-react';
import Image from 'next/image';
import { SignUpFormTypes, signUpSchema } from '@/schemas/schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { baseUrl } from '@/types/types';
import { signIn } from 'next-auth/react';

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormTypes>({ resolver: zodResolver(signUpSchema) });
  const [loading, setLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(userDetails: SignUpFormTypes) {
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/api/v1/signupAPI`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userDetails),
      });
      console.log(response);
      if (response.ok) {
        setLoading(false);
        toast.success('Customer Created Successfully');
        console.log(response);
        // console.log(userData)
        reset();
        router.push('/login-page');
        const createdUserDetails = await response.json();
        router.push(`/verification-page/${createdUserDetails.data.id}`);
      } else {
        setLoading(false);
        toast.error('Failed To Create Customer');
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error('Internet Connection Error, Please Try Again...!!!');
    }
  }

  function handleGoogleSignIn() {
    setIsGoogleLoading(true);
    signIn('google', { callbackUrl: '/dashboard' });
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-gradient-to-b from-sky-50 to-white md:flex-row">
      {/* Left side - Sign up form */}
      <div className="flex w-full items-center justify-center p-8 md:w-1/2 md:p-6">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <motion.div
              className="mb-6 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-500">
                <Plane className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Nexergy
              </span>
            </motion.div>

            <h2 className="mb-2 text-2xl font-bold text-gray-900">
              Begin your energy experience
            </h2>
            <p className="text-gray-600">
              Create an account to explore and manage your energy needs
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register('firstName', { required: true })}
                  id="firstName"
                  type="text"
                  // value={fullName}
                  // onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-4 outline-none transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-sky-500"
                  placeholder="Watuulo"
                />
                {errors.firstName && (
                  <span className="Your first name is required..."></span>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register('lastName', { required: true })}
                  id="lastName"
                  type="text"
                  // value={fullName}
                  // onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-4 outline-none transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-sky-500"
                  placeholder="Richard"
                />
                {errors.lastName && (
                  <span className="Your last name is required..."></span>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register('email', { required: true })}
                  id="email"
                  type="email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-4 outline-none transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-sky-500"
                  placeholder="name@example.com"
                />
                {errors.email && (
                  <span className="text-xs text-destructive">
                    Your email is required...
                  </span>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register('password', { required: true })}
                  id="password"
                  type="password"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-4 outline-none transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-sky-500"
                  placeholder="••••••••"
                />
                {errors.password && (
                  <span className="text-xs text-destructive">
                    Your password is required...
                  </span>
                )}
              </div>
            </div>

            {loading ? (
              <motion.button
                type="submit"
                className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-500 py-3 font-medium text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating Account...
              </motion.button>
            ) : (
              <motion.button
                type="submit"
                className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-500 py-3 font-medium text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Create Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            )}

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {isGoogleLoading ? (
                <motion.button
                  type="button"
                  className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 shadow-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  signing with google
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.57C14.73 18.23 13.48 18.63 12 18.63C9.13 18.63 6.72 16.69 5.82 14.09H2.12V16.95C3.94 20.53 7.69 23 12 23Z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.82 14.09C5.6 13.43 5.48 12.73 5.48 12C5.48 11.27 5.6 10.57 5.82 9.91V7.05H2.12C1.41 8.57 1 10.24 1 12C1 13.76 1.41 15.43 2.12 16.95L5.82 14.09Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.37C13.62 5.37 15.06 5.94 16.21 7.02L19.36 3.87C17.45 2.09 14.97 1 12 1C7.69 1 3.94 3.47 2.12 7.05L5.82 9.91C6.72 7.31 9.13 5.37 12 5.37Z"
                      fill="#EA4335"
                    />
                  </svg>
                </motion.button>
              ) : (
                <motion.button
                onClick={handleGoogleSignIn}
                  type="button"
                  className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 shadow-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.57C14.73 18.23 13.48 18.63 12 18.63C9.13 18.63 6.72 16.69 5.82 14.09H2.12V16.95C3.94 20.53 7.69 23 12 23Z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.82 14.09C5.6 13.43 5.48 12.73 5.48 12C5.48 11.27 5.6 10.57 5.82 9.91V7.05H2.12C1.41 8.57 1 10.24 1 12C1 13.76 1.41 15.43 2.12 16.95L5.82 14.09Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.37C13.62 5.37 15.06 5.94 16.21 7.02L19.36 3.87C17.45 2.09 14.97 1 12 1C7.69 1 3.94 3.47 2.12 7.05L5.82 9.91C6.72 7.31 9.13 5.37 12 5.37Z"
                      fill="#EA4335"
                    />
                  </svg>
                </motion.button>
              )}

              <motion.button
                type="button"
                className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    fill="#0077B5"
                  />
                </svg>
              </motion.button>
            </div>
          </form>

          <div className="mt-8">
            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link
                href="/login-page"
                className="font-medium text-sky-600 transition-colors hover:text-sky-500"
              >
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right side - Travel imagery and information */}
      <div className="relative hidden w-1/2 overflow-hidden bg-gradient-to-br from-sky-400 to-blue-500 p-12 md:block">
        {/* Decorative elements */}
        <motion.div
          className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/10"
          animate={{
            y: [0, 10, 0],
            x: [0, 5, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 8,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 h-40 w-40 rounded-full bg-white/10"
          animate={{
            y: [0, -10, 0],
            x: [0, -5, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 6,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="relative z-10 mx-auto flex h-full max-w-md flex-col justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="mb-8">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white">
              Discover the world with us
            </h2>
            <p className="mb-6 text-sky-100">
              Join our community of travelers and unlock exclusive benefits for
              your next adventure.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mr-4 mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-300/30">
                <Plane className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-medium text-white">
                  Exclusive deals
                </h3>
                <p className="text-sm text-sky-100">
                  Get access to member-only discounts and offers.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-300/30">
                <Map className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-medium text-white">
                  Personalized recommendations
                </h3>
                <p className="text-sm text-sky-100">
                  Discover destinations tailored to your preferences.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-300/30">
                <Sunrise className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-medium text-white">
                  Travel community
                </h3>
                <p className="text-sm text-sky-100">
                  Connect with fellow travelers and share experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-sky-400/30 pt-8">
            <div className="flex items-center">
              <div className="mr-4 flex -space-x-2">
                <Image
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                  src="/images/1.png"
                  alt="User"
                  width={32}
                  height={32}
                />
                <Image
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                  src="/images/1.png"
                  alt="User"
                  width={32}
                  height={32}
                />
                <Image
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                  src="/images/1.png"
                  alt="User"
                  width={32}
                  height={32}
                />
              </div>
              <p className="text-sm text-sky-100">
                Join <span className="font-medium text-white">2M+</span>{' '}
                travelers worldwide
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
