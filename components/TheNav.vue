<template>
  <nav id="main-nav" class="hidden lg:flex flex-row items-center text-blue font-semibold">
    <NuxtLink to="/" class="md:px-6 lg:px-8 hover:text-green">Home</NuxtLink>
    <NuxtLink to="/faq" class="md:px-6 lg:px-8 hover:text-green">FAQs</NuxtLink>
    <NuxtLink to="/contact" class="md:px-6 lg:px-8 hover:text-green">Support</NuxtLink>
    <NuxtLink to="/login" class="md:px-6 lg:px-8 hover:text-green">Login</NuxtLink>
    <NuxtLink to="/register" class="pointer text-center text-white font-semibold rounded focus:outline-none bg-blue border-2 border-blue py-2 px-10 shadow-lg hover:bg-green hover:border-green">Register</NuxtLink>
  </nav>
</template>
