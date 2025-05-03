"use client";

import type React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Package, ShoppingCart, Heart, Settings, User } from "lucide-react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import MainPadding from "@/components/theme/MainPadding";

const tabs = [
  {
    value: "listings",
    label: "Listings",
    href: "/dashboard/listings",
    icon: Package,
    description: "Manage your product listings",
  },
  {
    value: "orders",
    label: "Orders",
    href: "/dashboard/orders",
    icon: ShoppingCart,
    description: "Track your orders and purchases",
  },
  {
    value: "wishlist",
    label: "Wishlist",
    href: "/dashboard/wishlist",
    icon: Heart,
    description: "Items you've saved for later",
  },
  {
    value: "settings",
    label: "Profile",
    href: "/dashboard/settings",
    icon: Settings,
    description: "Update your account preferences",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentTab = pathname.split("/")[2] || "listings";

  return (
    <MainPadding className="py-6 ">
      <div className="flex flex-col space-y-6">
        {/* Dashboard Content */}
        <Tabs value={currentTab} className="flex flex-col sm:flex-row gap-6">
          <Card className="md:w-[300px] lg:w-[350px] shrink-0 border shadow-sm">
            <CardContent className="p-0">
              <TabsList className="h-auto w-full flex-row sm:flex-col rounded-md overflow-hidden p-0">
                {/* home */}
                <div className="items-center gap-4 p-4 hidden sm:flex">
                  <Avatar className="h-32 w-32 border-2 border-primary/10">
                    <AvatarImage src="/profile.jpg" alt="User" />
                    <AvatarFallback>
                      <User className="h-8 w-8 text-muted-foreground" />
                    </AvatarFallback>
                  </Avatar>
                </div>
                {/* Tab list */}
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="w-full  gap-3 rounded-none border-b last:border-b-0 p-2 sm:p-4 data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
                    asChild
                  >
                    <Link href={tab.href} className="flex flex-col">
                      <div className="flex items-center gap-2 sm:gap-3 ">
                        <tab.icon className="max-[400px]:hidden h-3 w-3 sm:h-5 sm:w-5" />
                        <span className="font-medium text-xs sm:text-base">
                          {tab.label}
                        </span>
                      </div>
                      <p className="text-xs hidden sm:block pt-1 data-[state=active]:text-highlight">
                        {tab.description}
                      </p>
                    </Link>
                  </TabsTrigger>
                ))}
              </TabsList>
            </CardContent>
          </Card>

          <div className="flex-1 min-w-0">
            <Card className="border shadow-sm h-full">
              <CardContent className="p-6">{children}</CardContent>
            </Card>
          </div>
        </Tabs>
      </div>
    </MainPadding>
  );
}
