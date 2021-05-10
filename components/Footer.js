import {
	GithubOutlined,
	TwitterOutlined,
	LinkedinFilled,
} from "@ant-design/icons";

const ExternalLink = ({ children, link }) => (
	<a target="_blank" rel="noopener noreferrer" href={link}>
		{children}
	</a>
);

export default function Footer() {
	return (
		<footer className="px-10 py-5 mt-auto flex justify-center">
			<div className="space-x-4 text-gray-500">
				<ExternalLink link="https://github.com/inezabonte">
					<GithubOutlined className="text-2xl" />
				</ExternalLink>
				<ExternalLink link="https://twitter.com/inezabonte">
					<TwitterOutlined className="text-2xl" />
				</ExternalLink>
				<ExternalLink link="https://www.linkedin.com/in/inezabonte/">
					<LinkedinFilled className="text-2xl" />
				</ExternalLink>
			</div>
		</footer>
	);
}
