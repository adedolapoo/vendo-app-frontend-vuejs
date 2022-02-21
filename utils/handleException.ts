import { useNuxtApp } from '#app';
import { NuxtApp } from '@nuxt/types/app'

/**
 * Handle exception
 */
export default function(e:any,nuxtApp: NuxtApp){
  let msg = 'An error occurred';
  //if(e instanceof Error) msg = e.message;
  if (!e.response?.data?.success) msg = e.response?.data?.message;
  nuxtApp.$toast.error(msg);
}

