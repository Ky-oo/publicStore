<script setup lang="ts">
const searchQuery = ref("");
const products = ref([]);
</script>
<template>
  <div>
    <div class="flex justify-center flex-col items-center">
      <h1 class="text-3xl font-bold underline">Store</h1>
      <input
        class="border-2 border-gray-300 rounded-md p-2 w-1/2 mt-5"
        type="text"
        v-model="searchQuery"
      />
      <button class="bg-blue-500 text-white p-2 rounded-md mt-5">Search</button>
    </div>
    <div class="flex justify-center">
      <div
        v-if="products.length > 0"
        class="flex justify-center flex-col items-center border-2 border-gray-300 rounded-md p-2 w-1/2 mt-5"
      >
        <div v-for="product in products" :key="product.id">
          <span>Product</span>
        </div>
      </div>
      <div
        v-else
        class="flex justify-center flex-col items-center border-2 border-gray-300 rounded-md p-2 w-1/2 h-1/2 mt-5"
      >
        <span>No products found</span>
      </div>
    </div>
  </div>
</template>
