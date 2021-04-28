import Head from "next/head";

export default function Header({ page }) {
	return (
		<Head>
			<title>{page}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}
