import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";
import mdxPrism from "mdx-prism";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export function getArticlesMeta() {
	const fileNames = fs.readdirSync(articlesDirectory);
	const allArticlesData = fileNames.map((fileName) => {
		const id = fileName.replace(/\.mdx$/, "");

		const fullPath = path.join(articlesDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf-8");

		const { data } = matter(fileContents);

		return {
			id,
			...data,
		};
	});

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

export async function getArticleData(id) {
	const fullPath = path.join(articlesDirectory, `${id}.mdx`);
	const fileContents = fs.readFileSync(fullPath, "utf-8");

	const { data, content } = matter(fileContents);
	const mdxSource = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [
				require("remark-code-titles"),
				require("remark-autolink-headings"),
			],
			rehypePlugins: [mdxPrism],
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
