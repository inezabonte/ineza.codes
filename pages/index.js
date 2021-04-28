import Image from "next/image";
import Layout from "../components/Layout";

export default function index() {
	return (
		<Layout page="Ineza Bonté">
			<main className="bg-gray-200 dark:bg-gray-800">
				<section className="p-10 flex lg:max-w-6xl  lg:m-auto flex-col justify-center items-center lg:flex-row  lg:justify-between ">
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
					<div className=" md:self-center max-w-lg">
						<p className="font-bold text-2xl">I'm Ineza Bonté,</p>
						<p className="text-base">
							I'm a Fullstack Developer based in Kigali, Rwanda 🇷🇼
							<br />I have a passion for coding and developing Web Applications.
						</p>
						<p className="text-base">
							I sometimes publish articles on{" "}
							<a
								href="https://dev.to/inezabonte"
								rel="noopener noreferrer"
								target="_blank"
								className="underline"
							>
								DEV
							</a>{" "}
							about concepts I've learnt in Software Development.
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
		</Layout>
	);
}
