import Layout from "../../components/Layout";
import { getArticlesMeta } from "../../lib/articles";
import Link from "next/link";
import { convertDate } from "../../components/date";
import Header from "../../components/Header";

export const getStaticPaths = async () => {
	const articlesMeta = getArticlesMeta();

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
	const articlesMeta = getArticlesMeta();
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
			<main className="mb-auto p-6 space-y-4 prose prose-lg dark:prose-dark md:prose-2xl">
				<h2>
					Posts tagged: <span className="text-blue-400">{`#${id}`}</span>
				</h2>
				<div className="space-y-4">
					<h3>
						{articles.length} post{articles.length > 1 ? "s" : ""} found
					</h3>

					<div className=" space-y-6">
						{articles.map((item) => (
							<div className="flex flex-col" key={item.id}>
								<Link href={`/blog/${item.id}`}>
									<a className=" no-underline">{item.title}</a>
								</Link>
								<span className="text-base">
									{convertDate(item.date, "PPP")}
								</span>
							</div>
						))}
					</div>
				</div>
			</main>
		</Layout>
	);
}
