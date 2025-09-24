interface Order {
  id: number
  createdAt: string
  total: number
  status: "completed" | "pending" | "cancelled"
}
export const orders: Order[] = [
    {
        id: 1,
        createdAt: "2023-10-01T10:00:00Z",
        total: 150.75,
        status: "completed"
    },
    {
        id: 2,
        createdAt: "2023-10-05T14:30:00Z",
        total: 89.50,
        status: "pending"
    },
    {
        id: 3,
        createdAt: "2023-10-10T09:15:00Z",
        total: 45.00,
        status: "cancelled"
    }
];

export async function getOrders() {
    return orders;
}