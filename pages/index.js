import Header from "../components/Header";
import Image from "next/image";
import NavBar from "../components/NavBar";

export default function index() {
	return (
		<>
			<Header />
			<NavBar />
			<main className="bg-gray-200">
				<section className="lg:max-w-6xl  lg:m-auto p-10 flex flex-col justify-center items-center lg:flex-row  lg:justify-between ">
					<div className="mb-10">
						<Image
							priority={true}
							src="/Images/me.jpg"
							width={200}
							height={200}
							alt="A potrait of Ineza Bonté smiling"
							className="rounded-full"
						/>
					</div>
					<div className=" md:self-center max-w-lg space-y-4">
						<p className="font-bold text-2xl">I'm Ineza Bonté,</p>
						<p className="text-base">
							I'm a Fullstack Developer based in Kigali, Rwanda 🇷🇼
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
						<p className="text-base">
							📩 You can contact me by email at:{" "}
							<a href="mailto:inezabonte" className="underline">
								inezabonte@gmail.com
							</a>
						</p>
					</div>
				</section>
			</main>
		</>
	);
}
