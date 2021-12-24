import Layout from "../../components/Layout";
import { getAllArticleIds } from "../../lib/articles";
import Head from "next/head";
import { convertDate } from "../../components/date";
import Link from "next/link";
import Header from "../../components/Header";
import { MDXRemote } from "next-mdx-remote";
import { parseMDXContent } from "../../lib/parseMdxContent";

export default function Article({ frontMatter, readTime, mdxSource }) {
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
				title={frontMatter.title}
				image={frontMatter.cover_image}
				description={frontMatter.description}
			/>
			<article className=" self-center px-6 w-full  md:my-4 max-w-2xl lg:max-w-3xl prose prose-xl dark:prose-dark">
				<div className="border-b-2 border-gray-400">
					<h2>{frontMatter.title}</h2>
					<div>
						<p>
							{convertDate(frontMatter.date, "PPP")}
							{" • "}
							<span>{readTime.text}</span>
						</p>
					</div>
					<div className="mb-8 not-prose text-black dark:text-white">
						{frontMatter.tags.map((tag) => (
							<Link href={`/tags/${tag}`} key={tag}>
								<a className="mr-2 bg-gray-300 dark:bg-gray-800 p-2 rounded text-base">
									{tag}
								</a>
							</Link>
						))}
					</div>
				</div>

				<div className="w-full">
					<MDXRemote {...mdxSource} />
				</div>
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
	const articleData = await parseMDXContent(params.id, "content/articles");
	return {
		props: {
			...articleData,
		},
	};
}
