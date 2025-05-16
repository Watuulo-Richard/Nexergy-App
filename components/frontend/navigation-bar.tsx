"use client"
import Link from "next/link"
import { NavigationMenuItems } from "./navigation-menuItems"
import { ShoppingBag } from "lucide-react"
import { ShinyButton } from "../magicui/shiny-button"
import { Button } from "../ui/button"
import { HamburgMenu } from "./hamburg-menu"
import SearchBar from "./search-bar"
import { useProductState } from "@/store/store"
export default function NavigationBar() {
  const {productCartArray} = useProductState()
  return (
    <>
      <nav className="fixed top-0 z-50 w-full px-8 border-b border-slate-600 bg-[#121820] backdrop-blur">
        <div className="container mx-auto max-w-7xl flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-x-2 md:gap-x-6">
            {/* Logo */}
            <div>
              <Link aria-label="home" href="/" className="flex items-center space-x-2">
                <div className="flex items-center border border-slate-600 rounded-full p-2">
                  <img src="/logo_totalenergies.png" className="h-10 w-10 object-contain" alt="" />
                </div>
              </Link>
            </div>
          </div>
          {/* Menu-Items */}
          <div className="hidden lg:block">
            <NavigationMenuItems />
          </div>
          {/* Search */}
          <div className="flex items-center gap-x-2 md:gap-x-2">
            <div className="hidden lg:block">
              <SearchBar />
            </div>
            <div className="">
              <Link href="/cart-page" className="">
                <div className="relative border border-slate-600 hover:border-slate-800 rounded-full p-2 shadow-xl hover:shadow-2xl">
                  <div className="absolute -top-2 right-0 text-white hover:text-slate-200 font-semibold z-50 text-sm">{productCartArray.length}</div>
                  <ShoppingBag className="text-slate-600 hover:text-slate-200" />
                </div>
              </Link>
            </div>
            <div className="hidden sm:flex sm:items-center sm:gap-x-2">
              <ShinyButton className="">Login</ShinyButton>
              <Button className="text-xs text-slate-400 border border-slate-600 bg-transparent">Sign Up</Button>
            </div>
            <div className="block lg:hidden">
              <HamburgMenu />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
