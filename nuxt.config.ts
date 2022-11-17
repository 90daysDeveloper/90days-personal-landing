// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public:{
      apiBase: process.env.API_BASE,
    bearerDirectus: process.env.BEARER_DIRECTUS
    },
    
  }
//   css: [
//     '~assets/css/main.css'
//   ],


// buildModules: [
//     '@nuxtjs/style-resources'
//   ],

})
