"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BarChart, LineChart, PieChart } from "@/components/ui/chart"
import { ArrowUpRight, Users, MessageSquare, ThumbsUp, TrendingUp, Calendar, Plus } from "lucide-react"
import { RecentActivity } from "@/components/recent-activity"
import { ScheduleOverview } from "@/components/schedule-overview"
import Link from "next/link"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Sample data for charts
  const barChartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Likes",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(147, 51, 234, 0.5)",
        borderColor: "rgb(147, 51, 234)",
        borderWidth: 1,
      },
      {
        label: "Comments",
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        borderColor: "rgb(59, 130, 246)",
        borderWidth: 1,
      },
    ],
  }

  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Followers",
        data: [12, 19, 3, 5, 2, 3],
        borderColor: "rgb(147, 51, 234)",
        backgroundColor: "rgba(147, 51, 234, 0.5)",
        tension: 0.3,
      },
      {
        label: "Engagement",
        data: [1, 2, 5, 10, 20, 30],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        tension: 0.3,
      },
    ],
  }

  const pieChartData = {
    labels: ["LinkedIn", "Twitter", "Instagram"],
    datasets: [
      {
        label: "Engagement",
        data: [300, 150, 100],
        backgroundColor: ["rgba(147, 51, 234, 0.7)", "rgba(59, 130, 246, 0.7)", "rgba(236, 72, 153, 0.7)"],
        borderColor: ["rgb(147, 51, 234)", "rgb(59, 130, 246)", "rgb(236, 72, 153)"],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your social media performance.</p>
        </div>
        <Link href="/dashboard/schedulers/new">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            <Plus className="mr-2 h-4 w-4" /> Create New Scheduler
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <Card className="border-gray-800 bg-black/50 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Followers</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,853</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-500">+12%</span> from last month
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card className="border-gray-800 bg-black/50 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Comments</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,429</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-500">+18%</span> from last month
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Card className="border-gray-800 bg-black/50 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Likes</CardTitle>
                  <ThumbsUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3,872</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-500">+7%</span> from last month
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Card className="border-gray-800 bg-black/50 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5.2%</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-500">+2.1%</span> from last month
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="border-gray-800 bg-black/50 backdrop-blur-sm lg:col-span-4">
              <CardHeader>
                <CardTitle>Engagement Overview</CardTitle>
                <CardDescription>Likes and comments over the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart data={barChartData} height={350} />
              </CardContent>
            </Card>
            <Card className="border-gray-800 bg-black/50 backdrop-blur-sm lg:col-span-3">
              <CardHeader>
                <CardTitle>Platform Distribution</CardTitle>
                <CardDescription>Engagement across different platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart data={pieChartData} height={350} />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-gray-800 bg-black/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest social media interactions</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="border-gray-700 bg-black/50">
                  View All
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <RecentActivity />
              </CardContent>
            </Card>
            <Card className="border-gray-800 bg-black/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Scheduled Tasks</CardTitle>
                  <CardDescription>Upcoming automated engagements</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="border-gray-700 bg-black/50">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Calendar
                </Button>
              </CardHeader>
              <CardContent>
                <ScheduleOverview />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card className="border-gray-800 bg-black/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Growth Trends</CardTitle>
              <CardDescription>Followers and engagement over the past 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart data={lineChartData} height={400} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card className="border-gray-800 bg-black/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>All your recent social media interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentActivity extended />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
