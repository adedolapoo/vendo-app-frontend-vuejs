<template>
  <div class="py-[100px]">
    <div class="relative z-20 text-center">
      <h2 class="text-[2.5rem] text-green font-semibold mb-8">Register</h2>
      <div class="lg:w-6/12 mx-auto bg-white  border rounded-2xl p-8 m-8">
        <p class="text-gray-500 mb-8">Enter your details below to get started</p>
        <AuthRegisterForm />
      </div>
      <p class="text-gray-500 mb-6">
        Already have an account ?
        <NuxtLink to="/login" class="text-orange font-semibold hover:text-green">Login</NuxtLink>
      </p>
      <NuxtLink to="/" class="text-gray-500 text-sm text-blue underline">Back Home</NuxtLink>
    </div>
  </div>
</template>


<script setup>

usePageMeta('Register')
</script>

<style lang="scss" scoped>
</style>
