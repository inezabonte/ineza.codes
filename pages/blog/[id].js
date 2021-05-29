import Layout from "../../components/Layout";
import { getAllArticleIds, getArticleData } from "../../lib/articles";
import Head from "next/head";
import { convertDate } from "../../components/date";

export default function Article({ articleData }) {
	return (
		<Layout page={articleData.title}>
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
			<article className="prose prose-lg dark:prose-dark md:m-auto px-8 md:prose-xl my-4 md:my-16 max-w-2xl">
				<h2>{articleData.title}</h2>
				<div className="flex justify-between">
					<span className="text-gray-600">
						{convertDate(articleData.date, "PPP")}
					</span>
					<span className="text-gray-500">{articleData.readTime.text}</span>
				</div>

				<div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
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
