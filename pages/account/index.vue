<template>
  <div>
    <AdminPageHeader title="Products">
      <template #buttons>
        <CartViewButton />
      </template>
    </AdminPageHeader>
    <section class="max-w-7xl mx-auto md:px-0 px-4 py-16">
      <ProductList />
    </section>
  </div>
</template>

<script setup lang="ts">
  import { useAuthUserStore } from '~/stores'

  const { $modal } = useNuxtApp();
  const authUserStore = useAuthUserStore();

  const openModal = () => {
    $modal.open({
      component: 'AuthLoginForm'
    })
  }
</script>

<script lang="ts">
  export default {
    layout: 'admin',
    middleware: ['user']
  }
</script>
