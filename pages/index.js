import Image from "next/image";
import Layout from "../components/Layout";
import { getGitHubStars, getGitHubContributions } from "../lib/github";
import { getArticlesMeta } from "../lib/articles";
import { convertDate } from "../components/date";
import Link from "next/link";
import { GithubOutlined } from "@ant-design/icons";

export default function index({ starredRepos, contributions, articles }) {
	return (
		<Layout page="Ineza Bonté">
			<main className="space-y-12 px-6 py-10 flex flex-col">
				<section className="flex flex-col justify-center items-center lg:flex-row  lg:justify-between ">
					<div className="mb-10">
						<Image
							priority={true}
							src="/Images/me.jpg"
							width={200}
							height={200}
							alt="A potrait of Ineza Bonté smiling"
						/>
					</div>
					<div className=" md:self-center max-w-lg space-y-4 lg:self-start">
						<p className="font-bold text-2xl">I'm Ineza Bonté,</p>
						<p className="text-lg">
							A Fullstack Developer based in Kigali, Rwanda
							<br />I have a passion for coding and developing Web Applications.
						</p>
						<p className="text-lg">
							You can reach me by email at:{" "}
							<a href="mailto:inezabonte@gmail.com" className="underline">
								inezabonte@gmail.com
							</a>
						</p>
					</div>
				</section>
				<section className="space-y-6 self-center lg:self-start w-full">
					<div className="flex justify-between items-center  border-b-2 pb-4">
						<h2 className="text-3xl dark:text-white font-bold">
							Latest Articles
						</h2>
						<Link href="/blog">
							<a className="text-base bg-gray-200 dark:bg-gray-800 p-2 rounded">
								View More
							</a>
						</Link>
					</div>

					<div className="space-y-4">
						{articles.map((article) => (
							<div className="flex flex-col" key={article.id}>
								<Link href={`/blog/${article.id}`}>
									<a className="text-xl font-bold lg:text-2xl dark:text-gray-200">
										{article.title}
									</a>
								</Link>
								<span className="text-gray-600 dark:text-gray-400 text-base lg:text-lg">
									{convertDate(article.date, "PPP")}
								</span>
							</div>
						))}
					</div>
				</section>
				<section className="space-y-6 self-center lg:self-start w-full flex flex-col">
					<div className="flex justify-between items-center border-b-2 pb-4">
						<h2 className="text-3xl dark:text-white font-bold ">Projects</h2>
						<a
							href="https://github.com/inezabonte?tab=repositories"
							target="_blank"
							rel="noopener noreferrer"
							className="text-base bg-gray-200 dark:bg-gray-800 p-2 rounded"
						>
							View More
						</a>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 self-center gap-4">
						{starredRepos.map((repo) => (
							<div
								key={repo.id}
								className="p-4 border-2 border-gray-200 dark:border-gray-800 rounded space-y-2 max-w-md"
							>
								<div className="flex items-center justify-between">
									<a
										href={repo.homepage}
										target="_blank"
										rel="noopener noreferrer"
										className="text-xl font-bold lg:text-2xl"
									>
										{repo.name}
									</a>
									<a
										href={repo.html_url}
										target="_blank"
										rel="noopener noreferrer"
										className="self-start"
									>
										<GithubOutlined className="text-2xl" />
									</a>
								</div>
								<p className="text-lg text-gray-500 dark:text-gray-400">
									{repo.description}
								</p>
							</div>
						))}
					</div>
				</section>
				<section className="space-y-6 self-center lg:self-start w-full flex flex-col">
					<div className="border-b-2 pb-4">
						<h2 className="text-3xl dark:text-white font-bold ">
							Contributions to OSS
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 self-center  gap-4">
						{contributions.map((repo) => (
							<div
								key={repo.id}
								className="p-4 border-2 border-gray-200 dark:border-gray-800 rounded space-y-2 max-w-md"
							>
								<div className="flex items-center justify-between">
									<h2 className="dark:text-white text-xl font-bold lg:text-2xl">
										{repo.name}
									</h2>
									<a
										href={repo.html_url}
										target="_blank"
										rel="noopener noreferrer"
										className="self-start"
									>
										<GithubOutlined className="text-2xl" />
									</a>
								</div>
								<p className="text-lg text-gray-500 dark:text-gray-400">
									{repo.description}
								</p>
							</div>
						))}
					</div>
				</section>
			</main>
		</Layout>
	);
}

export const getStaticProps = async () => {
	const articles = getArticlesMeta();
	const githubStarred = await getGitHubStars();
	const githubContributions = await getGitHubContributions();

	return {
		props: {
			starredRepos: githubStarred,
			contributions: githubContributions,
			articles: articles.splice(0, 3),
		},
		revalidate: 60,
	};
};
