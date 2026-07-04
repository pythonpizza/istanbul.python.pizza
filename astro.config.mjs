import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import deleteUnusedImages from "astro-delete-unused-images";
import compress from "astro-compress";

export default defineConfig({
  site: "https://istanbul.python.pizza",
  redirects: {
    "/about": "/#about",
    "/schedule": "/#schedule",
    "/sponsors": "/#sponsors",
    "/compact": "/compact-schedule",
    "/program": "/#schedule",
    "/organizers": "/#organizers",
    "/cfp": "/#cfp",
    "/venue": "/#venue",
    "/coc": "/#coc",
    "/terms": "/terms-of-service",
    "/privacy": "/privacy-policy",
  },
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
  integrations: [
    mdx(),
    sitemap(),
    deleteUnusedImages(),
    compress({
      // csso is disabled because it breaks some new tailwind features
      CSS: { csso: false, lightningcss: {} },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
