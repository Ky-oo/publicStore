<script setup lang="ts">
const products = ref([]);
const createProducts = async () => {
  const response = await $fetch("/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      quantity: 200,
    },
  });
  console.log(response);
};
</script>
<template>
  <div>
    <div class="flex justify-center flex-col items-center">
      <h1 class="text-3xl font-bold underline">Admin</h1>

      <button
        :class="products.length == 200 ? 'disabled bg-gray-500' : 'bg-blue-500'"
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
