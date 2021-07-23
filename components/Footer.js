import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const ExternalLink = ({ children, link }) => (
	<a target="_blank" rel="noopener noreferrer" href={link}>
		{children}
	</a>
);

export default function Footer() {
	return (
		<footer className="items-center px-10 py-5 mt-auto flex flex-col space-y-8 border-t-2 border-gray-300 dark:border-gray-700 mx-6 text-gray-500">
			<div>
				<Link href="/rss/feed.xml">
					<a>RSS</a>
				</Link>
			</div>
			<div className="space-x-4 flex">
				<ExternalLink link="https://github.com/inezabonte">
					<FaGithub className="text-2xl" />
				</ExternalLink>
				<ExternalLink link="https://twitter.com/inezabonte">
					<FaTwitter className="text-2xl" />
				</ExternalLink>
				<ExternalLink link="https://www.linkedin.com/in/inezabonte/">
					<FaLinkedin className="text-2xl" />
				</ExternalLink>
			</div>
		</footer>
	);
}
