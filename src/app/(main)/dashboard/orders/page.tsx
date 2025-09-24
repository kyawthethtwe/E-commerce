"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { formatDate } from "@/lib/utils"
import { useGetOrders } from "@/services/queries/orderQueries"


export default function OrdersPage() {
  const { data: orders, isLoading, error } = useGetOrders();
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Loading your orders...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4 text-red-600">Error</h2>
        <p className="text-muted-foreground">Failed to load orders. Please try again later.</p>
      </div>
    )
  }

  if (!orders?.length) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">No Orders Yet</h2>
        <p className="text-muted-foreground">You haven&apos;t placed any orders yet.</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">My Orders</h2>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">#{order.id}</TableCell>
                <TableCell>{formatDate(order.createdAt)}</TableCell>
                <TableCell>${order.total.toFixed(2)}</TableCell>
                <TableCell>
                  <span
                    className={`
                    px-2 py-1 text-xs font-semibold rounded-full
                    ${order.status === "completed" ? "bg-green-500 text-white" : ""}
                    ${order.status === "pending" ? "bg-yellow-500 text-white" : ""}
                    ${order.status === "cancelled" ? "bg-red-500 text-white" : ""}
                  `}
                  >
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

