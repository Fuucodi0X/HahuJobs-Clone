// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  // devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss:{
    config:{
      darkMode: 'selector',
      theme:{
        extend:{
          colors:{
            'primary': '#009688',
            'primary-text': '#444F60',
            'primary-light': '#80CBC4',
            'secondary': '#F1F1F1',
            'secondary-text': '#8C939D',
            'secondary-dark': '#D1D5DB',
            'dark-primary': '#02201D',
            'dark-secondary' : '#1B2637',
            'dark-text' : '#C7CACF',
          }
        }
      }
    },
  }
})