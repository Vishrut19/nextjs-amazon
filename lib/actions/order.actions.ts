import { OrderItem } from "@/types";
import { round2 } from "../utils";
import { FREE_SHIPPING_MIN_PRICE } from "../constants";

export const calcDeliveryDateAndPrice = async ({
  // accepts items of type OrderItem
  items,
}: {
  deliveryDateIndex?: number;
  items: OrderItem[];
}) => {
  const itemsPrice = round2(
    items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );

  /* If itemPrice is greater than FREE_SHIPPING_MIN_PRICE, then shipping price is $0
  else shipping price is $5 */
  const shippingPrice = itemsPrice > FREE_SHIPPING_MIN_PRICE ? 0 : 5;
  // By default tax is 15% of itemsPrice
  const taxPrice = round2(itemsPrice) * 0.15;
  // Total Price = Items Price + Shipping Price + Tax Price
  const totalPrice = round2(
    itemsPrice +
      (shippingPrice ? round2(shippingPrice) : 0) +
      (taxPrice ? round2(taxPrice) : 0)
  );

  return {
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  };
};
