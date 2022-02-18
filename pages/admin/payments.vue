<template>
  <div>
    <AdminPageHeader title="Payments">
      <template #buttons>
        <a href="#" class="page-header-button">
          Create
        </a>
      </template>
    </AdminPageHeader>
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
