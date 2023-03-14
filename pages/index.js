import Layout from "components/Layout";
import { getGitHubStars, getGitHubContributions } from "lib/github";
import { getAllFilesFrontMatter } from "lib/articles";
import Header from "components/Header";
import generateRssFeed from "lib/rss";
import IntroSection from "components/IntroSection";
import LatestArticles from "components/LatestArticles";
import ProjectsSection from "components/ProjectsSection";
import OssContributions from "components/OssContributions";

export default function index({ starredRepos, contributions, articles }) {
  return (
    <Layout>
      <Header title="Ineza Bonté" />
      <main className="space-y-16 px-6 py-10 flex flex-col self-center">
        <IntroSection />
        <LatestArticles articles={articles} />
        <ProjectsSection starredRepos={starredRepos} />
        <OssContributions contributions={contributions} />
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
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
};
