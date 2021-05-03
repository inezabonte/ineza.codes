import { useState, useEffect } from "react";
import { GithubOutlined, TwitterOutlined } from "@ant-design/icons";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function NavBar() {
	useEffect(() => setMounted(true), []);

	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	const switchTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<header className="p-10 grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 gap-y-4">
			<Link href="/">
				<a className="font-bold text-2xl">
					<h1 className="dark:text-white">Ineza Bonté</h1>
				</a>
			</Link>

			<div className="space-x-4 flex items-center justify-self-end lg:order-1">
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
					className="focus:outline-none outline-none"
					onClick={switchTheme}
				>
					{mounted && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							stroke="currentColor"
							className="h-5 w-5 text-gray-800 dark:text-gray-200"
						>
							{theme === "dark" ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
								/>
							)}
						</svg>
					)}
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
