import { defineStore, skipHydrate } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import type { Product } from "../types/products";

export const useProductsStore = defineStore("products", () => {
  const products = useLocalStorage("products", [] as Product[]);

  const addProducts = (newProducts: Product[]) => {
    products.value = newProducts;
  };

  const getProducts = () => products.value;

  return {
    products: skipHydrate(products),
    addProducts,
    getProducts,
  };
});
