import Link from "next/link";
import { convertDate } from "components/date";

export default function LatestArticles({ articles }) {
	return (
		<section className="space-y-6 self-center lg:self-start w-full">
			<div className="border-b-2 border-gray-300 pb-4">
				<h2 className="text-3xl dark:text-white font-bold">Latest Articles</h2>
			</div>

			<div className="space-y-4">
				{articles.map((article) => (
					<div className="flex flex-col" key={article.id}>
						<Link href={`/blog/${article.id}`} passHref legacyBehavior>
							<a className="text-xl font-bold lg:text-xl dark:text-gray-200">
								{article.title}
							</a>
						</Link>
						<span className="text-gray-700 dark:text-gray-400 text-base lg:text-lg">
							{convertDate(article.date, "PPP")}
						</span>
					</div>
				))}
			</div>
			<div className="flex justify-end">
				<Link href="/blog" passHref legacyBehavior>
					<a className="font-medium text-lg">Read all blog posts → </a>
				</Link>
			</div>
		</section>
	);
}
