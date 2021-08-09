import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head />
				<body className="bg-white dark:bg-dark-body dark:text-white">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
