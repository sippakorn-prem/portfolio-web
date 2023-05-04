// _app.tsx

import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import store from '@/store/store';
import '@/styles/reset.css';
import '@/styles/theme.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Provider store={store}>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="author" content="@sippakorn-prem" />
        <meta name="theme-color" content="#212121" media="(prefers-color-scheme: dark)" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
