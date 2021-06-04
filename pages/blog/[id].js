import Layout from "../../components/Layout";
import { getAllArticleIds, getArticleData } from "../../lib/articles";
import Head from "next/head";
import { convertDate } from "../../components/date";
import Link from "next/link";

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
				<meta property="og:title" content={articleData.title} />
				<meta property="og:image" content={articleData.cover_image} />
				<meta property="og:description" content={articleData.description} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta name="twitter:creator" content="@inezabonte" />
				<meta name="twitter:site" content="@inezabonte" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={articleData.title} />
				<meta name="twitter:image" content={articleData.cover_image} />
				<meta name="twitter:image:alt" content={articleData.title} />
				<meta name="twitter:description" content={articleData.description} />
			</Head>
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
						<Link href={`/tags/${tag}`}>
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
