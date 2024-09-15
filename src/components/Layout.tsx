import { DEFAULT_TITLE } from '@/common/constant';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import Meta, { MetaProps } from './Meta';

interface Props extends MetaProps {
	title?: string;
	children?: ReactElement | ReactElement[];
}

export default function Layout(props: Props): ReactElement {
	return (
		<React.Fragment>
			<Head>
				<Meta {...props} />
				<title>{props.title || DEFAULT_TITLE}</title>
			</Head>
			<main>{props.children}</main>
		</React.Fragment>
	);
}
