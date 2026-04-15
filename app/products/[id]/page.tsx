import { getProductById, getProducts } from "@/lib/api";
import ProductDetail from "@/components/product/ProductDetail";
import { notFound } from "next/navigation";

// export async function generateStaticParams() {
//   try {
//     const products = await getProducts();
//     return products.map((p: any) => ({ id: String(p.id) }));
//   } catch (error) {
//     console.error("Failed to fetch products:", error);
//     return [];
//   }
// }

export const dynamic = "force-dynamic";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(Number(params.id)).catch(() => null);

  if (!product) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <ProductDetail product={product} />
    </div>
  );
}
