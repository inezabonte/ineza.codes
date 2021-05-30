import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children, page }) {
	return (
		<div className="max-w-3xl  m-auto flex flex-col min-h-screen mt-6 lg:mt-0">
			<Header page={page} />
			<NavBar />
			{children}
			<Footer />
		</div>
	);
}
