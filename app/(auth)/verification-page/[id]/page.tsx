import { getUserById } from '@/action/sign-up-action'
import OTPVerificationForm from '@/components/backend/auth/verification-form'
import React from 'react'

export default async function page({params}:{params:Promise<{id:string}>}) {
  const {id} = await params
  const user = await getUserById(id)
  const userToken = user?.token
  return (
    <>
      <OTPVerificationForm userToken={userToken} id={id}/>
    </>
  )
}
