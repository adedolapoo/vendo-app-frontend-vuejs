<template>
  <section>
    <AdminPageHeader title="Products">
      <template #buttons>
        <a href="#" class="page-header-button" @click.prevent="openModal()">
          Create
        </a>
      </template>
    </AdminPageHeader>
    <section class="max-w-7xl mx-auto md:px-0 px-4 py-16">
      <ProductTable/>
    </section>
  </section>
</template>

<script setup lang="ts">
  import { useProductStore } from '~/stores'

  const { $modal } = useNuxtApp();
  const productStore = useProductStore();

  const openModal = () => {
    productStore.setProduct({});
    $modal.open({
      title: 'Add Product',
      component: 'ProductFormModal'
    })
  }
</script>

<script lang="ts">
  export default {
    layout: 'admin',
    middleware: ['admin']
  }
</script>
