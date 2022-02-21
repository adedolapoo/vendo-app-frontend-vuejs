<template>
  <div>
    <div v-if="productStore.cart.length" class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden sm:rounded-lg">
            <table class="min-w-full">
              <thead class="bg-gray-50">
              <tr>
                <th></th>
                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
                  Name
                </th>
                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
                  price
                </th>
                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
                  Available Quantity
                </th>
                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
                  quantity
                </th>
              </tr>
              </thead>
              <tbody>

              <tr class="bg-white border-b" v-for="product in productStore.cart">
                <td>
                  <a href="#" class="text-orange" @click.prevent="removeFromCart(product)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </a>
                </td>
                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                  {{product.name}}
                </td>
                <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                  {{product.cost}}
                </td>
                <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                  {{product.amount_available}}
                </td>
                <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                  <BaseFormInput v-model="product.quantity" min="1" :max="product.amount_available" type="number"
                                 value="1"/>
                </td>
              </tr>
              <tr class="bg-white border-b">
                <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap text-right" colspan="4">
                  <span>TOTAL</span>
                </td>
                <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                  <span class="font-semibold text-lg">¢{{productStore.cartTotal}}</span>
                </td>
              </tr>
              </tbody>
            </table>
            <div class="form-actions">
              <BaseButton class="btn-theme" :loading="isLoading" @click.prevent="buy">Buy</BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="alert shadow-lg alert-error">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
               viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span>Cart is empty</span>
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

  const buy = async () => {
    const data = await productStore.buy()
  }

  const removeFromCart = async (product : any) => {
    const data = await productStore.removeFromCart(product)
  }

</script>
