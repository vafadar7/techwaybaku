import { useMemo } from "react";
import { brandRepository, categoryRepository } from "../lib/repositories/productRepository";

export function useCategories() {
  return useMemo(() => categoryRepository.getAll().sort((a, b) => a.order - b.order), []);
}

export function useBrands() {
  return useMemo(() => brandRepository.getAll(), []);
}