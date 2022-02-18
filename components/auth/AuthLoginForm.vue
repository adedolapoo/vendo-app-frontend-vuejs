<template>
  <form>
    <div class="mb-6">
      <input
        class="appearance-none block border-gray-300 w-full text-gray-600 placeholder:text-gray-400 border rounded-full py-3 px-6 mb-3 leading-tight focus:outline-none focus:ring-white"
        type="text"
        placeholder="Email Address"
        v-model="formData.email"
      >
    </div>
    <div class="mb-6">
      <input
        class="appearance-none block border-gray-300 w-full text-gray-600 placeholder:text-gray-400 border rounded-full py-3 px-6 mb-3 leading-tight focus:outline-none focus:ring-white"
        type="password"
        placeholder="Password"
        v-model="formData.password"
      >
    </div>
    <div class="flex flex-wrap mb-6 justify-between">
      <div class="flex items-center">
        <input
          type="checkbox"
          class="rounded text-pink-500"
        />
        <span class="ml-2 text-gray-500">Remember me</span>
      </div>
      <NuxtLink
        to="#"
        class="text-green"
      >Forgot Password?
      </NuxtLink>
    </div>

    <button :class="{'is-loading' : isLoading}"
            class="relative w-full bg-green mt-4 py-3 px-4 rounded-full text-white text-lg font-semibold hover:bg-green/90 transition-all"
            @click.prevent="login">Login
    </button>
  </form>
</template>

<script setup lang="ts">
  import { useAuthUserStore } from '~/stores/auth-user';

  const { $router } = useNuxtApp();
  const authUserStore = useAuthUserStore();
  const isLoading = computed(() => authUserStore.isLoading)
  const formData = reactive({});

  const login = async () => {
    await authUserStore.login(formData);
    $router.push('/admin')
  };
</script>
