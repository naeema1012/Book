// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtPage } from "nuxt/schema";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Naeema's Book world",
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: true,
    },
  ],

  hooks: {
    "pages:extend"(pages) {
      function setMiddleware(pages: any) {
        for (const page of pages) {
          if (page.path === "/about") {
            page.meta ||= {};
            page.meta.middleware = ["named"];
          }
        }
      }
      setMiddleware(pages);
    },
  },

  imports: {
    dirs: ["composable", "composable/**", ".store"],
    autoImport: true,
  },
  plugins: ["~/plugins/typescript"],

  css: ["~/assets/css/tailwind.css"],

  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
  ],
  features: { devLogs: false },
  pinia: {
    storesDirs: ["store"],
  },

  tailwindcss: {
    exposeConfig: true,
  },
});
