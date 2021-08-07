import { FaGithub } from "react-icons/fa";

export default function OssContributions({ contributions }) {
	return (
		<section className="space-y-6 self-center lg:self-start w-full flex flex-col">
			<div className="border-b-2 border-gray-300 pb-4">
				<h2 className="text-3xl dark:text-white font-bold ">
					Open Source contributions
				</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 self-center  gap-4 lg:gap-6">
				{contributions.map((repo) => (
					<div
						key={repo.id}
						className="p-4 border-2 border-gray-300 dark:border-gray-700 rounded space-y-2 max-w-md"
					>
						<div className="flex justify-between">
							<h2 className="dark:text-white text-xl font-bold lg:text-2xl">
								{repo.name}
							</h2>
							<a
								href={repo.html_url}
								target="_blank"
								rel="noopener noreferrer"
								className="self-start"
							>
								<span className="sr-only">GitHub repo (opens in new tab)</span>
								<FaGithub className="text-2xl" />
							</a>
						</div>
						<p className="text-lg text-gray-700 dark:text-gray-400">
							{repo.description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
