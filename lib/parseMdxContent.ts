import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypeCodeTitles from "rehype-code-titles";
import readingTime from "reading-time";
import rehypePrism from "@mapbox/rehype-prism";
import { mdxSchema } from "@utils/schema/mdx.schema";

export async function parseMDXContent(id: string, fileDirectory: string) {
  const dir = path.join(process.cwd(), fileDirectory);
  const fullPath = path.join(dir, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const mdxContent = matter(fileContents);
  const { content, data } = mdxSchema.parse(mdxContent);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeCodeTitles, rehypePrism],
    },
    scope: data,
  });

  const readTime = readingTime(content);

  return {
    id,
    mdxSource,
    readTime,
    frontMatter: data,
  };
}
