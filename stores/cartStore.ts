import type { Product } from "../types/products";
import { useLocalStorage } from "@vueuse/core";

export const cart = useLocalStorage("cart", [] as Product[]);

const addProductToCart = (product: Product) => {
  cart.value.push(product);
};

const getProductsInCart = () => {
  return cart.value;
};

export { addProductToCart, getProductsInCart };
