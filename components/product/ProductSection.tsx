import Link from "next/link";
import ProductCard from "./ProductCard";
import { Product } from "@/types";

export default function ProductSection({
  title,
  products,
}: {
  title: string;
  products: Product[];
}) {
  return (
    <section className="py-12">
      <h2 className="font-heading text-4xl md:text-6xl text-black font-black uppercase text-center mb-10">
        {title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link
          href="/?category=all"
          className="px-16 py-3 rounded-full border border-gray-300 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:border-gray-400 active:scale-95 transition"
        >
          View All
        </Link>
      </div>
    </section>
  );
}
