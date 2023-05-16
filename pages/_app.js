import "../styles/global.css";

import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

export default function MyApp({ Component, pageProps }) {
	return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem="true">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
