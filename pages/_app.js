import "../styles/global.css";
import { ThemeProvider } from "next-themes";

export default function MyApp({ Component, PageProps }) {
	return (
		<ThemeProvider attribute="class">
			<Component {...PageProps} />
		</ThemeProvider>
	);
}
