import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["./app/assets/css/tailwind.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["shadcn-nuxt"],

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./app/components/ui",
  },
  future: {
    compatibilityVersion: 4,
  },
  build: {
    transpile: ["trpc-nuxt"],
  },

  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      htmlAttrs: {
        lang: "es-CL",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/icon.svg",
        },
      ],
    },
  },
});
