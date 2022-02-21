<template>
  <a href="#" class="page-header-button transition-all bg-orange hover:bg-orange/80" @click.prevent="openModal">
    View Cart ({{totalProductsInCart}})
  </a>
</template>

<script lang="ts" setup>
  import { useProductStore } from '~/stores/product';

  const { $router, $modal } = useNuxtApp();
  const productStore = useProductStore();

  const totalProductsInCart = computed(() => productStore.cart.length);

  const openModal = () => {
    $modal.open({
      title: 'My Cart',
      component: 'CartViewModal'
    })
  }

</script>
