<script setup lang="ts">
const products = ref([]);
</script>
<template>
  <div>
    <div class="flex justify-center flex-col items-center">
      <h1 class="text-3xl font-bold underline">Admin</h1>

      <button
        :class="products.length == 0 ? 'disabled bg-gray-500' : 'bg-blue-500'"
        class="bg-blue-500 text-white p-2 rounded-md mt-5"
      >
        Creat 200 Product
      </button>
      <div v-if="products.length == 0">
        <span class="text-red-500">Product already created</span>
      </div>
    </div>
  </div>
</template>
