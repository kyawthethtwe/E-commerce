"use client"

import type React from "react"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MainPadding from "@/components/theme/MainPadding"

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
    <MainPadding className="py-8">
      <h1 className="text-3xl font-medium mb-8">My Dashboard</h1>
      <Tabs value={currentTab} className="flex flex-row gap-8  ">
        <TabsList className=" w-[400px] shrink-0 border h-fit flex-col inline-fle justify-start rounded-none  p-0 ">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="data-[state=active]:bg-primary data-[state=active]:text-white  rounded-none xl:text-xl 2xl:text-2xl w-full  py-10"
              asChild
            >
              <Link href={tab.href}>{tab.label}</Link>
            </TabsTrigger>
          ))}
        </TabsList>
        {children}
      </Tabs>
    </MainPadding>
  )
}

