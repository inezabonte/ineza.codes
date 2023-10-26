import Head from "next/head";

interface HeaderProps {
  title: string;
  description?: string;
  image?: string;
}

export default function Header({ title, description, image }: HeaderProps) {
  const backupImage =
    "https://res.cloudinary.com/tizzertuna/image/upload/v1628544041/Articles/OG_2x_lkjpvb.png";

  const backupDescription =
    "Software developer who enjoys contributing to Open Source and sharing knowledge 🚀";

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
      <meta
        name="description"
        content={description ? description : backupDescription}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
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
