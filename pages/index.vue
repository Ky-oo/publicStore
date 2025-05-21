<script setup lang="ts">
import { addProductToCart } from "../stores/cartStore";
import type { Product } from "../types/products";
import { faker } from "@faker-js/faker";
import { useProductsStore } from "../stores/productsStore";
const searchQuery = ref("");
const products = ref<Product[]>([]);
const loading = ref(true);
const productsStore = useProductsStore();

onMounted(async () => {
  products.value = productsStore.products;
  loading.value = false;
});

const handleAddProductToCart = (product: Product) => {
  const addedProduct = { ...product, cartId: faker.string.uuid() };
  addProductToCart(addedProduct);
};

const refreshProducts = async () => {
  loading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  products.value = productsStore.products;
  loading.value = false;
};
</script>
<template>
  <div>
    <NuxtLink to="/admin">
      <button
        class="bg-blue-500 text-white p-2 rounded-md m-5 hover:bg-blue-600 cursor-pointer"
      >
        Admin
      </button>
    </NuxtLink>
    <div class="flex justify-center flex-col items-center">
      <Cart />

      <h1 class="text-3xl font-bold underline">Store</h1>
      <input
        class="border-2 border-gray-300 rounded-md p-2 w-1/4 mt-5"
        type="text"
        v-model="searchQuery"
      />
      <button
        class="bg-blue-500 text-white p-2 rounded-md mt-5 cursor-pointer hover:bg-blue-600"
      >
        Search
      </button>
    </div>
    <div class="flex justify-center items-center">
      <div
        class="flex flex-col items-center border-2 border-gray-300 rounded-md p-2 w-3/4 h-1/2 mt-5 relative"
      >
        <button
          @click="refreshProducts"
          class="absolute top-1 right-2 bg-green-500 text-white p-2 rounded-md hover:bg-green-600 cursor-pointer"
          :disabled="loading"
        >
          <span v-if="!loading">Refresh</span>
          <span v-else>Chargement...</span>
        </button>
        <div
          v-if="products.length > 0 && !loading"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
        >
          <ProductCard
            v-for="product in products"
            :product="product"
            :key="product.id"
            @addProductToCart="handleAddProductToCart"
          />
        </div>
        <div v-else-if="loading" class="flex justify-center items-center p-8">
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
