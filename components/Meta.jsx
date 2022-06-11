import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta name='keywords' content={keywords} />
			<meta charSet='utf-8' />
			<link rel='icon' href='/favicon.ico' />
		</Head>
	);
};

Meta.defaultProps = {
	title: "Pilkom News",
	keywords: "Pilkom news, programming, gulag",
	description: "Kasak kusuk terpanas gulag terkutuk",
};

export default Meta;
