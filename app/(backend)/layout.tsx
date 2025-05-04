"use client"

import type React from "react"

import { useState } from "react"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
// import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BarChart3,
  BellIcon,
  Building2,
  FileText,
  Fuel,
  HotelIcon,
  HousePlug,
  Landmark,
  LogOut,
  MapPinHouse,
  Newspaper,
  Settings,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navigationItems = [
  { name: "Analytics", href: "/dashboard", icon: BarChart3 },
  { name: "News", href: "/dashboard/news", icon: Newspaper },
  { name: "Product Categories", href: "dashboard/categories", icon: HotelIcon },
  { name: "Products", href: "/dashboard/products", icon: Landmark },
  { name: "Regions", href: "/dashboard/regions", icon: MapPinHouse },
  { name: "Branches", href: "/dashboard/branches", icon: HousePlug },
  { name: "Staff", href: "/staff", icon: Building2 },
  { name: "Reports", href: "/reports", icon: FileText },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-muted/20">
        <Sidebar className="border-r">
          <SidebarHeader className="border-b">
            <div className="flex items-center gap-2 px-2 py-2">
              <Fuel className="h-6 w-6 text-red-600" />
              <span className="text-xl text-red-600 font-bold">Total Energies</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.name}>
                    <a href={item.href} className="pl-4">
                      <item.icon className="h-12 w-12" />
                      <span className="text-md text-gray-600 font-semibold">{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t p-4">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">John Doe</span>
                <span className="text-xs text-muted-foreground">Hotel Manager</span>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        <div className="flex flex-1 flex-col overflow-hidden">
          <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6">
            <SidebarTrigger />
            <div className="w-full flex-1">
              <form>
                <div className="relative">
                  <Input placeholder="Search..." className="w-full md:w-[300px] pl-8" />
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                </div>
              </form>
            </div>
            <div className="flex items-center gap-2">
              <DropdownMenu open={notificationsOpen} onOpenChange={setNotificationsOpen}>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="relative">
                    <BellIcon className="h-5 w-5" />
                    <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                      3
                    </Badge>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[300px]">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="max-h-[300px] overflow-auto">
                    <NotificationItem title="New Booking" description="Room 301 booked for tomorrow" time="5 min ago" />
                    <NotificationItem
                      title="Maintenance Request"
                      description="Room 205 reported AC issue"
                      time="20 min ago"
                    />
                    <NotificationItem
                      title="Check-out Reminder"
                      description="3 guests checking out today"
                      time="1 hour ago"
                    />
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* <ModeToggle /> */}
              <Button variant="outline" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </header>
          <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}

function Search(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function NotificationItem({ title, description, time }: { title: string; description: string; time: string }) {
  return (
    <DropdownMenuItem className="flex flex-col items-start p-4 cursor-default">
      <div className="font-medium">{title}</div>
      <div className="text-sm text-muted-foreground">{description}</div>
      <div className="text-xs text-muted-foreground mt-1">{time}</div>
    </DropdownMenuItem>
  )
}
