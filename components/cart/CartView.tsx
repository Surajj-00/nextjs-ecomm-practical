"use client";

import { useCart } from "@/context/CartContext";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function CartView() {
  const { items } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-24 flex flex-col items-center gap-4">
        <ShoppingBag className="w-16 h-16 text-gray-200" />
        <p className="text-gray-500 text-lg">Your cart is empty</p>
        <Link
          href="/"
          className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition text-sm"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 flex flex-col gap-4">
        {items.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </div>
      <div className="lg:col-span-1">
        <CartSummary />
      </div>
    </div>
  );
}
