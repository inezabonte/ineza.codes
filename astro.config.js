import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import remarkCodeTitles from "remark-code-titles";

export default defineConfig({
  site: "http://ineza.codes",
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  markdown: {
    shikiConfig: {
      theme: "aurora-x",
      wrap: true,
    },
    remarkPlugins: [remarkCodeTitles],
  },
});
