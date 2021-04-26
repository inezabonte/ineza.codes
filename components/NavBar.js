import { GithubOutlined, TwitterOutlined } from "@ant-design/icons";

export default function NavBar() {
	return (
		<header className="h-16 lg:max-w-6xl px-10 lg:m-auto flex items-center justify-between ">
			<div>
				<p className="font-bold text-xl">Ineza Bonté</p>
			</div>
			<div className="space-x-4">
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
		</header>
	);
}
