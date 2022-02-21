<template>
  <div class="flex space-x-4 items-center">
    <div class="mr-6" v-if="authUserStore.isBuyerCurrentRole">
      <a class=" flex space-x-4 items-center" href="#" tabindex="0">
      <span class="block border p-2 text-green rounded hover:text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
      </span>
        <div class="flex items-center">
          <p class="font-semibold text-2xl text-gray-500 mr-4">¢{{user.deposit}}</p>
          <a class="text-xs text-orange underline font-semibold" v-if="user.deposit" @click.prevent="resetDeposit">Reset Deposit</a>
          <a class="text-xs text-orange underline font-semibold" href="#" @click.prevent="openModal" v-else>Deposit</a>
        </div>
      </a>
    </div>
    <div class="dropdown dropdown-hover dropdown-end">
      <a class=" flex space-x-4 items-center" href="#" tabindex="0">
      <span class="block border p-2 text-green rounded hover:text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
      </svg>
      </span>
        <div>
          <p class="font-semibold text-sm text-gray-500">Welcome, <span class="capitalize">{{user.role}}</span></p>
          <p class="text-xs text-gray-400">{{user.email}}</p>
        </div>
      </a>
      <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
        <li><a>My Profile</a></li>
        <li><a @click.prevent="logout">Logout</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useAuthUserStore } from '~/stores/auth-user';

  const { $router, $modal } = useNuxtApp();
  const authUserStore = useAuthUserStore();

  const user = computed(() => authUserStore.user);

  const openModal = () => {
    $modal.open({
      title: 'Deposit Coins',
      component: 'AuthDepositFormModal'
    })
  }

  const resetDeposit = async () => {
    if (confirm("Are you sure you want to reset your coins")) {
      await authUserStore.reset();
    }
  }

  const logout = async () => {
    await authUserStore.logout();
    $router.push('/login')
  }
</script>
