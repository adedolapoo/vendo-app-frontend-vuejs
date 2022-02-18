<template>
  <div>
    <AdminPageHeader title="Dashboard" />
  </div>
</template>

<script setup lang="ts">
  import { useAuthUserStore } from '~/stores'

  const authUserStore = useAuthUserStore()
</script>

<script lang="ts">
  export default {
    layout: 'admin',
    middleware: ['admin']
  }
</script>
