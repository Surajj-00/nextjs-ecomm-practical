"use client";

import { useCart } from "@/context/CartContext";

export default function CartSummary() {
  const { totalPrice, totalItems, clearCart } = useCart();

  const shipping = totalPrice > 50 ? 0 : 4.99;
  const total = totalPrice + shipping;

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 sticky top-24">
      <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>

      <div className="space-y-3 text-sm text-gray-600 mb-6">
        <div className="flex justify-between">
          <span>Subtotal ({totalItems} items)</span>
          <span className="font-medium text-gray-800">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span
            className={
              shipping === 0
                ? "text-green-600 font-medium"
                : "font-medium text-gray-800"
            }
          >
            {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        {shipping > 0 && (
          <p className="text-xs text-gray-400">Free shipping on orders over $50</p>
        )}
        <div className="border-t border-gray-100 pt-3 flex justify-between text-base font-bold text-gray-900">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button className="w-full bg-black text-white py-3 rounded-xl text-sm font-medium hover:bg-gray-800 active:scale-95 transition mb-3">
        Checkout
      </button>

      <button
        onClick={clearCart}
        className="w-full text-sm text-gray-400 hover:text-red-400 transition py-2"
      >
        Clear cart
      </button>
    </div>
  );
}
