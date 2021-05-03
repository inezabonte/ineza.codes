import { GithubOutlined, TwitterOutlined } from "@ant-design/icons";

export default function Footer() {
	return (
		<footer className="h-10 p-10 flex items-center">
			<div className="space-x-4 text-gray-500">
				<a
					target="_blank"
					href="https://github.com/inezabonte"
					rel="noopener noreferrer"
				>
					<GithubOutlined className="text-xl" />
				</a>
				<a
					target="_blank"
					href="https://twitter.com/inezabonte"
					rel="noopener noreferrer"
				>
					<TwitterOutlined className="text-xl" />
				</a>
			</div>
		</footer>
	);
}
