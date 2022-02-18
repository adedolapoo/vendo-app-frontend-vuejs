<template>
  <div id="admin" class="main">
    <AdminHeader />
    <section>
      <nuxt />
    </section>
    <AdminFooter />
  </div>
</template>

<script>
  export default {
    middleware: ['auth']
  }
</script>

<script setup>
  usePageMeta('Account')
</script>
