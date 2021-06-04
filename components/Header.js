import Head from "next/head";

export default function Header({ title, description, image }) {
	const backupImage =
		"https://res.cloudinary.com/tizzertuna/image/upload/v1622809072/Articles/Custom_Size_1_2x_qgdmz9.png";

	const backupDescription =
		"Software developer, writer and Open Source Contributor 🚀";

	return (
		<Head>
			<title>{title}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
			<meta property="og:title" content={title} />
			<meta property="og:image" content={image ? image : backupImage} />
			<meta
				property="og:description"
				content={description ? description : backupDescription}
			/>
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta name="twitter:creator" content="@inezabonte" />
			<meta name="twitter:site" content="@inezabonte" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta
				name="twitter:description"
				content={description ? description : backupDescription}
			/>
			<meta name="twitter:image" content={image ? image : backupImage} />
			<meta name="twitter:image:alt" content={title} />
		</Head>
	);
}
