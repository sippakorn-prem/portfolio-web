import styles from '@/styles/theme.module.scss';
import '@/styles/reset.css';
import Head from 'next/head';
import store from '@/store/store';
import Header from '@/components/Header';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { ReactElement, useEffect } from 'react';

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
        <meta
          name="viewport"
          content="height=device-height, width=device-width, initial-scale=1.0"
        />
      </Head>
      <div className={styles.body}>
        <Header />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
