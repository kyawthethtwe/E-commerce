import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, ShoppingBag, Truck } from 'lucide-react'

const steps = [
  {
    title: "Browse & Search",
    description: "Explore our wide range of pre-loved items or use our search to find exactly what you're looking for.",
    icon: Search,
  },
  {
    title: "Purchase Securely",
    description: "Choose your items and check out securely. We protect your transaction every step of the way.",
    icon: ShoppingBag,
  },
  {
    title: "Fast Delivery",
    description: "Sit back and relax as your items are carefully packed and shipped directly to your doorstep.",
    icon: Truck,
  },
]

export default function HowItWorks() {
  return (
    <section className="container">
      <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-highlight flex items-center justify-center mb-4">
                <step.icon className="h-6 w-6 text-muted-foreground" />
              </div>
              <CardTitle>{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

