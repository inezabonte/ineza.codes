import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context) {
  const articles = await getCollection("article");
  return rss({
    title: "Ineza Bonté",
    description:
      "Software developer who enjoys contributing to Open Source and sharing knowledge 🚀",
    site: context.site,
    items: articles.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/blog/${post.slug}`,
      pubDate: post.data.date,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      }),
      ...post.data,
    })),
  });
}
