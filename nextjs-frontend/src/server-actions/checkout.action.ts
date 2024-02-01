'use server';

import { redirect } from "next/navigation";
import { Order } from "../models";
import { CartServiceFactory } from "../services/cart.service";
import { OrderServiceFactory } from "../services/order.service";

export async function checkoutAction(formData: FormData) {
  const cartService = CartServiceFactory.create();
  const cart = cartService.getCart();
  const orderService = OrderServiceFactory.create();
  let order: Order;
  try {
    order = await orderService.createOrder({
      card_hash: formData.get("card_hash") as string,
      items: cart.items.map((item) => ({
        product_id: item.product_id,
        quantity: item.quantity,
      })),
    });
    cartService.clearCart();
  } catch (e) {
    console.error(e);
    return {
      error: { message: "O pagamento não foi aprovado." },
    };
  }

  redirect(`/checkout/${order.id}/success`);
}
