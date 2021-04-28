import Parser from "rss-parser";

export async function getFeed(feedUrl) {
	const parser = new Parser();
	const feed = await parser.parseURL("https://dev.to/feed/inezabonte");

	return feed;
}
