<template>
  <div class="grid grid-cols-3">
    <ProductListItem v-for="product in products" class="mb-10" :key="product.id" :product="product"/>
  </div>
</template>

<script lang="ts" setup>
  import { useProductStore } from '~/stores/product';

  const productStore = useProductStore();

  const products = computed(() => productStore.products);

</script>
