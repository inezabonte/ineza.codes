import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectsSection({ starredRepos }) {
	return (
		<section className="space-y-6 self-center lg:self-start w-full flex flex-col">
			<div className="border-b-2 border-gray-300 pb-4">
				<h2 className="text-3xl dark:text-white font-bold ">Projects</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 self-center gap-4 lg:gap-6">
				{starredRepos.map((repo) => (
					<div
						key={repo.id}
						className="p-4 border-2 border-gray-300 dark:border-gray-700 rounded space-y-2 max-w-md"
					>
						<div className="flex justify-between">
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
								<span className="sr-only">Github repo (opens in new tab)</span>
								<FaGithub className="text-2xl" />
							</a>
						</div>
						<p className="text-lg text-gray-700 dark:text-gray-400">
							{repo.description}
						</p>
					</div>
				))}
			</div>
			<div className="flex justify-end">
				<a
					href="https://github.com/inezabonte?tab=repositories"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center font-medium text-lg"
				>
					See all projects <FiExternalLink />
				</a>
			</div>
		</section>
	);
}
