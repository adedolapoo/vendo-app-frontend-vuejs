<template>
  <header>
    <div class="max-w-7xl mx-auto px-4 md:px-0">
      <div class="py-5 flex justify-between items-center sticky top-0 px-4 md:px-0">
        <figure>
          <img class="w-1/2 md:w-2/3" src="/img/logo.png"/>
        </figure>
        <AuthUserWidget/>
      </div>
    </div>
    <div class="border-t border-[eff2f5]" v-if="!authUserStore.isApplicantCurrentRole">
      <div class="max-w-7xl mx-auto py-4 flex justify-between">
        <AdminNav />
        <div>
          <a href="#" class="block font-semibold text-sm bg-[#e8fff3] rounded text-green px-6 py-2 hover:bg-green hover:text-white">
            Contact & Support
          </a>
        </div>
      </div>
    </div>

  </header>
</template>

<script lang="ts" setup>
  import { useAuthUserStore } from '~/stores'

  const authUserStore = useAuthUserStore()
</script>

