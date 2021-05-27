import fs from "fs";
import path from "path";
import matter from "gray-matter";
import parsemd from "./parsemd";

const articlesDirectory = path.join(process.cwd(), "data/articles");

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

	return {
		id,
		contentHtml,
		...data,
	};
}
