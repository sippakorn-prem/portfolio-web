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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
