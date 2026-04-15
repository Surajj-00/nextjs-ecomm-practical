"use client";

import Image from "next/image";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Star, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div>
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 mb-8 transition"
      >
        <ArrowLeft className="w-4 h-4" /> Back to products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image */}
        <div className="relative h-96 bg-white rounded-2xl flex items-center justify-center p-8 border border-gray-100">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-8"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">
            {product.category}
          </p>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>

          {/* Stars */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.round(product.rating.rate)
                      ? "fill-amber-400 text-amber-400"
                      : "fill-gray-200 text-gray-200"
                    }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">
              {product.rating.rate} · {product.rating.count} reviews
            </span>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {product.description}
          </p>

          <p className="text-3xl font-bold text-gray-900 mb-8">
            ${product.price.toFixed(2)}
          </p>

          <button
            onClick={() => addItem(product)}
            className="flex items-center justify-center gap-2 bg-black text-white py-3 px-8 rounded-xl text-sm font-medium hover:bg-gray-800 active:scale-95 transition w-full md:w-auto"
          >
            <ShoppingCart className="w-5 h-5" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
