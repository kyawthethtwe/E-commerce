"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Mock user data for demonstration purposes and will be replaced with actual user data from the api or user store
const userData = {
  name: "John Doe",
  email: "john@example.com",
  joinDate: "January 1, 2023",
  itemsSold: 15,
  activeListings: 5,
  listings: [
    { id: "1", title: "Vintage Leather Jacket", price: 45, status: "active" },
    { id: "2", title: "Antique Wooden Desk", price: 150, status: "sold" },
  ],
  reviews: [
    { id: "1", reviewer: "Alice", rating: 5, comment: "Great seller, fast shipping!" },
    { id: "2", reviewer: "Bob", rating: 4, comment: "Item as described, good communication." },
  ],
}

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="listings">Listings</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>Profile Overview</CardTitle>
            <CardDescription>Here&apos;s a summary of your EcoMarket activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p><strong>Name:</strong> {userData.name}</p>
              <p><strong>Email:</strong> {userData.email}</p>
              <p><strong>Member since:</strong> {userData.joinDate}</p>
              <p><strong>Items sold:</strong> {userData.itemsSold}</p>
              <p><strong>Active listings:</strong> {userData.activeListings}</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="listings">
        <Card>
          <CardHeader>
            <CardTitle>Your Listings</CardTitle>
            <CardDescription>Manage your active and sold items</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userData.listings.map((listing) => (
                <div key={listing.id} className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{listing.title}</h3>
                    <p>${listing.price}</p>
                  </div>
                  <div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      listing.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {listing.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reviews">
        <Card>
          <CardHeader>
            <CardTitle>Your Reviews</CardTitle>
            <CardDescription>See what others are saying about you</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userData.reviews.map((review) => (
                <div key={review.id} className="border-b pb-4 last:border-b-0">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{review.reviewer}</p>
                    <span className="text-yellow-400">{"★".repeat(review.rating)}</span>
                  </div>
                  <p className="text-sm text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>Manage your account preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  defaultValue={userData.name}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  defaultValue={userData.email}
                />
              </div>
              <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

