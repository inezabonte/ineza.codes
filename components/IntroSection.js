import Image from "next/image";
import profilePic from "../public/Images/me.jpg";

export default function IntroSection() {
	return (
		<section className="flex flex-col justify-center items-center lg:flex-row-reverse  lg:justify-around space-y-8 ">
			<div className="lg:self-end max-w-lg space-y-4 prose dark:prose-dark prose-lg md:prose-xl">
				<h2>I'm Ineza Bonté,</h2>
				<p>
					A Fullstack Developer based in Kigali, Rwanda
					<br />I have a passion for coding and developing Web Applications.
				</p>
				<p>
					<a href="mailto:inezabonte@gmail.com">Shoot me an email</a> if you
					would like to work together.
				</p>
			</div>
			<div>
				<Image
					priority={true}
					src={profilePic}
					height={250}
					width={250}
					alt="A potrait of Ineza Bonté smiling"
					className="rounded"
				/>
			</div>
		</section>
	);
}
