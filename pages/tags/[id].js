import Layout from "../../components/Layout";
import { getAllFilesFrontMatter } from "../../lib/articles";
import Link from "next/link";
import { convertDate } from "../../components/date";
import Header from "../../components/Header";

export const getStaticPaths = async () => {
	const articlesMeta = getAllFilesFrontMatter("articles");

	let paths = [];
	articlesMeta.map((article) => {
		article.tags.map((category) => {
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
	const articlesMeta = getAllFilesFrontMatter("articles");
	const articles = articlesMeta.filter((item) => item.tags.includes(id));

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
			<Header title={`Tag | ${id}`} />
			<main className="mb-auto p-6 space-y-4">
				<div className="flex flex-col">
					<span className="text-xl font-semibold">
						Posts tagged: <span className="text-blue-400">{`#${id}`}</span>
					</span>
					<span className="font-light">
						{articles.length} post{articles.length > 1 ? "s" : ""} found
					</span>
				</div>

				<div className="space-y-6 max-w-xl">
					{articles.map((item) => (
						<div className="flex flex-col" key={item.id}>
							<Link href={`/blog/${item.id}`} passHref>
								<a className="font-semibold text-lg">{item.title}</a>
							</Link>
							<span className="font-light">{item.description}</span>
						</div>
					))}
				</div>
			</main>
		</Layout>
	);
}
