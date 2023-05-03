// _app.tsx

import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import store from '@/store/store';
import '@/styles/reset.css';
import { ReactElement } from 'react';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
