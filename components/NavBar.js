import { useState, useEffect } from "react";
import { GithubOutlined, TwitterOutlined } from "@ant-design/icons";
import { useTheme } from "next-themes";
import Image from "next/image";
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
		<header className="h-16 lg:max-w-6xl px-10 lg:m-auto flex items-center justify-between ">
			<div>
				<p className="font-bold text-xl">Ineza Bonté</p>
			</div>
			<div className="space-x-4 flex items-center justify-center divide-x dark:divide-gray-700">
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
					className="h-auto flex justify-center items-center outline-none focus:outline-none pl-4"
					onClick={switchTheme}
				>
					{theme === "light" ? (
						<Image
							src="/Images/moon.svg"
							width={20}
							height={20}
							className="fill-current text-gray-100"
						/>
					) : (
						<Image src="/Images/sun.svg" width={20} height={20} />
					)}
				</button>
			</div>
		</header>
	);
}
