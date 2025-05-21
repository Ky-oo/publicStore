<script setup lang="ts">
const loading = ref(false);
const password = ref("");

const login = async () => {
  loading.value = true;
  const response = await $fetch<{ authenticated: boolean }>("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      password: password.value,
    },
  });
  if (response.authenticated) {
    navigateTo("/admin");
  } else {
    alert("Invalid password");
  }

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
  <div class="flex justify-center items-center flex-col">
    <h1 class="text-3xl font-bold underline">Login</h1>

    <div v-if="!loading" class="flex justify-center flex-col">
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        class="border-2 border-gray-300 rounded-md p-2 mt-5"
      />
      <button
        class="bg-blue-500 text-white p-2 rounded-md cursor-pointer hover:bg-blue-600 mt-5"
        @click="login"
      >
        Login
      </button>
    </div>
    <div v-else>
      <div
        class="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"
      ></div>
    </div>
  </div>
</template>
