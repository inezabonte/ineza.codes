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
			<article className=" self-center px-6 w-full  md:my-4 max-w-2xl lg:max-w-3xl prose prose-xl dark:prose-dark">
				<div className="border-b-2 border-gray-400">
					<h2>{articleData.title}</h2>
					<div>
						<p>
							{convertDate(articleData.date, "PPP")}
							{" • "}
							<span>{articleData.readTime.text}</span>
						</p>
					</div>
					<div className="mb-8">
						{articleData.tags.map((tag) => (
							<Link href={`/tags/${tag}`} key={tag}>
								<a className="mr-2 bg-gray-300 dark:bg-gray-800 p-2 rounded text-base">
									{tag}
								</a>
							</Link>
						))}
					</div>
				</div>

				<div
					className="w-full"
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
