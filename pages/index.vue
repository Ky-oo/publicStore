<script setup lang="ts">
import { getProducts } from "../stores/productsStore";
import type { Product } from "../types/products";

const searchQuery = ref("");
const products = ref<Product[]>([]);
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  products.value = getProducts();
  loading.value = false;
});

const handleAddProductToCart = (product: Product) => {};
</script>
<template>
  <div>
    <div class="flex justify-center flex-col items-center">
      <h1 class="text-3xl font-bold underline">Store</h1>
      <input
        class="border-2 border-gray-300 rounded-md p-2 w-1/4 mt-5"
        type="text"
        v-model="searchQuery"
      />
      <button class="bg-blue-500 text-white p-2 rounded-md mt-5">Search</button>
    </div>
    <div class="flex justify-center items-center">
      <div
        class="flex flex-col items-center border-2 border-gray-300 rounded-md p-2 w-3/4 h-1/2 mt-5"
      >
        <div
          v-if="products.length > 0"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
        >
          <ProductCard
            v-for="product in products"
            :product="product"
            :key="product.id"
            @addProductToCart="handleAddProductToCart"
          />
        </div>
        <div v-else-if="loading">
          <div
            class="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"
          ></div>
        </div>
        <div v-else>
          <span>No products found</span>
        </div>
      </div>
    </div>
  </div>
</template>
