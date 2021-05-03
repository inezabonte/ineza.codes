import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children, page }) {
	return (
		<div className="lg:max-w-4xl  lg:m-auto flex flex-col min-h-screen ">
			<Header page={page} />
			<NavBar />
			{children}
			<Footer />
		</div>
	);
}
