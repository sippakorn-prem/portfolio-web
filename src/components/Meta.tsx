/* eslint-disable prettier/prettier */
import {
	DEFAULT_DESCRIPTION,
	DEFAULT_KEYWORDS,
	DEFAULT_OG_IMAGE,
	MY_FULL_NAME,
	MY_PORTFOLIO_URL,
} from '@/common/constant';
import { ReactElement } from 'react';

type key =
	| 'keywords'
	| 'description'
	| 'ogTitle'
	| 'ogDescription'
	| 'ogType'
	| 'ogUrl'
	| 'ogImage';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PartialRecord<K extends keyof any, T> = {
	[P in K]?: T;
};

export type MetaProps = PartialRecord<key, string>;

export default function Meta({
	keywords,
	description,
	ogTitle,
	ogDescription,
	ogUrl,
	ogImage,
	ogType,
}: MetaProps): ReactElement {
	return (
		<>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta property="og:title" content={ogTitle} />
			<meta property="og:description" content={ogDescription} />
			<meta property="og:type" content={ogType} />
			<meta property="og:url" content={ogUrl} />
			<meta property="og:image" content={ogImage} />
		</>
	);
}

Meta.defaultProps = {
	keywords: DEFAULT_KEYWORDS.join(','),
	description: DEFAULT_DESCRIPTION,
	ogTitle: MY_FULL_NAME,
	ogDescription: DEFAULT_DESCRIPTION,
	ogType: 'website',
	ogUrl: MY_PORTFOLIO_URL,
	ogImage: DEFAULT_OG_IMAGE,
};
