<template>
  <div class="py-[100px]">
    <div class="relative z-20 text-center">
      <h2 class="text-[2.5rem] text-green font-semibold mb-8">Login</h2>
      <div class="lg:w-1/3 mx-auto bg-white  border rounded-2xl p-8 m-8">
        <p class="text-gray-500 mb-8">Enter your email address and password <br>to access your account</p>
        <AuthLoginForm />
      </div>
      <p class="text-gray-500 mb-6">
        Don't have an account ? <NuxtLink to="/register" class="text-orange font-semibold">Register</NuxtLink>
      </p>

      <NuxtLink to="/" class="text-gray-500 text-sm underline">Back Home</NuxtLink>


    </div>
  </div>
</template>

<script setup>

usePageMeta('Login')
</script>
