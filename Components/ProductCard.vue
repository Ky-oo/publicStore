<script setup lang="ts">
import type { Product } from "../types/products";

defineProps<{
  product: Product;
}>();

const emit = defineEmits(["addProductToCart"]);

const addProductToCart = (product: Product) => {
  emit("addProductToCart", product);
};
</script>
<template>
  <div
    class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
  >
    <div class="flex flex-col h-full">
      <h2 class="text-xl font-semibold mb-2 text-gray-800">
        {{ product.title }}
      </h2>

      <div class="flex items-center mb-4">
        <span class="text-2xl font-bold text-blue-600">{{
          product.price
        }}</span>
        <span class="ml-2 text-sm text-gray-500">€</span>
      </div>

      <p class="text-gray-600 mb-4 flex-grow">
        {{ product.description }}
      </p>

      <div class="border-t pt-4">
        <div class="flex items-center mb-2">
          <span
            class="bg-gray-200 px-2 py-1 rounded-full text-sm text-gray-700"
            >{{ product.category }}</span
          >
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <div class="flex items-center">
              <svg
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <span class="ml-1 text-gray-600"
                >{{ product.rating.rate }}/5</span
              >
            </div>
            <span class="mx-2 text-gray-400">•</span>
            <span class="text-gray-600">{{ product.rating.count }} avis</span>
          </div>
          <button
            @click="addProductToCart(product)"
            class="bg-blue-500 text-white p-2 rounded-md"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
