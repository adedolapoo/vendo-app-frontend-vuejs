<template>
  <div class="flex space-x-4 items-center">
    <a class=" flex space-x-4 items-center" href="#">
      <span class="block border p-2 text-green rounded hover:text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
      </svg>
      </span>
      <div>
        <p class="font-semibold text-sm text-gray-500">{{authUserStore.fullName}}</p>
        <p class="text-xs text-gray-400">{{authUserStore.user.email}}</p>
      </div>
    </a>
    <!--<a class="block border p-2 text-gray-400 rounded hover:text-gray-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
    </a>-->
  </div>
</template>

<script setup lang="ts">
  import { useAuthUserStore } from '~/stores/auth-user';

  const authUserStore = useAuthUserStore();
  console.log(authUserStore.user);
</script>
