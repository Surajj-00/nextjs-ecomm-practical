"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Star, StarHalf } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="bg-white rounded-xl flex flex-col group">
      <Link href={`/products/${product.id}`} className="flex-1">
        <div className="relative h-56 md:h-80 mb-4 flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300 p-8 md:p-12 bg-[#F0EEED] rounded-3xl"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        {/* <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
          {product.category}
        </p> */}
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
          {product.title}
        </h3>
        <div className="flex items-center gap-2 mb-1">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }, (_, i) => {
              const rating = product.rating.rate;

              if (rating >= i + 1) {
                return (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-amber-400 text-amber-400"
                  />
                );
              }

              if (rating >= i + 0.5) {
                return (
                  <StarHalf
                    key={i}
                    className="w-3 h-3 fill-amber-400 text-amber-400"
                  />
                );
              }
            })}
          </div>

          <span className="text-xs font-bold text-black">
            {product.rating.rate}/5
          </span>
        </div>
        <p className="text-lg font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </p>
      </Link>

      <button
        onClick={() => addItem(product)}
        className="mt-4 w-full flex items-center justify-center gap-2 bg-black text-white text-sm py-2 rounded-lg hover:bg-gray-800 active:scale-95 transition"
      >
        <ShoppingCart className="w-4 h-4" />
        Add to cart
      </button>
    </div>
  );
}
