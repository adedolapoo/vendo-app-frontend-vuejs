<template>
  <form>
    <div class="form-control" v-for="(coin,index) in coinsArray">
      <label class="cursor-pointer label justify-start">
        <input type="radio" name="radio-6" class="radio bg-[#eff2f5]  checked:bg-green mr-6" :value="coin" v-model="formData.deposit">
        <span class="label-text font-semibold text-lg">¢{{coin}}</span>
      </label>
    </div>
    <div class="form-actions">
      <BaseButton class="btn-theme" :loading="isLoading" @click.prevent="deposit">Deposit</BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
  import { useAuthUserStore } from '~/stores/auth-user';

  const { $router,$modal } = useNuxtApp();
  const authUserStore = useAuthUserStore();
  const isLoading = computed(() => authUserStore.isLoading)
  const formData = reactive({
    deposit : 5
  });
  const coinsArray = [5,10,20,50,100]

  const deposit = async () => {
    await authUserStore.deposit(formData);
    $modal.close();
  };
</script>
