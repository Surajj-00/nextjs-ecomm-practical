"use client";

import Image from "next/image";
import { CartItem as CartItemType } from "@/types";
import { useCart } from "@/context/CartContext";
import { Trash2, Plus, Minus } from "lucide-react";

export default function CartItem({ item }: { item: CartItemType }) {
  const { removeItem, updateQuantity } = useCart();

  return (
    <div className=" border border-gray-200 bg-white rounded-xl">
      <div className=" p-4 flex gap-4">
        {/* Image */}
        <div className="relative w-28 h-28 shrink-0 bg-[#F0EEED] rounded-lg">
          <Image
            src={item.product.image}
            alt={item.product.title}
            fill
            className="object-contain p-3"
            sizes="80px"
          />
        </div>

        {/* Details */}
        <div className="flex-1 flex flex-col items-start justify-center min-w-0">

          <h3 className="text-base font-bold text-gray-800 line-clamp-2 mb-2">
            {item.product.title}
          </h3>

          <p className="text-xl font-bold text-gray-900">
            ${(item.product.price * item.quantity).toFixed(2)}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col items-end justify-between">
          <button
            onClick={() => removeItem(item.product.id)}
            className=" cursor-pointer"
          >
            <Trash2 className="w-4 h-4 text-red-700" />
          </button>

          <div className="flex items-center gap-2 bg-[#F0F0F0] rounded-4xl px-4 py-2">
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
              className="text-black hover:text-gray-900 transition"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-xs w-5 text-center text-black font-normal">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
              className="text-black  hover:text-gray-900 transition"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
