// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxtron',
      link: [
        {
          rel: 'icon', type: 'image/png', href: '/logo.svg',
        },
      ],
    },
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  modules: [
    '@unocss/nuxt',
  ],
  vite: {
    build: {
      minify: false,
      rollupOptions: {
        external: ['electron'],
      },
    },
  },
  nitro: {
    externals: {
      external: ['electron'],
    },
  },
})
