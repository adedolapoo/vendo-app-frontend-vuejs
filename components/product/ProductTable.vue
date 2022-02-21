<template>
  <div class="card">
    <div class="card-body p-0">
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block  min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden sm:rounded-lg">
              <table class="min-w-full">
                <thead class="bg-gray-50">
                <tr>
                  <th scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
                    Name
                  </th>
                  <th scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
                    price
                  </th>
                  <th scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
                    Available Quantity
                  </th>
                  <th scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
                  </th>
                </tr>
                </thead>
                <tbody>

                <tr class="border-b last:border-0" v-for="product in products">
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
                    <a href="#" class="btn btn-theme btn-sm" @click.prevent="editProduct(product)">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </a>
                    <a href="#" class="btn btn-error btn-sm" @click.prevent="deleteProduct(product)">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useProductStore } from '~/stores/product'

  const productStore = useProductStore();
  const { $modal } = useNuxtApp();
  const products = computed(() => productStore.products);

  const editProduct = async (product : any) => {
    //save product to product store
    productStore.setProduct(product);

    $modal.open({
      title: 'Edit Product',
      component: 'ProductFormModal'
    })
  };

  const deleteProduct = async (product : any) => {
    //save product to product store
    productStore.setProduct(product);

    if (confirm("Are you sure you want to delete product")) {
      await productStore.delete();
    }
  };

</script>
