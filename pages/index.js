import Header from "../components/Header";
import Image from "next/image";
import {
	MailOutlined,
	TwitterOutlined,
	LinkedinFilled,
	GithubOutlined,
} from "@ant-design/icons";

export default function index() {
	return (
		<>
			<Header />
			<div className="h-screen max-w-7xl m-auto flex flex-col justify-end items-center lg:flex-row-reverse lg:items-end lg:justify-between">
				<div className="m-10 md:self-center">
					<p className="font-bold text-4xl mb-2">Ineza Bonté</p>
					<p className="text-lg">
						Fullstack Developer based in Kigali, Rwanda 🇷🇼
					</p>
					<div className="flex justify-between mt-4">
						<a
							target="_blank"
							href="https://github.com/inezabonte"
							rel="noopener noreferrer"
						>
							<GithubOutlined className="text-3xl" />
						</a>
						<a
							target="_blank"
							href="https://twitter.com/inezabonte"
							rel="noopener noreferrer"
						>
							<TwitterOutlined className="text-3xl" />
						</a>
						<a
							target="_blank"
							href="https://www.linkedin.com/in/inezabonte/"
							rel="noopener noreferrer"
						>
							<LinkedinFilled className="text-3xl" />
						</a>
						<a href="mailto:inezabonte@gmail.com">
							<MailOutlined className="text-3xl" />
						</a>
					</div>
				</div>
				<Image src="/Images/me.png" width={627} height={551} />
			</div>
		</>
	);
}
