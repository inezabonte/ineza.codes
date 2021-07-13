import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<div className="max-w-4xl  m-auto flex flex-col min-h-screen mt-6 lg:mt-0">
			<NavBar />
			{children}
			<hr className="border-gray-300 dark:border-gray-700" />
			<Footer />
		</div>
	);
}
