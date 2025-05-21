<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
import { useProductsStore } from "~/stores/productsStore";
import type { Product } from "../types/products";
const productsStore = useProductsStore();

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
      quantity: 50,
    },
  });

  productsStore.addProducts(response.products as Product[]);
  loading.value = false;
};
</script>
<template>
  <NuxtLink to="/">
    <button
      class="bg-blue-500 text-white p-2 rounded-md m-5 hover:bg-blue-600 cursor-pointer"
    >
      Back
    </button>
  </NuxtLink>
  <div class="flex justify-center flex-col items-center">
    <h1 class="text-3xl font-bold underline">Admin</h1>

    <button
      :class="loading ? 'disabled bg-gray-500' : 'bg-blue-500'"
      @click="createProducts"
      class="bg-blue-500 text-white p-2 rounded-md mt-5 cursor-pointer hover:bg-blue-600"
    >
      {{
        productsStore.products.length == 50
          ? "Create 50 new products"
          : "Create 50 Products"
      }}
    </button>
    <div v-if="productsStore.products.length == 50">
      <span class="text-red-500">Product already created</span>
    </div>
  </div>
</template>
