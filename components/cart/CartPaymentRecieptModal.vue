<template>
  <div v-if="productStore.payment">
    <div class="alert shadow-lg alert-success mb-6">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Your payment was successful, see receipt below</span>
      </div>
    </div>

    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden sm:rounded-lg">
            <table class="min-w-full">
              <tbody>
              <tr class="bg-white border-b last:border-0">
                <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap " colspan="3">
                  <span>Products</span>
                </td>
                <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                  <p class="font-semibold" v-for="product in productStore.payment.products">
                    {{product.name}} * {{product.quantity}}
                  </p>
                </td>
              </tr>
              <tr class="bg-white border-b last:border-0">
                <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap" colspan="3">
                  <span>Deposit</span>
                </td>
                <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                  <span class="font-semibold">¢{{productStore.payment.deposit}}</span>
                </td>
              </tr>
              <tr class="bg-white border-b last:border-0">
                <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap" colspan="3">
                  <span>Total</span>
                </td>
                <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                  <span class="font-semibold">¢{{productStore.payment.total_amount}}</span>
                </td>
              </tr>
              <tr class="bg-white border-b last:border-0">
                <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap" colspan="3">
                  <span>Change</span>
                </td>
                <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                  <div class="font-semibold" v-for="change in productStore.payment.change">
                    ¢{{change}}
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useProductStore } from '~/stores/product'

  const { $router, $modal } = useNuxtApp()
  const productStore = useProductStore();
  const data = reactive([])

  const products = reactive(productStore.cart)
  const isLoading = computed(() => productStore.isLoading)

</script>
