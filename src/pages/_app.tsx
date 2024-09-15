import Meta from '@/components/Meta';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { ReactElement, useEffect } from 'react';

function displayAsciiArtInConsole(): void {
	const asciiArt = `
██╗░░██╗██╗░░░  ██╗██╗███╗░░░███╗  ██████╗░██████╗░███████╗███╗░░░███╗
██║░░██║██║░░░  ██║╚█║████╗░████║  ██╔══██╗██╔══██╗██╔════╝████╗░████║
███████║██║░░░  ██║░╚╝██╔████╔██║  ██████╔╝██████╔╝█████╗░░██╔████╔██║
██╔══██║██║██╗  ██║░░░██║╚██╔╝██║  ██╔═══╝░██╔══██╗██╔══╝░░██║╚██╔╝██║
██║░░██║██║╚█║  ██║░░░██║░╚═╝░██║  ██║░░░░░██║░░██║███████╗██║░╚═╝░██║
╚═╝░░╚═╝╚═╝░╚╝  ╚═╝░░░╚═╝░░░░░╚═╝  ╚═╝░░░░░╚═╝░░╚═╝╚══════╝╚═╝░░░░░╚═╝`;

	console.log(
		`\n\n%c${asciiArt}\n\n%cGenerate by fsymbols\n\n`,
		`color: ${'grey'};`,
		`color: ${'grey'};font-size: 14px;`,
	);
}

function MyApp({ Component, pageProps }: AppProps): ReactElement {
	useEffect(displayAsciiArtInConsole, []);

	return (
		<React.Fragment>
			<Head>
				<Meta />
				<meta
					name="viewport"
					content="height=device-height, width=device-width, initial-scale=1.0"
				/>
			</Head>
			<Component {...pageProps} />
		</React.Fragment>
	);
}

export default MyApp;
