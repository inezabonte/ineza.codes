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
		<header className="p-10 grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 gap-y-4">
			<Link href="/">
				<a className="font-bold text-2xl">
					<h1 className="dark:text-white">Ineza Bonté</h1>
				</a>
			</Link>

			<div className="space-x-4 flex justify-center justify-self-end lg:order-1">
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
			<div className="space-x-5 text-2xl col-span-2 justify-self-center lg:col-span-1">
				<Link href="/about">
					<a>About</a>
				</Link>
				<Link href="/blog">
					<a>Blog</a>
				</Link>
			</div>
		</header>
	);
}
