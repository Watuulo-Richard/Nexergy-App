import Footer from '@/components/frontend/footer-section';
import NavigationBar from '@/components/frontend/navigation-bar';
import React from 'react'

export default function FrontendLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className='bg-[#121820] min-h-screen mx-auto max-w-full w-full pt-24'>
      <NavigationBar />
        {children}
      <Footer />
    </div>
  )
}
