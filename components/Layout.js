import Header from "./Header";
import NavBar from "./NavBar";

export default function Layout({ children, page }) {
	return (
		<div>
			<Header page={page} />
			<NavBar />
			{children}
		</div>
	);
}
