import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import remarkCodeTitles from "remark-code-titles";
import sanity from "@sanity/astro";

export default defineConfig({
  site: "https://ineza.codes",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    icon(),
    sanity({
      projectId: "70vpo1cx",
      dataset: "production",
      useCdn: false,
      apiVersion: "2023-03-20",
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "aurora-x",
      wrap: true,
    },
    remarkPlugins: [remarkCodeTitles],
  },
});
