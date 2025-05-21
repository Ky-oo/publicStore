import type { Product } from "../types/products";
import { useLocalStorage } from "@vueuse/core";

export const products = useLocalStorage("products", [] as Product[]);

const addProducts = (newProducts: Product[]) => {
  products.value = newProducts;
};

const getProducts = () => {
  return products.value;
};

export { addProducts, getProducts };
