import Layout from "../components/Layout";
import Header from "../components/Header";
import { parseMDXContent } from "../lib/parseMdxContent";
import { MDXRemote } from "next-mdx-remote";

export default function now({ frontMatter, mdxSource }) {
	return (
		<Layout>
			<Header title="Now | Ineza Bonté" description={frontMatter.description} />
			<article className="self-center px-6 prose dark:prose-dark prose-lg  md:my-4 max-w-2xl lg:max-w-3xl">
				<h1>{frontMatter.title}</h1>
				<div className="w-full">
					<MDXRemote {...mdxSource} />
				</div>
			</article>
		</Layout>
	);
}

export async function getStaticProps() {
	const pageData = await parseMDXContent("now", "content/pages");
	return {
		props: {
			...pageData,
		},
	};
}
