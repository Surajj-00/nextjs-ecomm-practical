import { getProductById, getProducts } from "@/lib/api";
import ProductDetail from "@/components/product/ProductDetail";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ id: String(p.id) }));
}

export default async function ProductPage({ params, }: { params: Promise<{ id: string }>; }) {
  const { id } = await params;
  const product = await getProductById(Number(id)).catch(() => null);
  if (!product) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <ProductDetail product={product} />
    </div>
  );
}
