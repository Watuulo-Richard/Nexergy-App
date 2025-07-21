import type React from "react"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"
import SideBar from "@/components/backend/sideBar"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)
  const user=session?.user ?? null
  console.log(user)
  // const {data:session} = useSession()
  
  // if(session?.user.role !== "CUSTOMER") {
  //   redirect('/login')
  // } else if (session.user.role !== "ADMIN") {
  //   redirect('/login')
  // } else if (session.user.role !== "SERVICE_PROVIDER") {
  //   redirect('/login')
  // } else if (!session) {
  //   redirect('/login')
  // }
  return (
    <SideBar children={children} user={user}/>
  )
}

// function Search(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>
//   )
// }

// function NotificationItem({ title, description, time }: { title: string; description: string; time: string }) {
//   return (
//     <DropdownMenuItem className="flex flex-col items-start p-4 cursor-default">
//       <div className="font-medium">{title}</div>
//       <div className="text-sm text-muted-foreground">{description}</div>
//       <div className="text-xs text-muted-foreground mt-1">{time}</div>
//     </DropdownMenuItem>
//   )
// }
