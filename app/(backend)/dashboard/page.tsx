import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BedDoubleIcon,
  CalendarIcon,
  CreditCardIcon,
  DollarSignIcon,
  PercentIcon,
  UsersIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { OccupancyChart } from "@/components/dashboard/occupancy-chart"
// import { RevenueChart } from "@/components/dashboard/revenue-chart"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Filter by Date
          </Button>
          <Button size="sm">
            <ArrowDownIcon className="mr-2 h-4 w-4" />
            Download Report
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpIcon className="mr-1 h-4 w-4 text-emerald-500" />
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
            <PercentIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">84.3%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpIcon className="mr-1 h-4 w-4 text-emerald-500" />
              +4.3% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Rooms</CardTitle>
            <BedDoubleIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Out of 120 total rooms</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Bookings</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowDownIcon className="mr-1 h-4 w-4 text-red-500" />
              -8% from yesterday
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Occupancy Rate</CardTitle>
                <CardDescription>Room occupancy over the last 30 days</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                {/* <OccupancyChart /> */}
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Revenue</CardTitle>
                <CardDescription>Monthly revenue breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                {/* <RevenueChart /> */}
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Recent Bookings</CardTitle>
                <CardDescription>You have 6 new bookings today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between space-x-4">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={booking.avatar} />
                          <AvatarFallback>{booking.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium leading-none">{booking.name}</p>
                          <p className="text-sm text-muted-foreground">Room {booking.room}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <p className="text-sm text-muted-foreground whitespace-nowrap">{booking.date}</p>
                        <Badge
                          variant={
                            booking.status === "Confirmed"
                              ? "default"
                              : booking.status === "Pending"
                                ? "outline"
                                : "secondary"
                          }
                        >
                          {booking.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and operations</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2">
                <Button className="w-full justify-start" variant="outline">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  New Booking
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <UsersIcon className="mr-2 h-4 w-4" />
                  Add Guest
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <BedDoubleIcon className="mr-2 h-4 w-4" />
                  Room Status
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <CreditCardIcon className="mr-2 h-4 w-4" />
                  Process Payment
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Content</CardTitle>
              <CardDescription>Detailed analytics will be displayed here</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Analytics charts and data will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports Content</CardTitle>
              <CardDescription>Generated reports will be displayed here</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Report data and exports will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const recentBookings = [
  {
    id: "1",
    name: "Emma Thompson",
    room: "301",
    date: "Check-in: Today",
    status: "Confirmed",
    avatar: "/placeholder.svg",
    initials: "ET",
  },
  {
    id: "2",
    name: "Michael Chen",
    room: "205",
    date: "Check-in: Tomorrow",
    status: "Pending",
    avatar: "/placeholder.svg",
    initials: "MC",
  },
  {
    id: "3",
    name: "Sarah Johnson",
    room: "412",
    date: "Check-in: Today",
    status: "Confirmed",
    avatar: "/placeholder.svg",
    initials: "SJ",
  },
  {
    id: "4",
    name: "David Williams",
    room: "118",
    date: "Check-out: Today",
    status: "Checked In",
    avatar: "/placeholder.svg",
    initials: "DW",
  },
  {
    id: "5",
    name: "Olivia Martinez",
    room: "507",
    date: "Check-in: Mar 15",
    status: "Confirmed",
    avatar: "/placeholder.svg",
    initials: "OM",
  },
  {
    id: "6",
    name: "James Wilson",
    room: "220",
    date: "Check-in: Mar 16",
    status: "Pending",
    avatar: "/placeholder.svg",
    initials: "JW",
  },
]
