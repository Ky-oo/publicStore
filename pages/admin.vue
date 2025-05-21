<script setup lang="ts">
import { addProducts } from "../stores/productsStore";
import type { Product } from "../types/products";

const products = ref([]);
const loading = ref(false);

const createProducts = async () => {
  loading.value = true;
  const response = await $fetch<{ products: Product[] }>("/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      quantity: 200,
    },
  });

  addProducts(response.products as Product[]);
  loading.value = false;
};
</script>
<template>
  <div>
    <div class="flex justify-center flex-col items-center">
      <h1 class="text-3xl font-bold underline">Admin</h1>

      <button
        :class="
          products.length == 200 || loading
            ? 'disabled bg-gray-500'
            : 'bg-blue-500'
        "
        @click="createProducts"
        class="bg-blue-500 text-white p-2 rounded-md mt-5 cursor-pointer hover:bg-blue-600"
      >
        Creat 200 Product
      </button>
      <div v-if="products.length == 200">
        <span class="text-red-500">Product already created</span>
      </div>
    </div>
  </div>
</template>
