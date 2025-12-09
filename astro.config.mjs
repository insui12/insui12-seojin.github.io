// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://insui12.github.io/insui12-seojin.github.io/",
  vite: {
    plugins: [tailwindcss()],
  },
});

