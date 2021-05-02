import { getFeed } from "../lib/rss";
import { format } from "date-fns";
import Layout from "../components/Layout";

export default function Blog({ items }) {
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
					<h2 className="text-3xl font-bold dark:text-white mb-4">In 2021</h2>
					{items['2021'].map((item) => (
						<article key={item.link} className="space-y-2">
							<a
								className="text-xl"
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								{item.title}
							</a>
							<div className="space-x-2 text-white">
								{item.categories.map((category, index) => (
									<span className="p-1 bg-gray-500 rounded" key={index}>
										{category}
									</span>
								))}
							</div>
							<p className="text-lg text-gray-600 dark:text-gray-400">
								{format(new Date(item.isoDate), "PPP")}
							</p>
						</article>
					))}

					<h2 className="text-3xl font-bold dark:text-white mb-4">In 2020</h2>
					{items['2020'].map((item) => (
						<article key={item.link} className="space-y-2">
							<a
								className="text-xl"
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								{item.title}
							</a>
							<div className="space-x-2 text-white">
								{item.categories.map((category, index) => (
									<span className="p-1 bg-gray-500 rounded" key={index}>
										{category}
									</span>
								))}
							</div>
							<p className="text-lg text-gray-600 dark:text-gray-400">
								{format(new Date(item.isoDate), "PPP")}
							</p>
						</article>
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
			items: {
				2020: detailedFeed.items.filter((item) => {
					return item.isoDate.startsWith('2020')
				}),
				2021: detailedFeed.items.filter((item) => {
					return item.isoDate.startsWith('2021')
				}),
			},
		},
		revalidate: 1,
	};
}
