// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
      app: {
        head: {
          title: 'Registration System',
          meta: [
            { name: 'description', content: 'type hereee'}
          ],
          link: [
            { rel:'preconnect', href:'https://fonts.googleapis.com' }
          ]
        }
      }
  })
