'use client'

export const dynamic = "force-dynamic";
export const revalidate = 0;

import CartView from "@/components/cart/CartView";
import Breadcrumb from "@/components/ui/Breadcrumb";

export default function CartPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 mb-16">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Cart" }
        ]}
      />

      <h1 className="text-5xl font-heading uppercase font-bold text-gray-900 mb-8">Your Cart</h1>
      <CartView />
    </div>
  );
}
