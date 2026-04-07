import { useMemo } from "react";
import { productRepository } from "../lib/repositories/productRepository";
import { useFilterStore } from "../store/useFilterStore";

export function usePublicProducts() {
  const filters = useFilterStore((state) => state.filters);

  return useMemo(() => {
    const products = productRepository.getPublicProducts();

    return products.filter((product) => {
      if (filters.search && !product.title.toLowerCase().includes(filters.search.toLowerCase())) return false;
      if (filters.categorySlug) {
        const category = product.categoryId;
        if (!category.includes(filters.categorySlug.replace("-", ""))) {
          // uyğunluğu id və slug qarışığında qorumaq üçün ikinci yoxlama aparılır
          const exactMatch = productRepository
            .getPublicProducts()
            .some((item) => item.id === product.id && item.slug.includes(filters.categorySlug || ""));
          if (!exactMatch) return false;
        }
      }
      if (filters.brandIds.length > 0 && !filters.brandIds.includes(product.brandId)) return false;
      if (typeof filters.minPrice === "number" && product.price < filters.minPrice) return false;
      if (typeof filters.maxPrice === "number" && product.price > filters.maxPrice) return false;
      if (filters.storageOptions.length > 0 && (!product.storage || !filters.storageOptions.includes(product.storage))) return false;
      if (filters.ramOptions.length > 0 && (!product.ram || !filters.ramOptions.includes(product.ram))) return false;
      if (filters.popularOnly && !product.isPopular) return false;
      return true;
    });
  }, [filters]);
}