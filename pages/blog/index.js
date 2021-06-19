import { convertDate } from "../../components/date";
import Layout from "../../components/Layout";
import Link from "next/link";
import { getArticlesMeta } from "../../lib/articles";
import Header from "../../components/Header";

export default function Blog({ articles }) {
	let years = [];
	let uniqueYear;
	if (articles) {
		for (let i = 0; i < articles.length; i++) {
			const year = convertDate(articles[i].date, "y");
			years.push(year);
		}
		uniqueYear = [...new Set(years)];
	}

	return (
		<Layout>
			<Header title="Blog | Ineza Bonté" />
			<main className="p-6 space-y-8 self-center">
				<div className="max-w-3xl">
					<h1 className="text-4xl font-bold dark:text-white mb-4">Blog</h1>
					<p className="text-2xl text-gray-600 dark:text-gray-400">
						I write articles about concepts I've learnt in Software Development.
						These are the articles I've written so far.
					</p>
				</div>
				<div className="space-y-8">
					{uniqueYear.map((year) => (
						<div key={year} className="space-y-8">
							<h2 className="text-2xl font-bold dark:text-white border-gray-500 border-opacity-50 border-b-4">
								{year}
							</h2>

							{articles
								.filter((item) => item.date.startsWith(year))
								.map((article) => (
									<div key={article.id} className="grid grid-cols-5">
										<span className="text-sm md:text-lg text-gray-600 dark:text-gray-400 mr-4">
											{convertDate(article.date, "LLL dd")}
										</span>
										<div className="col-span-4 space-y-2">
											<Link href={`/blog/${article.id}`}>
												<a className="text-lg md:text-xl">{article.title}</a>
											</Link>
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
	const articlesMeta = getArticlesMeta();

	return {
		props: {
			articles: articlesMeta,
		},
	};
}
