export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface CartItem {
  product: Product,
  quantity: number;
}
export interface CartState {
  items: CartItem[]
}