"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "./cart-provider"

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false)
  const { items, removeItem, clearCart } = useCart()

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="relative">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        <ShoppingCart className="h-6 w-6" />
        {items.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
            {items.length}
          </span>
        )}
      </Button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-background shadow-xl rounded-lg z-50">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Your Cart</h3>
            {items.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center mb-2">
                    <span>
                      {item.name} (x{item.quantity})
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                    <Button size="sm" variant="ghost" onClick={() => removeItem(item.id)}>
                      Remove
                    </Button>
                  </div>
                ))}
                <div className="mt-4 border-t pt-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <Button className="w-full mt-2" onClick={clearCart}>
                    Clear Cart
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

