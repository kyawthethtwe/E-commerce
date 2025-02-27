"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function SuccessPage() {
  const [order, setOrder] = useState<any>(null)
  const searchParams = useSearchParams()
  const router = useRouter()
  const sessionId = searchParams.get("session_id")

  useEffect(() => {
    const fetchOrder = async () => {
      if (sessionId) {
        try {
          const response = await fetch(`/api/orders/${sessionId}`)
          const data = await response.json()
          setOrder(data)
        } catch (error) {
          console.error("Failed to fetch order:", error)
        }
      }
    }

    fetchOrder()
  }, [sessionId])

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-muted-foreground mb-8">
          Your order has been successfully placed.
          {order && ` Order number: #${order.id}`}
        </p>
        <div className="space-y-4">
          <Button className="w-full" onClick={() => router.push("/products")}>
            Continue Shopping
          </Button>
          <Button variant="outline" className="w-full" onClick={() => router.push("/account/orders")}>
            View Order
          </Button>
        </div>
      </div>
    </div>
  )
}

