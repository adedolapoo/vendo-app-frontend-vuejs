<template>
  <div class="bg-[#f5f5f5] px-4">
    <div class="max-w-7xl mx-auto py-5 flex justify-between items-center">
      <div>
        <h2 class="text-2xl font-bold mb-1">{{title}}</h2>
        <ul class="inline-flex items-center space-x-1 md:space-x-2 text-blue text-gray-500 font-medium text-sm">
          <li class="flex items-center"><a href="#" class="hover:text-gray-900">Home</a></li>
          <li class="flex items-center"><i class="ri-arrow-right-s-line"></i></li>
          <li class="flex items-center text-gray-400">{{title}}</li>
        </ul>
      </div>
      <div>
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from '#imports'
  import { useAuthUserStore } from '~/stores'
  import usePageMeta from '~/composables/usePageMeta'

  const props = defineProps({
    title: { String }
  })

  usePageMeta(props.title)

  const authUserStore = useAuthUserStore()

</script>
