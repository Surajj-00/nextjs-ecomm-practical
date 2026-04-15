import { getProducts, getCategories } from "@/lib/api";
import ProductGrid from "@/components/product/ProductGrid";
import ProductSection from "@/components/product/ProductSection";
import CategoryFilter from "@/components/product/CategoryFilter";
import Hero from "@/components/ui/Hero";
import BrowseByStyle from "@/components/ui/BrowseByStyle";
import TestimonialSection from "@/components/ui/TestimonailSection";
import Footer from "@/components/ui/Footer";


export const revalidate = 60;

export default async function HomePage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) {
  const { category, search } = await searchParams;

  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  const isFiltering = !!category || !!search;

  let filtered = products;
  if (category) {
    filtered = filtered.filter((p) => p.category === category);
  }
  if (search) {
    filtered = filtered.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Split into sections — first 4 and next 4
  const newArrivals = products.slice(0, 4);
  const topSelling = products.slice(4, 8);

  return (
    <div className="">
      {!isFiltering && <Hero />}

      <div className="max-w-7xl mx-auto px-4">
        {isFiltering ? (
          // Search / filter results view
          <div className="py-10" id="new-arrivals">
            <h2 className="font-heading text-3xl font-black uppercase text-center mb-2">
              {search ? `Results for "${search}"` : category}
            </h2>
            <p className="text-gray-400 text-sm text-center mb-8">
              {filtered.length} items
            </p>
            <CategoryFilter categories={categories} active={category} />
            <ProductGrid products={filtered} />
          </div>
        ) : (
          // Default homepage sections
          <>
            <div id="new-arrivals">
              <ProductSection title="New Arrivals" products={newArrivals} />
            </div>

            <div className="border-t border-gray-200 border-2" />

            <ProductSection title="Top Selling" products={topSelling} />
          </>
        )}
      </div>


      <BrowseByStyle/>
      <TestimonialSection/>
    </div>
  );
}
