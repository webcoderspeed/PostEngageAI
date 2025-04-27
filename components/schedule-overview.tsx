"use client"

import { Clock, Linkedin, Twitter, Instagram } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ScheduleOverview() {
  const scheduledTasks = [
    {
      id: 1,
      title: "Auto-like industry posts",
      platform: "linkedin",
      time: "Daily at 9:00 AM",
      status: "active",
    },
    {
      id: 2,
      title: "Comment on trending topics",
      platform: "twitter",
      time: "Weekdays at 12:00 PM",
      status: "active",
    },
    {
      id: 3,
      title: "Engage with followers",
      platform: "instagram",
      time: "Daily at 5:00 PM",
      status: "paused",
    },
    {
      id: 4,
      title: "Connect with potential clients",
      platform: "linkedin",
      time: "Mondays at 10:00 AM",
      status: "active",
    },
  ]

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "linkedin":
        return <Linkedin className="h-4 w-4 text-blue-500" />
      case "twitter":
        return <Twitter className="h-4 w-4 text-blue-400" />
      case "instagram":
        return <Instagram className="h-4 w-4 text-pink-500" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500/20 text-green-400">Active</Badge>
      case "paused":
        return <Badge className="bg-amber-500/20 text-amber-400">Paused</Badge>
      default:
        return null
    }
  }

  return (
    <div className="space-y-4">
      {scheduledTasks.map((task) => (
        <div
          key={task.id}
          className="rounded-lg border border-gray-800 bg-gray-950 p-4 transition-colors hover:border-gray-700"
        >
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-gray-800 p-1">{getPlatformIcon(task.platform)}</div>
              <h4 className="font-medium">{task.title}</h4>
            </div>
            {getStatusBadge(task.status)}
          </div>
          <div className="flex items-center space-x-4 text-xs text-gray-400">
            <div className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              {task.time}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
