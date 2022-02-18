<template>
  <nav id="admin-nav" class="hidden lg:flex flex-row items-center text-[#5e6278] font-semibold text-sm">
    <AdminNavItem v-for="(item,key) in items" :item="item" :key="key" />
  </nav>
</template>

<script lang="ts" setup>
  import { computed } from '#app'
  import adminNav from '~/utils/defs/nav/admin';
  import applicantNav from '~/utils/defs/nav/applicant';
  import { useAuthUserStore } from '~/stores'

  const authUserStore = useAuthUserStore()

  const items = computed(() => {
    if(authUserStore.isApplicantRole) return applicantNav
    return adminNav
  })
</script>
