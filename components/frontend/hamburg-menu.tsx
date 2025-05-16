import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignRight, CircleX, X } from "lucide-react"
import { NavigationMenuItems } from "./navigation-menuItems"
import Link from "next/link"
import { ShinyButton } from "../magicui/shiny-button"

export function HamburgMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-transparent border border-slate-600">
          <AlignRight className="text-slate-600"/>
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[#121820]">
        <SheetHeader>
          <SheetTitle className="border-b border-slate-600 text-slate-600">Menu</SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 items-center gap-4">
            <Link href="#newssection">
              <Button className="w-full bg-transparent border border-slate-600 text-slate-600">News & Insights</Button>
            </Link>
          </div>
          <div className="grid grid-cols- items-center gap-4">
            {/* <Link href="#newssection">
              <Button className="w-full bg-transparent border border-slate-600 text-slate-600">News</Button>
            </Link> */}
            <Button className="text-xs text-slate-400 border border-slate-600 bg-transparent">Sign Up</Button>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button className="w-full text-xs text-slate-400 border border-slate-600 bg-transparent">Login</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
