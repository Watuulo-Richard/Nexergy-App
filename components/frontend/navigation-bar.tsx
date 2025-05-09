"use client"
import Link from "next/link"
import { NavigationMenuItems } from "./navigation-menuItems"
import { ShoppingBag, ShoppingCart } from "lucide-react"
import { ShinyButton } from "../magicui/shiny-button"
import { Button } from "../ui/button"
import { HamburgMenu } from "./hamburg-menu"
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import SearchBar from "./search-bar"
import { useProductState } from "@/store/store"
export default function NavigationBar() {
  // const theme = useTheme();
  // const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
  const {handleClear, productCartArray} = useProductState()
  return (
    <>
      <nav className="fixed top-0 z-50 w-full px-8 border-b border-slate-600 bg-[#121820] backdrop-blur">
        <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-x-2 md:gap-x-6">
            {/* Logo */}
            <div>
              <Link aria-label="home" href="/" className="flex items-center space-x-2">
                <p className="font-semibold flex">
                  <span className="text-5xl text-red-600">T</span>
                  <div className="flex items-center">
                    <LineShadowText className="text-red-600 italic" >
                      otalEnergies
                    </LineShadowText>
                    {/* <span className="text-sm">otalEnergies</span> */}
                  </div>
                </p>
              </Link>
            </div>
          </div>
          {/* Menu-Items */}
          <div className="hidden md:block">
            <NavigationMenuItems />
          </div>
          {/* Search */}
          <div className="flex items-center gap-x-2 md:gap-x-2">
            <div className="">
              <SearchBar />
            </div>
            <div className="">
              <Link href="/cart-page" className="">
                <div className="relative border border-red-600 hover:border-red-800 rounded-full p-2 shadow-xl hover:shadow-2xl">
                  <div className="absolute -top-2 right-0 text-white hover:text-red-800 font-semibold z-50 text-sm">{productCartArray.length}</div>
                  <ShoppingBag className="text-red-600 hover:text-red-800" />
                </div>
              </Link>
            </div>
            <div className="hidden sm:flex sm:items-center sm:gap-x-2">
              <ShinyButton className="">Login</ShinyButton>
              <Button className="text-xs text-red-600">Sign Up</Button>
            </div>
            <div className="block md:hidden">
              <HamburgMenu />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
