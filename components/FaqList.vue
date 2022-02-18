<template>
  <div>
    <Accordion
      class="mb-6"
      v-for="(faq,index) in faqs"
      :key="index"
      :is-open="(index == 0) ? true : false"
    >
      <template #title>
        <span class="font-semibold text-xl">{{faq.title}}</span>
      </template>
      <template #content>
        <p class="text-lg text-gray-400 mt-6">
          {{faq.content}}
        </p>
      </template>
    </Accordion>
  </div>
</template>

<script setup>
const faqs = [
    {
      title: 'How can i get my attestation certificate online?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
      title: 'Why do i need attestation certificate',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
      title: 'How can i get my attestation certificate online?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
      title: 'What documents do i need to get attestation online',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    }
  ]
</script>