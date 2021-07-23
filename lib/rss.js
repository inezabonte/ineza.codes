import { Feed } from "feed";
import { getAllFilesFrontMatter } from "./articles";
import fs from "fs";

export default async function generateRssFeed() {
	if (process.env.NODE_ENV === "development") {
		return;
	}

	const baseUrl = "https://ineza.codes";
	const date = new Date();

	const author = {
		name: "Ineza Bonté",
		email: "inezabonte@gmail.com",
		link: "https://twitter.com/inezabonte",
	};

	const feed = new Feed({
		title: "Ineza's Blog",
		description:
			"I write articles about concepts I've learnt in Software Development. These are the articles I've written so far.",
		id: baseUrl,
		language: "en",
		image: `https://res.cloudinary.com/tizzertuna/image/upload/v1622809072/Articles/Custom_Size_1_2x_qgdmz9.png`,
		favicon: `${baseUrl}favicon.ico`,
		updated: date,
		generator: "Next.js using Feed for Node.js",
		feedLinks: {
			rss2: `${baseUrl}/rss/feed.xml`,
		},
		author,
	});

	const articles = getAllFilesFrontMatter("articles");
	articles.forEach((article) => {
		const url = `${baseUrl}/blog/${article.id}`;

		feed.addItem({
			title: article.title,
			id: article.id,
			link: url,
			description: article.description,
			author: [author],
			contributor: [author],
			date: new Date(article.date),
		});
	});

	fs.mkdirSync("./public/rss", { recursive: true });
	fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
}
