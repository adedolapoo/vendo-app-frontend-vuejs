import { useNuxtApp } from '#app';
import { NuxtApp } from '@nuxt/types/app'

/**
 * Handle exception
 */
export default function(e:any,nuxtApp: NuxtApp){
  let msg = 'An error occurred'
  console.log(e);
  if (e.response?.status === 401) msg = e.response?.message;
  nuxtApp.$toast.error(msg);
}

