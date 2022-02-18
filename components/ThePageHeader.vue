<template>
  <div
    class="bg-cover bg-center bg-no-repeat relative"
    style="background-image: url('/img/fingerprint.png')"
  >
    <div class="overlay-white"></div>
    <div class="max-w-7xl mx-auto py-16">
      <h2 class="text-[2.5rem] font-bold text-green mb-2">{{title}}</h2>
      <ul class="inline-flex items-center space-x-1 md:space-x-3 text-blue text-gray-700 font-medium">
        <li class="flex items-center"><i class="ri-home-8-fill "></i><a href="#" class="ml-1 text-sm hover:text-gray-900 md:ml-2">Home</a></li>
        <li class="flex items-center"><i class="ri-arrow-right-s-line"></i><a href="#" class="ml-1 text-sm hover:text-gray-900 md:ml-2">{{title}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
   const props = defineProps({
    title: String
  })
</script>
