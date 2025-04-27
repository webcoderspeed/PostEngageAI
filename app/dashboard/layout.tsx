"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { LayoutDashboard, Calendar, BarChart, Settings, HelpCircle, Linkedin, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("dashboard")

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const navItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      href: "/dashboard",
    },
    {
      id: "schedulers",
      label: "Schedulers",
      icon: <Calendar className="h-5 w-5" />,
      href: "/dashboard/schedulers",
      badge: "3",
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: <BarChart className="h-5 w-5" />,
      href: "/dashboard/analytics",
    },
    {
      id: "settings",
      label: "Settings",
      icon: <Settings className="h-5 w-5" />,
      href: "/dashboard/settings",
    },
    {
      id: "help",
      label: "Help & Support",
      icon: <HelpCircle className="h-5 w-5" />,
      href: "/dashboard/help",
    },
  ]

  const platforms = [
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5 text-blue-500" />,
      connected: true,
    },
    {
      id: "twitter",
      name: "Twitter",
      icon: <Twitter className="h-5 w-5 text-blue-400" />,
      connected: true,
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: <Instagram className="h-5 w-5 text-pink-500" />,
      connected: false,
    },
  ]

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar for desktop */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 hidden w-64 transform border-r border-gray-800 bg-black transition-transform duration-300 lg:block ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-20 items-center justify-between border-b border-gray-800 px-6">
            <Link href="/dashboard" className="flex items-center">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">
                PostEngageAI
              </span>
            </Link>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="mb-8 space-y-1">
              {navItems.map((item) => (
                <Link key={item.id} href={item.href}>
                  <button
                    className={`group relative flex w-full items-center rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                      activeItem === item.id
                        ? "bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-white"
                        : "text-gray-400 hover:bg-gray-900 hover:text-white"
                    }`}
                    onClick={() => setActiveItem(item.id)}
                  >
                    <span
                      className={`mr-3 ${
                        activeItem === item.id
                          ? "text-pink-500"
                          : "text-gray-500 group-hover:text-white"
                      }`}
                    >
                      {item.icon}
                    </span>
                    {item.label}
                    {item.badge && (
                      <Badge
                        className="ml-auto bg-pink-500 text-xs text-white hover:bg-pink-600"
                        variant="secondary"
                      >
                        {item.badge}
                      </Badge>
                    )}
                    {activeItem === item.id && (
                      <motion.div
                        layoutId="sidebar-active-item"
                        className="absolute inset-y-0 left-0 w-1 rounded-r-full bg-gradient-to-b from-pink-500 to-purple-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                </Link>
              ))}
            </div>

            <div className="mb-4">
              <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Connected Platforms
              </h3>
              <div className="space-y-1">
                {platforms.map((platform) => (
                  <div
                    key={platform.id}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-400 hover:bg-gray-900 hover:text-white"
                  >
                    <div className="flex items-center">
                      {platform.icon}
                      <span className="ml-3">{platform.name}</span>
                    </div>
                    {platform.connected ? (
                      <Badge variant="outline" className="border-green-500 text-green-500">
                        Connected
                      </Badge>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 border-pink-500 bg-transparent text-pink-500 hover:bg-pink-500/10"
                      >
                        Connect
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 p-4">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 border border-gray-800">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user" />
                <AvatarFallback className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 text-white">
                  JD
                </AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">John Doe</p>
                <p className="text-xs text-gray-500">john.doe@example.com</p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml\
