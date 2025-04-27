"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Linkedin, Twitter, Instagram, ThumbsUp, MessageSquare, UserPlus } from "lucide-react"

interface RecentActivityProps {
  extended?: boolean
}

export function RecentActivity({ extended = false }: RecentActivityProps) {
  const activities = [
    {
      id: 1,
      type: "comment",
      platform: "linkedin",
      user: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SJ",
      },
      content: "Great insights on the future of AI in marketing!",
      post: "The Future of AI in Digital Marketing",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "like",
      platform: "twitter",
      user: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "MC",
      },
      content: "",
      post: "10 Tips for Remote Work Productivity",
      time: "3 hours ago",
    },
    {
      id: 3,
      type: "connection",
      platform: "linkedin",
      user: {
        name: "Jessica Williams",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "JW",
      },
      content: "Accepted your connection request",
      post: "",
      time: "5 hours ago",
    },
    {
      id: 4,
      type: "comment",
      platform: "instagram",
      user: {
        name: "David Miller",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "DM",
      },
      content: "This is exactly what I needed to hear today!",
      post: "5 Ways to Stay Motivated",
      time: "6 hours ago",
    },
    {
      id: 5,
      type: "like",
      platform: "linkedin",
      user: {
        name: "Emily Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "ER",
      },
      content: "",
      post: "How We Increased Conversion Rates by 200%",
      time: "8 hours ago",
    },
  ]

  const displayActivities = extended ? activities : activities.slice(0, 3)

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

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "comment":
        return <MessageSquare className="h-4 w-4 text-purple-500" />
      case "like":
        return <ThumbsUp className="h-4 w-4 text-blue-500" />
      case "connection":
        return <UserPlus className="h-4 w-4 text-green-500" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-4">
      {displayActivities.map((activity) => (
        <div key={activity.id} className="flex items-start space-x-4">
          <Avatar className="h-10 w-10 border border-gray-800">
            <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
            <AvatarFallback>{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center">
              <p className="text-sm font-medium">{activity.user.name}</p>
              <div className="ml-2 flex items-center space-x-1">
                {getPlatformIcon(activity.platform)}
                {getActivityIcon(activity.type)}
              </div>
            </div>
            {activity.content && <p className="text-sm text-gray-400">{activity.content}</p>}
            {activity.post && (
              <p className="text-xs text-gray-500">
                On: <span className="text-purple-400">{activity.post}</span>
              </p>
            )}
            <p className="text-xs text-gray-500">{activity.time}</p>
          </div>
        </div>
      ))}
      {!extended && (
        <div className="pt-2 text-center">
          <button className="text-xs text-purple-400 hover:text-purple-300">View all activity</button>
        </div>
      )}
    </div>
  )
}
