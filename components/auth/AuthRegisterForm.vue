<template>
  <form action="">
    <div class="grid grid-cols-2 gap-6 mb-6">
      <BaseFormInput placeholder="Full Name" v-model="formData.name" />
      <BaseFormInput placeholder="Email Address" v-model="formData.email" />
    </div>
    <div class="grid grid-cols-2 gap-6">
      <BaseFormInput placeholder="Password" v-model="formData.password" type="password" />
      <BaseFormInput placeholder="Password" v-model="formData.confirm_password" type="password" />
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
      if (e.response?.status === 400) msg = e.response?.data?.message;
      $toast.error(msg);
    }
  }

</script>

