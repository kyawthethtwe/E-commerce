"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for messages (replace with real data)
const mockMessages = [
  {
    id: 1,
    from: "John Doe",
    subject: "Question about vintage camera",
    content: "Hi, I was wondering if the vintage camera you listed is still available?",
    date: "2023-06-01",
  },
  {
    id: 2,
    from: "Jane Smith",
    subject: "Shipping inquiry",
    content: "Hello, I'm interested in the antique vase. Do you offer international shipping?",
    date: "2023-06-02",
  },
  {
    id: 3,
    from: "Mike Johnson",
    subject: "Return request",
    content: "The item I received doesn't match the description. Can I return it?",
    date: "2023-06-03",
  },
]

export default function MessageList() {
  const [messages, setMessages] = useState<{ id: number; from: string; subject: string; content: string; date: string; }[]>([])

  useEffect(() => {
    // In a real application, you would fetch messages from an API
    setMessages(mockMessages)
  }, [])

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <Card key={message.id}>
          <CardHeader>
            <CardTitle>{message.subject}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">
              From: {message.from} | Date: {message.date}
            </p>
            <p>{message.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

