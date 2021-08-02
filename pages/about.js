import Layout from "components/Layout";
import Header from "components/Header";

export default function about() {
	return (
		<Layout>
			<Header title="About | Ineza Bonté" />
			<main className=" self-center p-6">
				<h1 className="text-4xl font-bold dark:text-white mb-4">About Me</h1>
				<div className="prose prose-xl dark:prose-dark max-w-2xl">
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
