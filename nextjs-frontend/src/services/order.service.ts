import { Order } from "../models";
import { AuthService } from "./auth.service";

export class OrderService {
  constructor(private authService: AuthService) {}

  async getOrder(id: string): Promise<Order> {
    const response = await fetch(`${process.env.ORDERS_API_URL}/orders/${id}`, {
      headers: {
        Authorization: `Bearer ${this.authService.getToken()}`,
      },
    });
    return await response.json();
  }

  async getOrders(): Promise<Order[]> {
    const response = await fetch(`${process.env.ORDERS_API_URL}/orders`, {
      headers: {
        Authorization: `Bearer ${this.authService.getToken()}`,
      },
    });
    return await response.json();
  }

  async createOrder(input: {
    card_hash: string;
    items: { product_id: string; quantity: number }[];
  }): Promise<Order> {
    const response = await fetch(`${process.env.ORDERS_API_URL}/orders`, {
      method: "POST",
      body: JSON.stringify({
        card_hash: input.card_hash,
        items: input.items.map((item) => ({
          product_id: item.product_id,
          quantity: item.quantity,
        })),
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.authService.getToken()}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      const error = data;
      throw new Error(error.message);
    }

    return data;
  }
}

export const OrderServiceFactory = {
  create: () => new OrderService(new AuthService()),
};
