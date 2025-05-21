import type { Product } from "../types/products";
import { useLocalStorage } from "@vueuse/core";

export const cart = useLocalStorage("cart", [] as Product[]);

const addProductToCart = (product: Product) => {
  cart.value.push(product);
};

const getProductsInCart = () => {
  return cart.value;
};

const removeProductFromCart = (productToRemove: Product) => {
  cart.value = cart.value.filter(
    (product) => product.id !== productToRemove.id
  );
};

export { addProductToCart, getProductsInCart, removeProductFromCart };
