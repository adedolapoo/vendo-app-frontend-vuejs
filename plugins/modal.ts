import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(({ provide, $bus }) => {
  const modal = {
    open: (options) => {
      $bus.$emit('modal', { ...options, open: true });
    },
    close: (options) => {
      $bus.$emit('modal', { ...options, open: false });
    }
  };
  provide('modal',modal);
})
