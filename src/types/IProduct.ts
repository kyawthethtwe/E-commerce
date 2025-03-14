export interface Product {
    id: string
    title: string
    description: string
    category: string
    rating: {
      rate: number
      count: number
    }
    price: number
    image: string
  }