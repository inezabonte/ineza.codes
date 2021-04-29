import Layout from "../components/Layout";

export default function about() {
	return (
		<Layout page="About | Ineza Bonté">
			<main className="p-10">
				<h1 className="text-4xl font-bold dark:text-white mb-4">About Me</h1>
				<div className="text-2xl space-y-6 dark:text-gray-200">
					<p>
						Hey there, my name I'm Bonté, welcome to my portfolio. This is my
						corner of the internet where you get to see what I've been working
						on and writing about.
					</p>
					<p>
						I got into web developement in 2020 just as the pandemic started. I
						saw no better use of my time than to pick up a new skill which I
						decided would be Web Development. I started from JavaScript
						thereafter progressing on to make fully interactive websites and
						learning other technologies.
					</p>
					<p>
						So far I have gained experience working with the MERN, PERN, FERN
						stacks and of late I have been working with Next.js which this
						website is built on.
					</p>
					<p>
						You can contact me on{" "}
						<a href="mailto:inezabonte@gmail.com" className="underline">
							inezabonte@gmail.com
						</a>{" "}
						if you would like to work together on a project or just to say hi!
						:)
					</p>
				</div>

				<h2 className="underline text-2xl my-6 dark:text-white font-bold">
					Hobbies
				</h2>
				<div className="text-2xl space-y-6 dark:text-gray-200">
					<p>
						As much as coding can be somehow addictive. It's healthy to take a
						break and relax which helps improve your mental and physical
						wellness. I enjoy watching movies, listening to music; one of my
						favourite genres is EDM.
					</p>
					<p>
						I also enjoy taking walks, though the current situtation (Covid)
						doesn't allow me to do so at the liberty I'd want. I'm trying to
						learn the guitar, though it's painful in the process of building my
						calluses.
					</p>
				</div>
			</main>
		</Layout>
	);
}
