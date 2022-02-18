<template>
  <div class="" :class="{'has-dropdown is-hoverable':hasDropdown}">
    <NuxtLink :to="url" class="py-3 px-4 mr-4">
      <span class="icon"><i class="lnr" :class="item.icon"></i></span>
      <span>{{item.title}}</span>
    </NuxtLink>
    <template v-if="hasDropdown">
      <div class="navbar-dropdown">
        <AdminNavItem v-for="(child,key) in item.children" :item="child" :key="key"></AdminNavItem>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from '#app'

  const props = defineProps(['item']);

  const hasDropdown = computed(() => props.item.children.length )

  const url = computed(() => {
    if(props.item.url) return '/'+props.item.url;
    return '#';
  })
</script>
