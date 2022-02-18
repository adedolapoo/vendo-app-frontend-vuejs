<template>
  <div>
    <div class="bg-[#f7f7f7] px-4">
      <div class="max-w-7xl mx-auto py-5 flex justify-between items-center">
        <div>
          <h2 class="text-2xl font-bold mb-1">Welcome, {{authUserStore.fullName }} </h2>
          <p class="text-sm text-gray-400">Complete registration and make payment to get your attestation certificate</p>
        </div>
        <div>
          <!--<a href="#" class="page-header-button">
            Print  Certificate
          </a>-->
        </div>
      </div>
    </div>
    <section class="max-w-7xl mx-auto md:px-0 px-4 py-16">

    </section>
  </div>
</template>

<script setup lang="ts">
  import { useAuthUserStore } from '~/stores'

  const authUserStore = useAuthUserStore()
</script>

<script lang="ts">
  export default {
    layout: 'admin',
    middleware: ['user']
  }
</script>
