<script setup lang="ts">
import { getProductsInCart, removeProductFromCart } from "../stores/cartStore";
</script>
<template>
  <div>
    <NuxtLink to="/">
      <button
        class="bg-blue-500 text-white p-2 rounded-md m-5 hover:bg-blue-600 cursor-pointer"
      >
        Back
      </button>
    </NuxtLink>
    <div class="flex justify-center items-center">
      <h1 class="text-3xl font-bold underline">Cart</h1>
    </div>
    <div class="flex justify-center items-center">
      <ul class="list-none">
        <li
          v-for="product in getProductsInCart()"
          :key="product.id"
          class="flex justify-between items-center p-4 border-b"
        >
          <div>
            <h3 class="font-bold">{{ product.title }}</h3>
            <p class="text-gray-600">{{ product.description }}</p>
            <p class="text-blue-600 font-bold">{{ product.price }} €</p>
          </div>

          <button
            class="bg-red-500 text-white p-2 rounded-md cursor-pointer mx-2 hover:bg-red-600"
            @click="removeProductFromCart(product)"
          >
            X
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
