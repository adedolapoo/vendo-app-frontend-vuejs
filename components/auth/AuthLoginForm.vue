<template>
  <form>
    <BaseFormInput placeholder="Email Address" v-model="formData.email" class="mb-6" />
    <BaseFormInput type="password" placeholder="Password" v-model="formData.password" class="mb-6" />
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
        class="text-orange"
      >Forgot Password?
      </NuxtLink>
    </div>

    <button :class="{'is-loading' : isLoading}"
            class="relative w-full bg-green mt-4 py-3 px-4 rounded-full text-white text-lg font-semibold hover:bg-green/80 transition-all"
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
