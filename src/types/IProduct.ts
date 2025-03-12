export interface Product {
    id: string
    name: string,
    description: string
    category : string
    rating: {
      rate : number
      count : number
    }
    price: number
    image: string
  }