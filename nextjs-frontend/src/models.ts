export type Category = {
  id: number;
  name: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  image_url: string;
  price: number;
  category_id: string;
};

export enum OrderStatus {
  PENDING = "pending",
  PAID = "paid",
  FAILED = "failed",
}

export type Order = {
  id: string;
  total: number;
  status: OrderStatus;
  items: OrderItem[];
  created_at: string;
};

export type OrderItem = {
  id: number;
  quantity: number;
  price: number;
  product: Product;
};
