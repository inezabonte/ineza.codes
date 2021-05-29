import fs from "fs";
import path from "path";
import matter from "gray-matter";
import parsemd from "./parsemd";
import readingTime from "reading-time";

const articlesDirectory = path.join(process.cwd(), "data/articles");

export function getArticlesMeta() {
	const fileNames = fs.readdirSync(articlesDirectory);
	const allArticlesData = fileNames.map((fileName) => {
		const id = fileName.replace(/\.md$/, "");

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
				id: fileName.replace(/\.md$/, ""),
			},
		};
	});
}

export async function getArticleData(id) {
	const fullPath = path.join(articlesDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf-8");

	const { data, content } = matter(fileContents);

	const contentHtml = await parsemd(content);
	const readTime = readingTime(content);

	return {
		id,
		contentHtml,
		readTime,
		...data,
	};
}
