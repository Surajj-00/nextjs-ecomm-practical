"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Category } from "@/types";

export default function CategoryFilter({
  categories,
  active,
}: {
  categories: Category[];
  active?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const select = (cat?: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (cat) params.set("category", cat);
    else params.delete("category");
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => select()}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${!active
            ? "bg-black text-white"
            : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400"
          }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => select(cat)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition ${active === cat
              ? "bg-black text-white"
              : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
