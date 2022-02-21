<template>
  <div class="card w-96 shadow-none transition-all hover:bg-gray-100">
    <div class="card-body">
      <h2 class="card-title font-normal">{{product.name}}</h2>
      <div class="justify-between items-center card-actions m-0">
        <p class="font-bold text-lg ">¢{{product.cost}}</p>
        <BaseButton
          @click.prevent="addToCart" class="btn-accent btn-sm bg-green border-green hover:bg-green/80 mr-4">
          Buy
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useProductStore } from '~/stores/product'

  const productStore = useProductStore()

  const props = defineProps([
    'product'
  ])

  const addToCart = () => productStore.addToCart(props.product)
</script>
