import { getFeed } from "../../lib/rss";
import Layout from "../../components/Layout";
import { format } from "date-fns";

export const getStaticPaths = async () => {
	const detailedFeed = await getFeed();

	let paths = [];
	detailedFeed.items.map((article) => {
		article.categories.map((category) => {
			return paths.push({
				params: { id: category },
			});
		});
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const detailedFeed = await getFeed();
	const articles = detailedFeed.items.filter((item) =>
		item.categories.includes(id)
	);

	return {
		props: {
			articles,
			id,
		},
		revalidate: 1,
	};
};

export default function Tag({ articles, id }) {
	return (
		<Layout>
			<main className="mb-auto p-6 space-y-4 prose prose-lg dark:prose-dark md:prose-xl">
				<h2>
					Posts tagged: <span className="text-blue-400">{`#${id}`}</span>
				</h2>
				<div className="space-y-4">
					<h3>
						{articles.length} post{articles.length > 1 ? "s" : ""} found
					</h3>

					<div className=" space-y-6">
						{articles.map((item) => (
							<div className="flex flex-col" key={item.link}>
								<a
									className="text-lg md:text-2xl"
									href={item.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									{item.title}
								</a>{" "}
								<span className="text-gray-600 dark:text-gray-400 text-lg">
									{format(new Date(item.isoDate), "PPP")}
								</span>
							</div>
						))}
					</div>
				</div>
			</main>
		</Layout>
	);
}
