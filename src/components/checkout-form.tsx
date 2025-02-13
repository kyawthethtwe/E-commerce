"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "./cart-provider"

export default function CheckoutForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const router = useRouter()
  const { items, clearCart } = useCart()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically process the payment and create an order
    console.log("Order placed:", { name, email, address, items })
    clearCart()
    router.push("/thank-you")
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <Input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-4"
        required
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4"
        required
      />
      <Input
        type="text"
        placeholder="Shipping Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="mb-4"
        required
      />
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Order Summary</h3>
        {items.map((item) => (
          <div key={item.id} className="flex justify-between">
            <span>
              {item.name} (x{item.quantity})
            </span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="font-semibold mt-2">Total: ${total.toFixed(2)}</div>
      </div>
      <Button type="submit" className="w-full">
        Place Order
      </Button>
    </form>
  )
}

