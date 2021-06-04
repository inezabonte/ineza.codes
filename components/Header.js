import Head from "next/head";

export default function Header({ page }) {
	return (
		<Head>
			<title>{page}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
			<meta property="og:title" content={page} />
			<meta
				property="og:image"
				content="https://res.cloudinary.com/tizzertuna/image/upload/v1622804350/Articles/Custom_Size_1_2x_vzbshi.png"
			/>
			<meta
				property="og:description"
				content="Software developer and Space travel enthusiat 🚀"
			/>
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta name="twitter:creator" content="@inezabonte" />
			<meta name="twitter:site" content="@inezabonte" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={page} />
			<meta
				name="twitter:description"
				content="Software developer and Space travel enthusiat 🚀"
			/>

			<meta
				name="twitter:image"
				content="https://res.cloudinary.com/tizzertuna/image/upload/v1622804350/Articles/Custom_Size_1_2x_vzbshi.png"
			/>
		</Head>
	);
}
