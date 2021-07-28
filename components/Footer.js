import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const ExternalLink = ({ children, link, aria }) => (
	<a
		target="_blank"
		rel="noopener noreferrer"
		className="underline"
		href={link}
		aria-label={aria}
	>
		{children}
	</a>
);

export default function Footer() {
	return (
		<footer className="py-5 mt-auto flex flex-col items-center space-y-4 text-gray-700 dark:text-gray-300 text-sm">
			<div className="flex flex-col space-y-4 items-center">
				<div className="space-x-4 flex">
					<ExternalLink
						link="https://github.com/inezabonte"
						aria="GitHub (opens in a new tab)"
					>
						<FaGithub className="text-2xl" />
					</ExternalLink>
					<ExternalLink
						link="https://twitter.com/inezabonte"
						aria="Twitter (opens in a new tab)"
					>
						<FaTwitter className="text-2xl" />
					</ExternalLink>
					<ExternalLink
						link="https://www.linkedin.com/in/inezabonte/"
						aria="LinkedIn (opens in a new tab)"
					>
						<FaLinkedin className="text-2xl" />
					</ExternalLink>
				</div>
				<div>
					<Link href="/rss/feed.xml">
						<a>RSS</a>
					</Link>
				</div>
			</div>
			<div>
				<p>
					Made with{" "}
					<ExternalLink link="https://nextjs.org/">Next.js</ExternalLink>,
					Deployed on{" "}
					<ExternalLink link="https://vercel.com/">Vercel</ExternalLink>▲
				</p>
			</div>
		</footer>
	);
}
