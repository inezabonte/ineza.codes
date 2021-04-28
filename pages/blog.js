import { getFeed } from "../lib/rss";
import { format } from "date-fns";

export default function Blog({ items }) {
	return (
		<div className="space-y-4">
			{items.map((item) => (
				<div>
					<a
						key={item.link}
						className="block p-4 hover:border-gray-500 "
						href={item.link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="font-bold">{item.title}</div>
					</a>
					<div>{format(new Date(item.isoDate), "PPP")}</div>
				</div>
			))}
		</div>
	);
}

export async function getStaticProps() {
	const detailedFeed = await getFeed();

	return {
		props: {
			items: detailedFeed.items,
		},
	};
}
