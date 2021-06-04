import Layout from "../../components/Layout";
import { getAllArticleIds, getArticleData } from "../../lib/articles";
import Head from "next/head";
import { convertDate } from "../../components/date";
import Link from "next/link";
import Header from "../../components/Header";

export default function Article({ articleData }) {
	return (
		<Layout>
			<Head>
				<link
					rel="preload"
					href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
					as="script"
				/>
				<link
					href={`https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css`}
					rel="stylesheet"
				/>
			</Head>
			<Header
				title={articleData.title}
				image={articleData.cover_image}
				description={articleData.description}
			/>
			<article className=" md:m-auto px-8  my-4 md:my-16 max-w-2xl">
				<h2 className="text-4xl font-bold dark:text-gray-100 mb-6">
					{articleData.title}
				</h2>
				<div className="text-xl mb-4">
					<p className="text-gray-500">
						{convertDate(articleData.date, "PPP")}
						{" • "}
						<span className="text-gray-500">{articleData.readTime.text}</span>
					</p>
				</div>
				<div className="mb-8">
					{articleData.tags.map((tag) => (
						<Link href={`/tags/${tag}`} key={tag}>
							<a className="mr-2 bg-gray-300 dark:bg-gray-800 p-2 rounded text-base no-underline">
								{tag}
							</a>
						</Link>
					))}
				</div>

				<div
					className="prose prose-lg dark:prose-dark md:prose-xl"
					dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
				/>
			</article>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = getAllArticleIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const articleData = await getArticleData(params.id);
	return {
		props: {
			articleData,
		},
	};
}
