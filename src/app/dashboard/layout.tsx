"use client"

import type React from "react"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { usePathname } from "next/navigation"

const tabs = [
  { value: "listings", label: "My Listings", href: "/dashboard/listings" },
  { value: "orders", label: "My Orders", href: "/dashboard/orders" },
  { value: "wishlist", label: "Wishlist", href: "/dashboard/wishlist" },
  { value: "settings", label: "Profile Settings", href: "/dashboard/settings" },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const currentTab = pathname.split("/")[2] || "listings" 

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Dashboard</h1>
      <Tabs value={currentTab} className="space-y-8">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="data-[state=active]:border-primary border-b-2 border-transparent rounded-none"
              asChild
            >
              <Link href={tab.href}>{tab.label}</Link>
            </TabsTrigger>
          ))}
        </TabsList>
        {children}
      </Tabs>
    </div>
  )
}

