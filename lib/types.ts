export interface Product {
  id: string
  name: string
  description: string
  price: number
  image_url: string
  category: string
  sizes: string[]
  colors: string[]
  created_at: string
}

export interface CartItem {
  product_id: string
  quantity: number
  size: string
  color: string
}

export interface Order {
  id: string
  user_id: string
  items: CartItem[]
  total: number
  status: 'pending' | 'paid' | 'shipped' | 'delivered'
  created_at: string
}
