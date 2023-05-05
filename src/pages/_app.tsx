// _app.tsx

import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import store from '@/store/store';
import '@/styles/reset.css';
import '@/styles/theme.css';
import BackgroundAudio from '@/components/BackgroundAudio';
import Background from '@/components/Background';

function displayAsciiArtInConsole(): void {
  const asciiArt = `
░██████╗██╗██████╗░██████╗░░█████╗░██╗░░██╗░█████╗░██████╗░███╗░░██╗░░░██████╗░░█████╗░░██████╗░███████╗
██╔════╝██║██╔══██╗██╔══██╗██╔══██╗██║░██╔╝██╔══██╗██╔══██╗████╗░██║░░░██╔══██╗██╔══██╗██╔════╝░██╔════╝
╚█████╗░██║██████╔╝██████╔╝███████║█████═╝░██║░░██║██████╔╝██╔██╗██║░░░██████╔╝███████║██║░░██╗░█████╗░░
░╚═══██╗██║██╔═══╝░██╔═══╝░██╔══██║██╔═██╗░██║░░██║██╔══██╗██║╚████║░░░██╔═══╝░██╔══██║██║░░╚██╗██╔══╝░░
██████╔╝██║██║░░░░░██║░░░░░██║░░██║██║░╚██╗╚█████╔╝██║░░██║██║░╚███║██╗██║░░░░░██║░░██║╚██████╔╝███████╗
╚═════╝░╚═╝╚═╝░░░░░╚═╝░░░░░╚═╝░░╚═╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝╚═╝░░╚══╝╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚═════╝░╚══════╝`;

  console.log(
    `\n\n%c${asciiArt}\n\n%cGenerate by fsymbols\n\n`,
    'color: #607d8b;',
    'color: #607d8b;font-size: 14px;'
  );
}

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  useEffect(displayAsciiArtInConsole, []);

  return (
    <Provider store={store}>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="height=device-height, width=device-width, initial-scale=1.0"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="author" content="@sippakorn-prem" />
        <meta name="theme-color" content="#616161" media="(prefers-color-scheme: dark)" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Background />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
