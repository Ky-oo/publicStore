<script setup lang="ts">
import { addProductToCart } from "../stores/cartStore";
import type { Product } from "../types/products";
import { faker } from "@faker-js/faker";
import { getProducts } from "../stores/productsStore";
const searchQuery = ref("");
const products = ref<Product[]>([]);
const loading = ref(true);

onMounted(async () => {
  products.value = getProducts();
  loading.value = false;
});

const handleAddProductToCart = (product: Product) => {
  const addedProduct = { ...product, cartId: faker.string.uuid() };
  addProductToCart(addedProduct);
};

const refreshProducts = async () => {
  loading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  products.value = getProducts();
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
          <div v-for="product in products" :key="product.id">
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
                      <span class="text-gray-600"
                        >{{ product.rating.count }} avis</span
                      >
                    </div>
                    <button
                      @click="handleAddProductToCart(product)"
                      class="bg-blue-500 text-white p-2 rounded-md cursor-pointer hover:bg-blue-600"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
