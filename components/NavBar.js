import { useState, useEffect } from "react";
import { GithubOutlined, TwitterOutlined } from "@ant-design/icons";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function NavBar() {
	useEffect(() => {
		setIsMounted(true);
	}, []);
	const [isMounted, setIsMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	const switchTheme = () => {
		if (isMounted) {
			setTheme(theme === "light" ? "dark" : "light");
		}
	};

	return (
		<header className="h-16 px-10 lg:max-w-4xl  lg:m-auto flex items-center justify-between">
			<Link href="/">
				<a className="font-bold text-xl">Ineza Bonté</a>
			</Link>
			<div className="space-x-5 text-lg">
				<Link href="/about">
					<a>About</a>
				</Link>
				<Link href="/blog">
					<a>Blog</a>
				</Link>
			</div>
			<div className="space-x-4 flex justify-center ">
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
				<button
					className=" text-2xl focus:outline-none outline-none"
					onClick={switchTheme}
				>
					{theme === "light" ? "🌑" : "☀️"}
				</button>
			</div>
		</header>
	);
}
