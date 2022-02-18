import { useNuxt2Meta, useRuntimeConfig } from '#app';

export default function(title = null){
  const config = useRuntimeConfig();

  useNuxt2Meta({
    title: `${title} | ${config.appTitle}`
  })
}

