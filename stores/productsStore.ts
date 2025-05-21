import type { Product } from "../types/products";

const addProducts = (newProducts: Product[]) => {
  localStorage.setItem("products", JSON.stringify(newProducts));
};

const getProducts = () => {
  return JSON.parse(localStorage.getItem("products") || "[]");
};

export { addProducts, getProducts };
