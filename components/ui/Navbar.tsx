"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Search, X, ChevronDown, CircleUserRound, TextAlignJustify } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useRouter, useSearchParams } from "next/navigation";

export default function Navbar() {
  const { totalItems } = useCart();
  const [banner, setBanner] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") ?? "");

  const handleSearch = (value: string) => {
    setQuery(value);
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set("search", value);
    else params.delete("search");
    params.delete("category");
    router.push(`/?${params.toString()}`);
  };


  return (
    <header className="sticky top-0 z-50 shadow-sm">

      {/* Announcement bar */}
      {banner && (
        <div className="bg-black text-white font-extralight text-xs md:text-sm text-center py-2.5 px-4 relative">
          Sign up and get 20% off to your first order.{" "}
          <Link href="/" className="underline font-normal underline-offset-3">
            Sign Up Now
          </Link>
          <button
            onClick={() => setBanner(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:opacity-70 transition hidden md:flex"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main navbar */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-4 md:gap-8">

          <TextAlignJustify className="w-5 h-5 mt-0.5 text-zinc-950 flex md:hidden" />

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-black tracking-tight text-gray-900 shrink-0"
          >
            SHOP.CO
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-6">
            <button className="flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-black transition">
              Shop <ChevronDown className="w-4 h-4" />
            </button>
            <Link href="/" className="text-sm font-medium text-gray-800 hover:text-black transition">
              On Sale
            </Link>
            <Link href="/" className="text-sm font-medium text-gray-800 hover:text-black transition">
              New Arrivals
            </Link>
            <Link href="/" className="text-sm font-medium text-gray-800 hover:text-black transition">
              Brands
            </Link>
          </div>

          {/* Search bar */}
          <div className="flex-1 hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2 max-w-xl">
            <Search className="w-4 h-4 text-gray-400 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search for products..."
              className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full"
            />
            {query && (
              <button onClick={() => handleSearch("")}>
                <X className="w-4 h-4 text-gray-400 hover:text-gray-700 transition" />
              </button>
            )}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 ml-auto md:ml-0">
            <Search onClick={() => handleSearch("")}
              className="w-5 h-5 md:hidden text-zinc-950" />
            <Link href="/cart" className="relative text-gray-800 hover:text-black transition">
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </Link>
            <button className="text-gray-800 hover:text-black transition">
              <CircleUserRound className="w-5 h-5" />
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
}
