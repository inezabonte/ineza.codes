import Parser from "rss-parser";

export function getFeed() {
	const parser = new Parser();
	return parser.parseURL("https://dev.to/feed/inezabonte");
}
