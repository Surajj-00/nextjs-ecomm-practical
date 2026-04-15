import { Product, Category } from "@/types";

const BASE_URL = "https://fakestoreapi.com";

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    return res.json();
  } catch (error) {
    console.error("getProducts failed:", error);
    return [];
  }
}

export async function getProductById(id: number): Promise<Product | null> {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    return res.json();
  } catch (error) {
    console.error("getProductById failed:", error);
    return null;
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${BASE_URL}/products/categories`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    return res.json();
  } catch (error) {
    console.error("getCategories failed:", error);
    return [];
  }
}
export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  try {
    const res = await fetch(
      `${BASE_URL}/products/category/${encodeURIComponent(category)}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return [];

    return res.json();
  } catch (error) {
    console.error("getProductsByCategory failed:", error);
    return [];
  }
}
