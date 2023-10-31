import type { GetStaticProps } from "next";
import Layout from "@components/Layout";
import { getGitHubStars, getGitHubContributions } from "@lib/github";
import { getAllFilesFrontMatter } from "@lib/articles";
import Header from "@components/Header";
import generateRssFeed from "lib/rss";
import IntroSection from "@components/IntroSection";
import LatestArticles from "@components/LatestArticles";

export default function Home({ articles }) {
  return (
    <Layout>
      <Header title="Ineza Bonté" />
      <main className="space-y-16 px-6 py-10 flex flex-col self-center w-full">
        <IntroSection />
        <LatestArticles articles={articles} />
      </main>
    </Layout>
  );
}

export const getStaticProps = (async () => {
  const articles = getAllFilesFrontMatter("articles");
  const githubStarred = await getGitHubStars();
  const githubContributions = await getGitHubContributions();
  await generateRssFeed();

  return {
    props: {
      starredRepos: githubStarred,
      contributions: githubContributions,
      articles: articles.splice(0, 3),
    },
    revalidate: 1,
  };
}) satisfies GetStaticProps;
