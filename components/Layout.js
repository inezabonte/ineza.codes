import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<div className="max-w-4xl  m-auto flex flex-col min-h-screen mt-2 lg:mt-0">
			<NavBar />
			{children}
			<Footer />
		</div>
	);
}
