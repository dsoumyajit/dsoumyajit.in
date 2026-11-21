export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  devtools: { enabled: false },
  typescript: {
    strict: true,
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Soumyajit Das — Mission Control',
      meta: [
        {
          name: 'description',
          content: 'Product Engineer — C#/.NET, Vue.js, Ad-Tech Platforms.',
        },
      ],
    },
  },
})
