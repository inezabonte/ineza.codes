import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { IoMdMoon } from "react-icons/io";
import { HiSun } from "react-icons/hi";

export default function NavBar() {
	useEffect(() => setMounted(true), []);

	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	const switchTheme = () => {
		setTheme(resolvedTheme === "dark" ? "light" : "dark");
	};

	if (!mounted) return null;

	return (
		<nav className="px-6 py-5 lg:py-10 grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 gap-y-6 items-center">
			<Link href="/">
				<a className="font-bold text-2xl">
					<h1 className="dark:text-white">Ineza Bonté</h1>
				</a>
			</Link>

			<div className="space-x-4 flex items-center justify-self-end lg:order-1">
				<button
					className="focus:outline-none outline-none"
					onClick={switchTheme}
					role="img"
					aria-labelledby="theme-switcher"
					type="button"
				>
					<title id="theme-switcher">
						{resolvedTheme === "dark"
							? "Switch to light mode"
							: "Switch to dark mode"}
					</title>
					{resolvedTheme === "dark" ? (
						<HiSun className="h-6 w-6" />
					) : (
						<IoMdMoon className="h-6 w-6" />
					)}
				</button>
			</div>
			<div className="space-x-5 text-lg font-bold col-span-2 justify-self-center lg:col-span-1">
				<Link href="/blog">
					<a className="uppercase">Blog</a>
				</Link>
				<Link href="/about">
					<a className="uppercase">About</a>
				</Link>
				<Link href="/now">
					<a className="uppercase">Now</a>
				</Link>
			</div>
		</nav>
	);
}
