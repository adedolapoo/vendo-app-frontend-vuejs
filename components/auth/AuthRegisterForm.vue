<template>
  <form action="">
    <div class="grid grid-cols-2 gap-6">
      <div class="mb-6">
        <input
          class="appearance-none block border-gray-300 w-full text-gray-600 placeholder:text-gray-400 border rounded-full py-3 px-6 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="Full Name"
          v-model="formData.name"
        >
      </div>
      <div class="mb-6">
        <input
          class="appearance-none block border-gray-300 w-full text-gray-600 placeholder:text-gray-400 border rounded-full py-3 px-6 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="email"
          placeholder="Email Address"
          v-model="formData.email"
        >
      </div>
    </div>
    <div class="grid grid-cols-2 gap-6">
      <div class="mb-6">
        <input
          class="appearance-none block border-gray-300 w-full text-gray-600 placeholder:text-gray-400 border rounded-full py-3 px-6 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="password"
          placeholder="Password"
          v-model="formData.password"
        >
      </div>
      <div class="mb-6">
        <input
          class="appearance-none block border-gray-300 w-full text-gray-600 placeholder:text-gray-400 border rounded-full py-3 px-6 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="password"
          placeholder="Confirm Password"
          v-model="formData.confirm_password"
        >
      </div>
    </div>
    <div class="flex items-center">
      <input
        type="checkbox"
        class="rounded text-pink-500"
      />
      <span class="ml-2 text-gray-500">I have read the <a
          href="#"
          class="text-blue"
        >Terms & Conditions</a> and I accept</span>
    </div>
    <button :class="{'is-loading' : isLoading}" class="w-full bg-green mt-6 py-3 px-4 rounded-full text-white font-semibold text-lg relative hover:bg-green/90 transition-all" @click.prevent="register">Register</button>
  </form>
</template>

<script setup lang="ts">
  const { $auth, $axios, $toast, $router } = useNuxtApp();

  const isLoading = ref(false);

  const formData = reactive({});

  const register = async () => {
    try{
      isLoading.value = true;
      await $axios.$post('auth/register', formData)
      $toast.success('You are successfully registered');
      await $auth.loginWith('local', { data: formData });
      $toast.success('You are successfully logged in');
      $router.push('/admin');
    }catch (e) {
      isLoading.value = false
      let msg = 'An error occurred'
      if (e.response?.status === 401) msg = 'Invalid Credentials';
      $toast.error(msg);
    }
  }

</script>

