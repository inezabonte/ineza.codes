import Image from "next/image";
import Layout from "../components/Layout";
import { getFeed } from "../lib/rss";
import { format } from "date-fns";

export default function index({ feed }) {
	return (
		<Layout page="Ineza Bonté">
			<main className="space-y-8 px-6 py-10 ">
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
							I'm a Fullstack Developer based in Kigali, Rwanda 🇷🇼
							<br />I have a passion for coding and developing Web Applications.
						</p>
						<p className="text-lg">
							📩 You can contact me by email at:{" "}
							<a href="mailto:inezabonte@gmail.com" className="underline">
								inezabonte@gmail.com
							</a>
						</p>
					</div>
				</section>
				<section className="space-y-4">
					<h2 className="text-3xl dark:text-white font-bold">
						Latest Articles
					</h2>
					<div className="space-y-2">
						{feed.map((article) => (
							<div className="flex flex-col">
								<a
									className="text-lg md:text-2xl dark:text-gray-200"
									href={article.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									{article.title}
								</a>
								<span className="text-gray-600 dark:text-gray-400 text-lg">
									{format(new Date(article.isoDate), "PPP")}
								</span>
							</div>
						))}
					</div>
				</section>
			</main>
		</Layout>
	);
}

export const getStaticProps = async () => {
	const feed = await getFeed();

	return {
		props: {
			feed: feed.items.splice(0, 3),
		},
		revalidate: 1,
	};
};
