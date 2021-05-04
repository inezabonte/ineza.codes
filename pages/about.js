import Layout from "../components/Layout";

export default function about() {
	return (
		<Layout page="About | Ineza Bonté">
			<main className="p-6 mb-auto">
				<h1 className="text-4xl font-bold dark:text-white mb-4">About Me</h1>
				<div className="text-xl space-y-6 dark:text-gray-200">
					<p>
						Hey there, I'm Bonté, welcome to my portfolio. This is my corner of
						the internet where you get to see what I've been working on and
						writing about.
					</p>
					<p>
						I got into web development in 2020 just as the pandemic started.
						With the help of sites like FreeCodeCamp, friends and the Andela
						Technical Leadership program. I was able to level up my skills to
						become a FullStack Developer.
					</p>
					<p>
						Apart from coding I enjoy watching movies and listening to music.
						I'm also trying to learn the guitar, though it's painful in the
						process of building my calluses.
					</p>
				</div>
			</main>
		</Layout>
	);
}
