import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";

export default function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem="true">
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
