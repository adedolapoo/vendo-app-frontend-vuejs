<template>
  <div>
    <section
      class="bg-cover bg-no-repeat relative min-h-screen text-center"
      style="background-image: url('/bg-vend.jpg')"
    >
      <div class="absolute h-full w-full bg-white/90 z-1"></div>
      <div class="max-w-7xl mx-auto pt-48 pb-52 md:pt-56 md:pb-60 z-50 relative text-center px-4 md:px-0">
        <h1 class="pb-12 text-5xl font-bold text-green leading-none">Welcome to VendMachine</h1>
        <p class="font-semibold text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </p>
        <div class="pt-16">
          <NuxtLink
            to="/login"
            class="py-4 text-lg font-semibold text-center text-white border-2 rounded  px-12 focus:outline-none bg-green border-green hover:bg-blue hover:border-blue mr-6"
          >Login
          </NuxtLink>
          <NuxtLink
            to="/register"
            class="py-4 text-lg font-semibold text-center text-white border-2 rounded  px-12 focus:outline-none bg-blue border-blue hover:bg-blue hover:border-blue"
          >Register
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

</script>
