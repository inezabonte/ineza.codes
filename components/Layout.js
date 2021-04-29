import Header from "./Header";
import NavBar from "./NavBar";

export default function Layout({ children, page }) {
	return (
		<div className="lg:max-w-4xl  lg:m-auto">
			<Header page={page} />
			<NavBar />
			{children}
		</div>
	);
}
