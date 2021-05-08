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
	};
};

export default function Tag({ articles, id }) {
	return (
		<Layout>
			<main className="mb-auto p-6 space-y-4">
				<h1 className="dark:text-white text-2xl">Posts tagged: #{id}</h1>
				<div className="space-y-4">
					<h2 className="text-xl dark:text-white">
						{articles.length} post{articles.length > 1 ? "s" : ""} found
					</h2>

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
