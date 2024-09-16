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

export default function Meta(props: MetaProps): ReactElement {
	const {
		keywords = DEFAULT_KEYWORDS.join(','),
		description = DEFAULT_DESCRIPTION,
		ogDescription = DEFAULT_DESCRIPTION,
		ogImage = DEFAULT_OG_IMAGE,
		ogTitle = MY_FULL_NAME,
		ogType = 'website',
		ogUrl = MY_PORTFOLIO_URL,
	} = props;

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
