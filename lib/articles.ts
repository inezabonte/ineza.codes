import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { mdxSchema } from "@utils/schema/mdx.schema";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export function getAllFilesFrontMatter(dir: string) {
  //fetch all files in the directory
  const files = fs.readdirSync(path.join(process.cwd(), "content", dir));
  const allArticlesData = files.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const data = matter(fileContents);
    const parsedData = mdxSchema.parse(data);

    return {
      id,
      ...parsedData.data,
    };
  });

  //sort articles by date
  return allArticlesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllArticleIds() {
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
}
