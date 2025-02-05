import UserProfile from "@/components/user-profile";
import ProtectedRoute from "@/components/protected-route";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "User Profile | EcoMarket",
    description: "View and manage your EcoMarket profile",
  }
  
  export default function ProfilePage() {
    return (
      <ProtectedRoute>
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
          <UserProfile />
        </div>
      </ProtectedRoute>
    )
  }