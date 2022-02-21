<template>
  <div id="admin" class="main relative">
    <BaseModal />
    <AdminHeader />
    <section>
      <nuxt />
    </section>
    <AdminFooter />
  </div>
</template>

<script lang="ts">
  export default {
    middleware: ['auth']
  }
</script>

<script lang="ts" setup>
  import { useProductStore } from '~/stores/product';

  const productStore = useProductStore();

  usePageMeta('Account')

  onMounted(() => {
    productStore.getProducts();
  })
</script>
