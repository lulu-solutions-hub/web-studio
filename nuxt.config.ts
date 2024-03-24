// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import path from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },

  plugins: [
    '~/plugins/directives',
  ],

  app: {
    head: {
      title: 'LuLu Web studio',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1,viewport-fit=true'
        },
      ],
    },
  },

  site: {
    url: "https://lulu-development.netlify.app/"
  },

  css: [
    "@/assets/main.css",
    "@/assets/main.scss",
    '@mdi/font/css/materialdesignicons.min.css',
    'vuetify/lib/styles/main.sass',
  ],

  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    'nuxt-anchorscroll',
    'nuxt-gtag',
    '@nuxtjs/sitemap'
  ],

  gtag: {
    id: 'G-G4RPL0YYY6',
    config: {
      page_title: 'Lulu Web Studio'
    },
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    define: {
      'process.env.DEBUG': false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/colors.scss" as *;'
        }
      }
    },
  },
  devServer: {
    host: 'localhost',
    port: 3000
  },

  nitro: {
    compressPublicAssets: true,
    output: {
      publicDir: path.join(__dirname, 'dist')
    },
    prerender: {
      crawlLinks: true
    },
    routeRules: {
      '/': { prerender: true },
      '/trade/**': { ssr: true },
      '/old-trade/**': { ssr: true }
    }
  },
  ssr: false,

  runtimeConfig: {
    public: {
      telegramSecretApi: '6846175338:AAEyv8r6hjgJQkNRuiqCvaOui_EI-jbLXiw',
      chatId: '-1002026815522',
      topicId: '24'
    }
  }
});
