"use client"
import Link from "next/link"
import { NavigationMenuItems } from "./navigation-menuItems"
import { Search } from "lucide-react"
import { ShinyButton } from "../magicui/shiny-button"
import { Button } from "../ui/button"
import { HamburgMenu } from "./hamburg-menu"
import { LineShadowText } from "@/components/magicui/line-shadow-text";
export default function NavigationBar() {
  // const theme = useTheme();
  // const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
  return (
    <>
      <nav className="fixed top-0 z-50 w-full px-8 border-b bg-[#121820] backdrop-blur">
        <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-x-2 md:gap-x-6">
            {/* Logo */}
            <div>
              <Link aria-label="home" href="/" className="flex items-center space-x-2">
                <p className="font-semibold flex">
                  <span className="text-5xl">T</span>
                  <div className="flex items-center">
                    <LineShadowText className="italic" >
                      Fast
                    </LineShadowText>
                    <span className="text-sm">otalEnergies</span>
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
          <div className="flex items-center gap-x-2 md:gap-x-4">
            <div className="">
              <Search className="w-6 h-6" />
            </div>
            <div className="hidden sm:flex sm:items-center sm:gap-x-2">
              <ShinyButton>Login</ShinyButton>
              <Button className="text-xs">Sign Up</Button>
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
