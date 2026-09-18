// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import { fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://alwexis.is-a.dev",
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-sans",
    },
  ],
});
