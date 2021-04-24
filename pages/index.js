import Header from "../components/Header";
import Image from "next/image";
import NavBar from "../components/NavBar";
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
			<NavBar />
			<main className="lg:h-screen-90vh max-w-7xl m-auto flex flex-col justify-end items-center lg:flex-row-reverse lg:items-end lg:justify-between">
				<div className="m-10 md:self-center max-w-lg">
					<div className="space-y-4">
						<p className="text-base font-bold">
							Fullstack Developer based in Kigali, Rwanda 🇷🇼
						</p>
						<p className="text-base">
							I have a passion for creating dope stuff with code and having fun
							while at it. I love learning and sharing my knowledge.
						</p>
						<p className="text-base">
							I sometimes publish articles on DEV about concepts I've learnt in
							Software Developement.
						</p>
						<p className="text-base">
							Apart from the tech life I do enjoy watching movies, listening to
							music(EDM) and sometimes taking long walks.
						</p>
						<p className="text-base">
							⚡️ Fun fact: I am a Space Travel enthusiast
						</p>
					</div>
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
				<Image
					src="/Images/me.png"
					width={627}
					height={551}
					alt="A potrait of Ineza Bonté smiling"
				/>
			</main>
		</>
	);
}
