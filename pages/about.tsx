import Layout from "@components/Layout";
import Header from "@components/Header";
import { parseMDXContent } from "@lib/parseMdxContent";
import { MDXRemote } from "next-mdx-remote";

export default function About({ mdxSource }) {
  return (
    <Layout>
      <Header title="About | Ineza Bonté" />
      <main className=" self-center p-6">
        <h1 className="text-4xl font-bold dark:text-white mb-4">About Me</h1>
        <article className="prose prose-xl dark:prose-dark max-w-2xl">
          <MDXRemote {...mdxSource} />
        </article>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const pageData = await parseMDXContent("about", "content/pages");
  return {
    props: {
      ...pageData,
    },
  };
}
