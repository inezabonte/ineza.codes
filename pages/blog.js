import { getFeed } from "../lib/rss";
import { format } from "date-fns";
import Layout from "../components/Layout";

export default function Blog({ items }) {
	const articles = {};
	let years = [];
	let uniqueYear;

	if (items) {
		for (let i = 0; i < items.length; i++) {
			const year = format(new Date(items[i].isoDate), "y");
			years.push(year);
		}

		uniqueYear = [...new Set(years)];

		uniqueYear.map((item) => {
			articles[item] = [];
		});

		for (let i = 0; i < uniqueYear.length; i++) {
			for (let j = 0; j < items.length; j++) {
				if (uniqueYear[i] === format(new Date(items[j].isoDate), "y")) {
					articles[uniqueYear[i]].push(items[j]);
				}
			}
		}
	}

	return (
		<Layout page="Blog | Ineza Bonté">
			<main className="p-10 space-y-4">
				<div>
					<h1 className="text-4xl font-bold dark:text-white mb-4">Blog</h1>
					<p className="text-xl text-gray-600 dark:text-gray-400">
						These are some of the articles I have written so far. I mostly write
						tutorials about different concepts in web development. If you are
						into that, consider reading these below
					</p>
				</div>
				<div className="space-y-8">
					{uniqueYear.map((item) => (
						<div key={item} className="space-y-2">
							<span>{item}</span>
							{articles[item].map((article) => (
								<div key={article.link}>
									<a
										className="text-xl"
										href={article.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										{article.title}
									</a>
									<div className="space-x-2 text-white">
										{article.categories.map((category, index) => (
											<span className="p-1 bg-gray-500 rounded" key={index}>
												{category}
											</span>
										))}
									</div>
									<p className="text-lg text-gray-600 dark:text-gray-400">
										{format(new Date(article.isoDate), "PPP")}
									</p>
								</div>
							))}
						</div>
					))}
				</div>
			</main>
		</Layout>
	);
}

export async function getStaticProps() {
	const detailedFeed = await getFeed();

	return {
		props: {
			items: detailedFeed.items,
		},
		revalidate: 1,
	};
}
