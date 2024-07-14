/* eslint-disable prettier/prettier */
import { ReactElement } from 'react';

type key = 'keywords' | 'description' | 'ogTitle' | 'ogDescription' | 'ogType' | 'ogUrl' | 'ogImage';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PartialRecord<K extends keyof any, T> = {
	[P in K]?: T;
};

export type IMetaProps = PartialRecord<key, string>;

export default function Meta({ keywords, description, ogTitle, ogDescription, ogUrl, ogImage, ogType }: IMetaProps): ReactElement {
	return (
		<>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />

			<meta property="og:title" content={ogTitle} />
			<meta property="og:description" content={ogDescription} />
			<meta property="og:url" content={ogUrl} />
			<meta property="og:image" content={ogImage} />
			<meta property="og:type" content={ogType} />
		</>
	);
}

const defaultKeywords = [
	// en
	'Sippakorn Suphapinyo',
	'Sippakorn',
	'Suphapinyo',
	'Prem',
	'sippakorn-prem',

	//th
	'สิปปกร ศุภภิญโญ',
	'สิปปกร',
	'ศุภภิญโญ',
	'เปรม',
];

Meta.defaultProps = {
	keywords: defaultKeywords.join(','),
	description: "Hi there, I'm Prem Sippakorn Suphapinyo. I'm Software Developer who live in Bangkok, Thailand.",
	ogTitle: 'Sippakorn Suphapinyo',
	ogDescription: "Hi there, I'm Prem Sippakorn Suphapinyo. I'm Software Developer who live in Bangkok, Thailand.",
	ogUrl: 'https://sippakorn.page/',
	ogImage: '/assets/images/og-image.png',
	ogType: 'website',
};
