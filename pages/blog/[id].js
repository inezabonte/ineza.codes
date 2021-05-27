import Layout from "../../components/Layout";
import { getAllArticleIds, getArticleData } from "../../lib/articles";

export default function Article() {
	return (
		<Layout>
			<article></article>
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
	const artcleData = await getArticleData(params.id);
	return {
		props: {
			artcleData,
		},
	};
}
