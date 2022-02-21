<template>
  <form>
    <BaseFormInput name="name" label="Name" v-model="formData.name" class="mb-6" />
    <BaseFormInput name="cost" type="number"  label="Cost" v-model="formData.cost" class="mb-6"/>
    <BaseFormInput name="amount_available" type="number" label="Amount Available" v-model="formData.amount_available" class="mb-6" />

    <div class="form-actions">
      <BaseButton class="btn-theme" :loading="isLoading" @click.prevent="save">Save</BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
  import { useProductStore } from '~/stores';

  const productStore = useProductStore();

  const isLoading = computed(() => productStore.isLoading)

  const formData = reactive(productStore.product);

  const save = async () =>  await productStore.save(formData);

</script>
