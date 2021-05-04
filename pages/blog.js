import { getFeed } from "../lib/rss";
import { format } from "date-fns";
import Layout from "../components/Layout";

export default function Blog({ items }) {
	let years = [];
	let uniqueYear;

	if (items) {
		for (let i = 0; i < items.length; i++) {
			const year = format(new Date(items[i].isoDate), "y");
			years.push(year);
		}
		uniqueYear = [...new Set(years)];
	}

	return (
		<Layout page="Blog | Ineza Bonté">
			<main className="p-6 space-y-8">
				<div>
					<h1 className="text-4xl font-bold dark:text-white mb-4">Blog</h1>
					<p className="text-xl text-gray-600 dark:text-gray-400">
						I publish articles on DEV about concepts I've learnt in Software
						Development. These are the articles I've written so far.
					</p>
				</div>
				<div className="space-y-8">
					{uniqueYear.map((year) => (
						<div key={year} className="space-y-8">
							<h2 className="text-2xl font-bold dark:text-white border-gray-500 border-opacity-50 border-b-4">
								{year}
							</h2>

							{items
								.filter((item) => item.isoDate.startsWith(year))
								.map((article) => (
									<div key={article.link} className="grid grid-cols-5">
										<span className="text-sm md:text-base text-gray-600 dark:text-gray-400 mr-4 self-center">
											{format(new Date(article.isoDate), "LLL dd")}
										</span>
										<div className="col-span-4">
											<a
												className="text-base md:text-lg"
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
										</div>
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
